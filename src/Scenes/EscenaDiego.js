
import ball from "../Game_Objects/BowlingBall.js";
import Wall from "../Game_Objects/Wall.js";
import Obstacle from "../Game_Objects/Obstacle.js";
import PinManager from "../Game_Objects/PinManager.js";
import Levels from "../Game_Objects/Levels.js";

export default class EscenaDiego extends Phaser.Scene {
    constructor() {
        super({ key: "Level_Diego" });
    }

    preload(){

        
        this.add.text(this.scale.width/2,this.scale.height/2 - 200,
            "Para avanzar a la tienda derriba todos los pines    \n cuando la bola se salga o se quede quieta esta respawneara \n \n El enemigo existe pero implementamos los bolos hoy así que no dío tiempo unirlos",{
            fontFamily: "Arial",
            align: "center",
            fontSize: 25,
            color: "rgb(26, 194, 14)"
        }).setOrigin(0.5);
    }

    create(){
        

        this.box = {};
        this.box.wallUp = new Wall(this, this.scale.width/2, 300, "Wall_Prototype", this.scale.width, 30);
        this.box.wallDown = new Wall(this, this.scale.width/2, 580, "Wall_Prototype", this.scale.width, 30);
        this.box.wallLeft = new Wall(this, 20, 440, "Wall_Prototype", 30, this.scale.height/2);

        this.levels = Levels;
        this.levelData = this.levels[this.registry.get("level")];
        console.log(this.levelData);

                
        //Posiciones donde aparecen obstaculos en orden
        this.obsPos = [{ x : 400, y : 450},{x : 500, y : 450}] ;      
        this.obstacles = [];

        for(let i = 0; i < this.levelData.obstacles; i++){
            this.obstacles.push(new Obstacle(this, this.obsPos[i].x, this.obsPos[i].y , "Roca" , 15));
        }
        console.log(this.obsPos.length);
        //Guardamos las vidas
        this.ballsLeft = this.levelData.lives;
        this.pManager = new PinManager(this, 650, 450, 40);
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

        this.createNewBall();


        //Menú de pausa
        this.teclaEscape = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        this.teclaEscape.on("down", () => {
            if (this.scene.isActive("menuPausa")) return;   //sólo se puede abrir si está cerrada
            //lanzo la escena y mando el key de esta para que el init del menu de pausa lo pille
            this.scene.launch("menuPausa", {previousScene: this.scene.key});
            this.scene.pause();
        })

        //Para detectar si ya ha perdido
        this.defeated = false;
        //Resetar con R
        this.input.keyboard.on("keydown-R", this.resetBall,this);

    }

    update(time,delta){
        if (this.allPinsDown()){
         this.actualLvl = this.registry.get("level")
         if(this.actualLvl >= 2){
            console.log("¡Has ganado!!");
            this.scene.start("MainMenu");
            return;
         }
         this.actualLvl++;
         this.registry.set("level", this.actualLvl);
         this.scene.start("EscenaAlejandro");
         return;
        }

        if(this.ballsLeft <= 0){
            if(!this.defeated){
                this.defeated = true;
                //Ponemos delay por si acaso hay algun bolo moviendose
                this.time.delayedCall(2000, () => this.checkDefeat());
            }
            return;
        }
        if (!this.ball) this.createNewBall();
        this.ball.update(time,delta);
        if(this.ball.body.left > this.scale.width || (this.ball.hasAlreadyBeenTrown && (this.ball.body.velocity.x == 0 && this.ball.body.velocity.y == 0)))this.killBall();
    }

    //Metodos extra para la demo
    createNewBall(){
        if(this.ballsLeft <= 0){
            return;
        } 
        this.ball = new ball(this, 100, 450, "Ball" ,Phaser.Math.Between(0, 15) , 50, 2, this.ballsLeft);

        this.ballColliders = [];
        this.ballColliders.push(
            this.physics.add.collider(this.ball, this.box.wallUp),
            this.physics.add.collider(this.ball, this.box.wallDown),
            this.physics.add.collider(this.ball, this.box.wallLeft),
        );
        
        for(let i = 0; i < this.obstacles.length; i++){
            this.ballColliders.push(this.physics.add.collider(this.ball, this.obstacles[i]));
        }

        for(let c = 0; c < this.pManager.pins.length; c++){
            //Cuando colisiona con la bola se cae
            this.ballColliders.push(
                this.physics.add.overlap(this.ball, this.pManager.pins[c], (ball, pin) => {
                    if (pin.launch(ball.body.velocity, ball.body.center)){
                        ball.body.velocity.scale(0.8);
                    }
                })
            )

        }
    }
    //Metodos extra para la demo
    killBall() {
        if (this.ball) {
            this.ballsLeft--;
            console.log("Vidas restantes: " + this.ballsLeft);
            this.ball.body.enable = false;
            this.ballColliders.forEach(collider => collider.destroy());
            this.ballColliders = [];
            this.ball.destroy();
            this.ball = null;
        }
    }

    //Metodo para la demo
    allPinsDown() {
    return this.pManager.pins.every(pin => pin.hasBeenLaunched);
    }

    resetBall(){
        if(!this.ball) return;

        //Si no se ha lanzado no resta vida
        if(this.ball.hasAlreadyBeenTrown) this.killBall();
        else {
            this.ballsLeft++;
            this.killBall();
        }
    }

    checkDefeat(){
        if(this.allPinsDown()) return;

        console.log("Has perdido :(");
        this.scene.start("MainMenu");
        return;
    }
}