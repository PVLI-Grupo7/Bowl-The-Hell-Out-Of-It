import BowlingBall from "../Game_Objects/BowlingBall.js";
import Wall from "../Game_Objects/Wall.js";

export default class Trial_Scene_Adan extends Phaser.Scene {
    constructor() {
        super({ key: "Trial_Scene_Adan" });
    }

    init(){

    }

    preload(){

        
        this.add.text(this.scale.width/2,this.scale.height/2 - 200,
            "Nada que ver por aquí por el momento :P",{
            fontFamily: "Arial",
            align: "center",
            fontSize: 42,
            color: "rgb(26, 194, 14)"
        }).setOrigin(0.5);
    }

    create(){
        this.ball = new BowlingBall(this, 100, 450, "Ball_Prototype" , 50);
        this.box = {};
        this.box.wallUp = new Wall(this, this.scale.width/2, 300, "Wall_Prototype", this.scale.width, 30);
        this.box.wallDown = new Wall(this, this.scale.width/2, 580, "Wall_Prototype", this.scale.width, 30);
        this.box.wallLeft = new Wall(this, 20, 440, "Wall_Prototype", 30, this.scale.height/2);
        this.box.wallRight = new Wall(this, 780, 440, "Wall_Prototype", 30, this.scale.height/2);

        this.physics.add.collider(this.ball, this.box.wallUp);
        this.physics.add.collider(this.ball, this.box.wallDown);
        this.physics.add.collider(this.ball, this.box.wallLeft);
        this.physics.add.collider(this.ball, this.box.wallRight);
    }

    update(time,delta){
        this.ball.update(time,delta);
    }
}