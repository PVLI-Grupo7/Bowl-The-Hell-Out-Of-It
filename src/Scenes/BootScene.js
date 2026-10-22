
export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: "BootScene" });
    }

    preload() {
        this.load.image("Button_Scene_Adan","src/Game_Art/Scene_Button_Adan.png");
        this.load.image("Ball_Prototype","src/Game_Art/Ball_Prototype.png");
    }

    create() {
        this.scene.start("MainMenu");
    }
}
