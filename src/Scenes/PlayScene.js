export default class PlayScene extends Phaser.Scene {
    constructor() {
        super({ key: "PlayScene" });
    }

    init(){

    }
    create(){

        //Variables
        this.arrowAmplitude = 0.5;
        this.arrowSpeed = 0.003;
        this.stage = 0;
        //De momento, hasta hacer la barra de fuerza
        this.initialSpeed = 100;

        this.input.on("pointerdown", this.onClick, this);

        this.ball =  this.physics.add.image(100, this.scale.height/2, "Ball_Prototype");
        this.arrow = this.add.rectangle(this.ball.x, this.ball.y, 100, 10, 0xffffff).setOrigin(0,0.5);

    }
    preload(){
        
    }

    update(time, delta){
        if(this.stage == 0){
            this.rot = Math.sin(time * this.arrowSpeed) * this.arrowAmplitude;
            this.arrow.setRotation(this.rot);
        }

    }

    onClick(){
        if(this.stage == 0){
            const vx = Math.cos(this.arrow.rotation) * this.initialSpeed;      
            const vy = Math.sin(this.arrow.rotation) * this.initialSpeed;
            this.ball.setVelocity(vx, vy);
            this.arrow.setVisible(false);
            //Paramos la flecha
            this.stage++;
        }
    }
}