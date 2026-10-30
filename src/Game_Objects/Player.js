import Inventario from "./inventario.js";

export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, inventario = new Inventario()) {
        super(scene, x, y, texture);

        this.inventario = inventario;
        this.scene.add.existing(this); // Lo añadimos a la escena

        this.play("player_idle");
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);
    }
}