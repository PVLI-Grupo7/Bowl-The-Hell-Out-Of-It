export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, inventario, actualizarTexto) {
        super(scene, x, y, texture);

        this.inventario = inventario;
        this.scene.add.existing(this); // Lo añadimos a la escena
        this.actualizarTexto = actualizarTexto;

        this.pinesTirados = 0;
        this.bolas = 0;
        this.score = 0;
        this.acumulador = 0;
        this.primerDisparo = true;
        this.strike = false;

        this.play("player_idle");
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);
    }

    pinTirado(puntos){
        this.pinesTirados++;
        this.acumulador += puntos;
    }

    bolasLanzadas(){
        if (this.primerDisparo && this.pinesTirados == 10){
            this.primerDisparo = false;
            this.strike = true;
        }
        this.primerDisparo = false;
        this.bolas++;
        if(this.bolas % 2 == 0) this.actualizarPuntuación();
    }

    actualizarPuntuación(){
        if (this.strike){
            this.score += this.acumulador * 2;
            this.strike = false;
        }
        else 
            this.score += this.acumulador;
        this.acumulador = 0;
        this.pinesTirados = 0;
        this.primerDisparo = true;

        console.log("set terminado");

        this.actualizarTexto(this.score);   //texto el cual SÓLO se actualiza en escena si se llama esta función
    }
}