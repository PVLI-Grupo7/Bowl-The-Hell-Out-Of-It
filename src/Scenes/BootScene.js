import Inventario from "../Game_Objects/inventario.js"
export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: "BootScene" });
    }

    preload() {
        this.load.image("Button_Scene_Adan","src/Game_Art/Scene_Button_Adan.png");
        this.load.image("Ball_Prototype","src/Game_Art/Ball_Prototype.png");
        this.load.image("Wall_Prototype","src/Game_Art/Wall_Prototype.png");
        this.load.image("Roca","src/Game_Art/Roca.png");
        this.load.image("Tienda","src/Game_Art/FondoTiendaTemporal.png");

        this.load.image("Pin1","src/Game_Art/pinNormal.jpg");
        this.load.image("Pin2","src/Game_Art/pinCutre1.jpg");
        this.load.image("Pin3","src/Game_Art/pinCutre2.jpg");
        this.load.image("Bola1","src/Game_Art/bolaNormal.jpg");
        this.load.image("Bola2","src/Game_Art/bolaCutre1.jpg");
        this.load.image("Bola3","src/Game_Art/bolaCutre2.jpg");
        this.load.image("redArrow","src/Game_Art/flechaRoja.png");
        this.load.spritesheet("ProtaIdle", "src/Game_Art/protag_temporaryIdle.png",{
            frameWidth: 87,
            frameHeight: 105
        })
    }

    create() {
        this.createAnims();

        this.scene.start("MainMenu");
    }

    createAnims() {
        console.log("hola")
        this.anims.create({
            key: "player_idle",
            frames: this.anims.generateFrameNumbers("ProtaIdle", { start: 0, end: 5 }),
            frameRate: 7,
            repeat: -1
        });
    }
}
