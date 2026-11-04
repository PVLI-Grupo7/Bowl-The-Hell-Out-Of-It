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
        this.load.spritesheet("Ball" , "src/Game_Art/Ball_Final/Bolas64x64px.png", {
            frameWidth:16,
            frameHeight:16
        });

        this.load.image("Tienda","src/Game_Art/FondoTiendaTemporal.png");

        this.load.image("Pin1","src/Game_Art/pinNormal.jpg");
        this.load.image("Pin2","src/Game_Art/pinCutre1.jpg");
        this.load.image("Pin3","src/Game_Art/pinCutre2.jpg");
        this.load.image("Bola1","src/Game_Art/bolaNormal.jpg");
        this.load.image("Bola2","src/Game_Art/bolaCutre1.jpg");
        this.load.image("Bola3","src/Game_Art/bolaCutre2.jpg");
        this.load.image("redArrow","src/Game_Art/flechaRoja.png");
        this.load.image("Restock","src/Game_Art/Restock.jpg");
        this.load.spritesheet("ProtaIdle", "src/Game_Art/protag_temporaryIdle.png",{
            frameWidth: 87,
            frameHeight: 105
        })
        this.load.image("enemigo", "src/Game_Art/enemigo.png");
        this.load.image("escena", "src/Game_Art/escena.png");
        this.load.image("bolo","src/Game_Art/pin.png")
    }

    create() {
        this.createAnims();

        this.scene.start("MainMenu");
    }

    createAnims() {
        this.anims.create({
            key: "player_idle",
            frames: this.anims.generateFrameNumbers("ProtaIdle", { start: 0, end: 5 }),
            frameRate: 7,
            repeat: -1
        });
    }
}
