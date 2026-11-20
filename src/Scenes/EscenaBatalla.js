import Enemigo from '../Game_Objects/Enemigo.js';
import CuboLava from '../Game_Objects/CuboLava.js';
import DiabloMarchito from '../Game_Objects/DiabloMarchito.js';
import Player from '../Game_Objects/Player.js';
import BowlingBall from '../Game_Objects/BowlingBall.js';
import PinManager from '../Game_Objects/PinManager.js';
import Inventario from '../Game_Objects/inventario.js';
import Wall from "../Game_Objects/Wall.js"; 

export default class EscenaBatalla extends Phaser.Scene {
    constructor() {
        super({ key: "EscenaBatalla" });
    }

    create() {

        //vemos si hay inventario
        if (!this.registry.has("inventario")) {
            this.registry.set("inventario", new Inventario());
        }
        this.inventario = this.registry.get("inventario");

        //instanciamos a petra arriba a la izquierda
        this.player = new Player(this, 100, 100, "ProtaIdle", this.inventario,
            (nuevaPuntuacion) => {textScore.setText("Puntos: " + nuevaPuntuacion);});
        this.registry.set("player", this.player);

        const textScore = this.add.text(300, 100, "Puntos: " + this.player.score, { font: "34px Arial", fill: "#dbd3d3" });
        textScore.setOrigin(0, 0);
        textScore.setScrollFactor(0,0);
        
        //Variable encargada de controlar cuando resetear los pines
        this.trows = 0;


        // creacion del equipo de enemigos
        this.equipoEnemigos = [];
        let diablillo = new Enemigo(this, this.scale.width - 250, 130, "enemigo", 60, 60);
        diablillo.setScale(0.5);
        this.equipoEnemigos.push(diablillo);
        let cubo = new CuboLava(this, this.scale.width - 150, 130);
        cubo.setScale(0.5);
        this.equipoEnemigos.push(cubo);
        let diablo = new DiabloMarchito(this, this.scale.width - 50, 130);
        diablo.setScale(0.5);
        this.equipoEnemigos.push(diablo);



        this.textoVida = this.add.text(this.scale.width - 300, 10, "Vida enemigo 1: 60", {
            font: "30px Arial",
            color: "rgb(231, 231, 231)"});

        // pista, obstáculos, pin manager y logica bola (de escena adan, hasta la linea 151)
        this.box = {};
        this.box.wallUp = new Wall(this, this.scale.width/2, 300, "Wall_Prototype", this.scale.width, 30);
        this.box.wallDown = new Wall(this, this.scale.width/2, 580, "Wall_Prototype", this.scale.width, 30);
        this.box.wallLeft = new Wall(this, 20, 440, "Wall_Prototype", 30, this.scale.height/2);

        this.obstaculosActivos = [];
        this.obstaculosActivos.push(cubo.colocarMagma(400, 400)); // coordenadas de aparicion de los obstaculos
        this.obstaculosActivos.push(diablo.colocarArenaAlmas(500, 500));

        
        this.pManager = new PinManager(this, 650, 450, 40, this.player, "bolo");

        //Añadimos colisiones
        for(let c = 0; c < this.pManager.pins.length; c++){

            this.physics.add.collider(this.pManager.pins[c], this.box.wallUp);
            this.physics.add.collider(this.pManager.pins[c], this.box.wallDown);
            this.physics.add.collider(this.pManager.pins[c], this.box.wallLeft);
        }
        //Para que colisionen entre ellos
        this.physics.add.overlap(this.pManager.pins, this.pManager.pins, (a, b) => {
            a.launch(b.body.velocity, b.body.center)
            b.launch(a.body.velocity, a.body.center);
        });

        this.createNewBall(); // instanciamos bola

        // añadimos controles
        this.teclaEscape = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        this.teclaEscape.on("down", () => {
            if (this.scene.isActive("menuPausa")) return;
            this.scene.launch("menuPausa", {previousScene: this.scene.key});
            this.scene.pause();
        });

        this.input.keyboard.on("keydown-R", this.resetBall, this);

        // control del daño en tiempo real
        this.danoProcesado = 0;
    }

