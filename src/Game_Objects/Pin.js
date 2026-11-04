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
        this.body.setDamping(false);
        this.body.setDrag(80,80);
        this.body.setBounce(0.3);
        //Apariencia y colocacion del sprite sobre el collider
        this.setDisplaySize(width, height);

        //Para detectar si esta caido
        this.isDown = false;

        //Variables para manjear la colision con la bola y otros pines
        this.minLaunchSpeed = 10;
        this.speedAbsorvedPercent = 0.5;
        this.hasBeenLaunched = false;

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

    launch(colisionVelocity, colisionPosition ){
        //En caso de que ya haya sido empujado no lo empujamos  de nuevo
        if (this.hasBeenLaunched) return false;

        //Calcula el vector unitario desde el centro del objeto que colisiona al centro de este pin
        const colisionDirection  = new Phaser.Math.Vector2(this.body.center.x - colisionPosition.x, this.body.center.y - colisionPosition.y).normalize();

        //Calcula la velocidad al la que debe ser disparado el pin
        const colisionSpeed = colisionVelocity.dot(colisionDirection);

        if(colisionSpeed < this.minLaunchSpeed) return false;
        else{
            //Fijamos la velocidad del pin a la resultante del impacto * porcentaje de absorcion de velocidad del pin
            this.body.setVelocity(colisionDirection.x * colisionSpeed * this.speedAbsorvedPercent,colisionDirection.y * colisionSpeed * this.speedAbsorvedPercent,);
            //Tumbamos el pin
            this.knockDown()
            this.hasBeenLaunched = true;
            return true;
        }

    }
}