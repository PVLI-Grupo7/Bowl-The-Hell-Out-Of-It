export default class BowlingBall extends Phaser.GameObjects.Image{
    constructor(scene, x, y, texture, radious, weight = 2){
        super(scene, x, y, texture);
        
        this.scene.add.existing(this);

        //Fisicas y config del body
        scene.physics.add.existing(this);
        this.body.setCircle(this.width/2);
        this.body.setBounce(0.75);

        this.setDisplaySize(radious,radious);

        //Propiedades de la bola (En el futuro quizas tenga un constructor masivo donde se le pasen todas sus propiedades)
        //Peso, ligero = 1, medio = 2, pesado = 3
        this.weight = weight;
        //Velocidad a la que sale disparada
        this.startSpeed = 500;
        //Usualmente le pongo como 0.2 de friccion
        this.friction = 0.2;
        //Velocidad de giro segun su velocidad
        this.spinSpeed = 2;

        //Sitema interactivo para probar la escena BORRAR CUANDO ANTES
        this.pointer = this.scene.input.activePointer;
        this.scene.input.on('pointerup', pointer => {
            if (pointer.leftButtonReleased()) {
                this.body.setVelocity(this.startSpeed * Phaser.Math.Between(-1,1),this.startSpeed * Phaser.Math.Between(-1,1));
            }

        });
    }

    update(time,delta){
        const vx = this.body.velocity.x;
        const vy = this.body.velocity.y;

        //Aplicamos friccion
        const drag = Math.exp(-this.friction * delta / 1000);
        this.body.setVelocity(vx* drag, vy* drag);
   
        //Giramos el sprite segun la velocidad
        this.angle += (this.spinSpeed * (delta /1000) * this.body.velocity.length());

        //Frenamos la bola si esta cerca de pararse para que no se mueva demasiado tiempo
        if (this.body.velocity.length()  < 8){
            this.body.setVelocity(0,0);
        }
        
    }





}