    update(time, delta) {
        if (!this.ball) this.createNewBall();
        
        this.ball.update(time, delta);

        // quitamos vida a los enemigos cada vez que derribamos un bolo
        if (this.player.acumulador > this.danoProcesado) {
            let danoReciente = this.player.acumulador - this.danoProcesado; // lo que teniamos - lo que acabamos de quitar
            this.danoProcesado = this.player.acumulador;
            
            this.hacerDanoAlEnemigo(danoReciente);
        }
        
        if(this.ball.body.left > this.scale.width || (this.ball.hasAlreadyBeenTrown && (this.ball.body.velocity.x == 0 && this.ball.body.velocity.y == 0))) {
            
            if (this.ball.hasAlreadyBeenTrown) {
                this.finalizarTurno();
            }
            this.killBall();
        }
    }

    //logica bola
    createNewBall() {
        this.ball = new BowlingBall(this, 100, 450, "Ball" ,Phaser.Math.Between(0, 15) , 50, 2, 100);

        this.ballColliders = [];
        this.ballColliders.push(
            this.physics.add.collider(this.ball, this.box.wallUp),
            this.physics.add.collider(this.ball, this.box.wallDown),
            this.physics.add.collider(this.ball, this.box.wallLeft),
        
            this.physics.add.collider(this.ball, this.obstaculosActivos) 
        );

        for(let c = 0; c < this.pManager.pins.length; c++){
            this.ballColliders.push(
                this.physics.add.overlap(this.ball, this.pManager.pins[c], (ball, pin) => {
                    if (pin.launch(ball.body.velocity, ball.body.center)){
                        ball.body.velocity.scale(0.8);
                    }
                })
            );
        }
    }

    killBall() {
        if (this.ball) {
            this.ball.body.enable = false;
            this.ballColliders.forEach(collider => collider.destroy());
            this.ballColliders = [];
            this.ball.destroy();
            this.ball = null;
        }
    }

    resetBall(){
        if(!this.ball) return;

        if(this.ball.hasAlreadyBeenTrown) {
            this.finalizarTurno(); 
            this.killBall();
        }
        else {
            this.killBall();
        }
    }

    // sistema de combate
    hacerDanoAlEnemigo(cantidad) {
        let enemigoVivo = this.equipoEnemigos.find(e => e && e.active);
        
        if (enemigoVivo) 
        {
            if (enemigoVivo instanceof CuboLava || enemigoVivo instanceof DiabloMarchito) 
            {
                enemigoVivo.recibirDano(cantidad, this.inventario);
            } 
            else 
            {
                enemigoVivo.recibirDano(cantidad);
                if (enemigoVivo.puntosVida <= 0) this.inventario.modifySulfur(1);
            }
            
            if(enemigoVivo.active){
                this.textoVida.setText("Vida enemigo 1: " + enemigoVivo.puntosVida);
            } else {
                this.textoVida.setText("enemigo derrotado");
            }
        }
    }

    finalizarTurno() {
        this.player.bolasLanzadas(); 
        this.danoProcesado = 0; // Se resetea para el próximo tiro

        // if (this.allPinsDown()) {
        //     this.pManager.resetPins(); 
        // }

        this.updateTrows();
    }

    allPinsDown() {
        return this.pManager.pins.every(pin => pin.hasBeenLaunched);
    }

    updateTrows(){

        this.time.delayedCall(300, ()=>{

            if (this.trows % 2 == 0){
                if (this.pManager.checkDownPins()){
                    this.trows = this.trows + 2;
                    this.pManager.resetPins();
                }
                else this.trows++;
            } 
            else {
                this.trows++;
                this.pManager.resetPins();
            }

            console.log(this.trows);

        })
                
    }
}