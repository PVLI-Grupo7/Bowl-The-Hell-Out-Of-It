export default class BowlingBall extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, radious, weight = 2, lives = 3){
        super(scene, x, y, texture, frame);
        
        this.scene.add.existing(this);

        //Fisicas y config del body
        scene.physics.add.existing(this);
        this.body.setCircle(this.width/2);
        this.body.setBounce(0.75);


        this.setDisplaySize(radious,radious);
        this.setDepth(100);

        //Propiedades de la bola (En el futuro quizas tenga un constructor masivo donde se le pasen todas sus propiedades)
        //Peso, ligero = 1, medio = 2, pesado = 3
        this.weight = weight;

        this.lives = lives;
        
        //Guardamos la pos inicial
        this.startX = x;
        this.startY = y;
        // Velocidad a la que sale disparada
        // this.startSpeed = 500;
        //Usualmente le pongo como 0.2 de friccion
        this.friction = 0.2;
        //Velocidad de giro segun su velocidad
        this.spinSpeed = 2;

        //Variables
        this.arrowAmplitude = 0.5;
        this.arrowOSpeed = 0.003;
        this.powerOSpeed = 0.004;
        this.stage = 0;
        this.maxSpeed = 300;
        //Inputs
        scene.input.on("pointerdown", this.onClick, this);
        scene.input.keyboard.on("keydown-R", this.reset,this);
        // Flechas
        this.arrow = scene.add.rectangle(this.x, this.y, 100, 10, 0xffffff).setOrigin(0,0.5);
        this.powerBar = scene.add.rectangle(this.x - 50, this.y + 50, 10, 100, 0xff0000).setOrigin(0.5, 1).setVisible(false); 
        // //Sitema interactivo para probar la escena BORRAR CUANDO ANTES
        // this.pointer = this.scene.input.activePointer;
        // this.scene.input.on('pointerup', pointer => {
        //     if (pointer.leftButtonReleased()) {
        //         this.body.setVelocity(this.startSpeed * Phaser.Math.Between(-1,1),this.startSpeed * Phaser.Math.Between(-1,1));
        //     }

        // });
    }

    update(time,delta){
        //Metodo para aplicar el movimiento
        this.updateMovement(delta);

        //Giramos el sprite segun la velocidad
        this.angle += (this.spinSpeed * (delta /1000) * this.body.velocity.length());


        this.updateBars(time);
        
    }

    updateMovement(delta){

        const vx = this.body.velocity.x;
        const vy = this.body.velocity.y;

        //Aplicamos friccion
        const drag = Math.exp(-this.friction * delta / 1000);
        this.body.setVelocity(vx* drag, vy* drag);

        //Frenamos la bola si esta cerca de pararse para que no se mueva demasiado tiempo
        if (this.body.velocity.length()  < 8){
            this.body.setVelocity(0,0);
        }

    }

    updateBars(time){
        if(this.stage == 0){
            //Direccion hacia la que ira la bola
            const rot = Math.sin(time * this.arrowOSpeed) * this.arrowAmplitude;
            this.arrow.setRotation(rot);
        }else if(this.stage == 1){
            //La barra y la fuerza van segun el tiempo desde que empezo la carga
            const currentTime = time - this.powerStartTime;
            this.power = (1 - Math.cos(currentTime * this.powerOSpeed)) / 2;
            this.powerBar.setSize(10, this.power * 100);
        }
    }

    //Se llama al hacer click
    onClick(){
        if(this.stage == 0){
            //Paramos la flecha y mostramos la de la fuerza
            this.powerStartTime = this.scene.time.now;
            this.powerBar.setVisible(true)

            this.stage++;
        }else if(this.stage == 1){
            //Al lanzar pierde una "vida"
            this.lives--;
            // Cuando se lanza la bola, no queremos ver mas las flechas
            this.arrow.setVisible(false);
            this.powerBar.setVisible(false);
            //Calculamos la velocidad 
            const vx = Math.cos(this.arrow.rotation) *  this.power * this.maxSpeed;      
            const vy = Math.sin(this.arrow.rotation) * this.power * this.maxSpeed;
            this.body.setVelocity(vx, vy);
            this.stage++;
        }
    }

    //Resetea la pelota a su posicion inicial si le quedan vidas
    reset(){
        if(this.lives <= 0) return;

        this.body.reset(this.startX,this.startY);
        this.arrow.setVisible(true);
        this.powerBar.setVisible(false);
        this.stage = 0;
    }

}
