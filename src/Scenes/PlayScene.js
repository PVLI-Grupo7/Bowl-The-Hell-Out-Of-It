export default class PlayScene extends Phaser.Scene {
    constructor() {
        super({ key: "PlayScene" });
    }

    init(){

    }
    create(){

        //Variables
        this.arrowAmplitude = 0.5;
        this.arrowOSpeed = 0.003;
        this.powerOSpeed = 0.004;
        this.stage = 0;
        this.maxSpeed = 300;
        //Inputs
        this.input.on("pointerdown", this.onClick, this);

        //Objetos
        this.ball =  this.physics.add.image(100, this.scale.height/2, "Ball_Prototype");
        this.arrow = this.add.rectangle(this.ball.x, this.ball.y, 100, 10, 0xffffff).setOrigin(0,0.5);
        this.powerBar = this.add.rectangle(this.ball.x - 50, this.ball.y + 50, 10, 100, 0xff0000).setOrigin(0.5, 1).setVisible(false); 

    }
    preload(){
        
    }

    update(time, delta){
        if(this.stage == 0){
            //Cogemos la rotacion de la primera flecha(direccion hacia la que tiene que ir la bola)
            const rot = Math.sin(time * this.arrowOSpeed) * this.arrowAmplitude;
            this.arrow.setRotation(rot);
        }else if( this.stage == 1){
            // currenTiem se va actualizando y el tamaño de la barra y power va segun currentTime
            const currentTime = time - this.powerStartTime;
            this.power = (1- Math.cos(currentTime * this.powerOSpeed)) / 2;
            this.powerBar.setSize(10, this.power * 100);
        }

    }

    onClick(){
        if(this.stage == 0){
            //Paramos la flecha y mostramos la de la fuerza
            this.powerStartTime = this.time.now;
            this.powerBar.setVisible(true)

            this.stage++;
        }else if(this.stage == 1){
            // Cuando se lanza la bola, no queremos ver mas las flechas
            this.arrow.setVisible(false);
            this.powerBar.setVisible(false);
            //Calculamos la velocidad 
            const vx = Math.cos(this.arrow.rotation) *  this.power * this.maxSpeed;      
            const vy = Math.sin(this.arrow.rotation) * this.power * this.maxSpeed;
            this.ball.setVelocity(vx, vy);
            this.stage++;
        }
    }
}