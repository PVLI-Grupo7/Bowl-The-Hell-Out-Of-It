import Player from "../Game_Objects/Player.js"
import Inventario from "../Game_Objects/inventario.js"

export default class EscenaAlejandro extends Phaser.Scene {
    constructor() {
        super({ key: "EscenaAlejandro" });

    }

    create(){
        this.tienda = this.add.image(0, 0, "Tienda").setOrigin(0,0);
        this.tienda.setDisplaySize(this.scale.width,this.scale.height);
        this.tienda.setDepth(0);

        this.pin = this.add.image(680, 188, "Pin1").setOrigin(0,0);
        this.pin.setScale(0.25);
        this.pin.setDepth(1);

        this.arrow = this.add.image(680, 268, "redArrow").setOrigin(0,0);
        this.arrow.setScale(0.25);
        this.arrow.setDepth(1);

        this.bola = this.add.image(680, 348, "Bola1").setOrigin(0,0);
        this.bola.setScale(0.25);
        this.bola.setDepth(1);
        
        const inventario = new Inventario();        //esto es temporal, el inventario no se deberia de crear aqui
        let player = new Player(this, 60, 300, "ProtaIdle", inventario);
    }
}