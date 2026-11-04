
import ball from "../Game_Objects/BowlingBall.js";
import Wall from "../Game_Objects/Wall.js";
import Obstacle from "../Game_Objects/Obstacle.js";
import PinManager from "../Game_Objects/PinManager.js";

export default class Trial_Scene_Adan extends Phaser.Scene {
    constructor() {
        super({ key: "Trial_Scene_Adan" });

    }

    init(){

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


        this.obtacles = {};
        this.obtacles.Rock1 = new Obstacle(this, 400, 450 , "Roca" , 15);

        // this.obtacles.Rock2 = new Obstacle(this, 500, 400 , "Roca" , 15);
        // this.obtacles.Rock3 = new Obstacle(this, 500, 500 , "Roca" , 15);



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
    }

    update(time,delta){
        if (!this.ball) this.createNewBall();
        this.ball.update(time,delta);
        if(this.ball.body.left > this.scale.width || (this.ball.hasAlreadyBeenTrown && (this.ball.body.velocity.x == 0 && this.ball.body.velocity.y == 0)))this.killBall();
        if (this.allPinsDown()){
         this.scene.start("EscenaAlejandro");
         return;
        }
    }

    //Metodos extra para la demo
    createNewBall(){
        this.ball = new ball(this, 100, 450, "Ball" ,Phaser.Math.Between(0, 15) , 50, 2, 100);

        this.ballColliders = [];
        this.ballColliders.push(
            this.physics.add.collider(this.ball, this.box.wallUp),
            this.physics.add.collider(this.ball, this.box.wallDown),
            this.physics.add.collider(this.ball, this.box.wallLeft),

            this.physics.add.collider(this.ball, this.obtacles.Rock1)
            // this.physics.add.collider(this.ball, this.obtacles.Rock2),
            // this.physics.add.collider(this.ball, this.obtacles.Rock3),
        );


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
}