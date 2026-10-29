export default class BowlingBall extends Phaser.GameObjects.Image{
    constructor(scene, x, y, texture, s){
        super(scene, x, y, texture);
        
        this.scene.add.existing(this);

        //Fisicas y config del body
        scene.physics.add.existing(this);

        this.setDisplaySize(s,s);

        this.body.setCircle(this.width/2);
        this.setOrigin(0.5,0.5);
        this.body.setCollideWorldBounds(true);
        this.body.setBounce(0.75);


        this.startSpeed = 500;

        //Usualmente le pongo como 0.2 de friccion
        this.friction = 0.2;

        this.spinSpeed = 2;


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

        const drag = Math.exp(-this.friction * delta / 1000);

        this.body.setVelocity(vx* drag, vy* drag);
   

        this.angle += (this.spinSpeed * (delta /1000) * this.body.velocity.length());



        if (this.body.velocity.length()  < 8){
            this.body.setVelocity(0,0);

        }
        
    }





}