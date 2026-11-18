import Inventario from "./inventario.js";
import pin from "./Pin.js"

export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, inventario) {
        super(scene, x, y, texture);

        this.inventario = inventario;
        this.scene.add.existing(this); // Lo añadimos a la escena

        this.pinesTirados = 0;
        this.bolas = 0;
        this.score = 0;
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
        console.log(this.pinesTirados);
    }

    bolasLanzadas(){
        if (this.primerDisparo && this.pinesTirados == 10)
        {
            this.primerDisparo = false;
            this.strike = true;
        }
        else{
        this.bolas++;
        if(this.bolas % 3 == 0) this.actualizarPuntuación();
        }
    }

    actualizarPuntuación(){
        this.score += this.acumulador;
        this.acumulador = 0;
    }
}