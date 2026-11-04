export default class Pin extends Phaser.GameObjects.Image{
    constructor(scene, x, y, texture, width, height){
        super(scene, x, y, texture);

        this.scene.add.existing(this);
        //Para que al girar gire sobre el centro y el collider no se descuadre
        this.setOrigin(0.5, (this.height - this.width / 2) / this.height);
        //Fisicas y config del body
        scene.physics.add.existing(this);

        //El collider es un circulo sobre el cuerpo gordo del bolo (vista desde arriba)
        const radio = this.width / 2;
        const offsetX = 0;
        const offsetY = this.height - this.width;
        this.body.setCircle(radio, offsetX, offsetY);
        this.body.setDamping(true);
        this.body.setDrag(0.3);
        this.body.setBounce(0.3);
        //Apariencia y colocacion del sprite sobre el collider
        this.setDisplaySize(width, height);

        //Para detectar si esta caido
        this.isDown = false;

    }

    knockDown(){
        if(this.isDown) return;
        
        this.isDown = true;
        this.fallingAnimation();
    }

    fallingAnimation(){
        this.scene.tweens.add({
            targets: this,
            angle: 90,
            duration: 300
        });
    }
}