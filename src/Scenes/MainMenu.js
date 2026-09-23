export default class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: "MainMenu" });
    }

    create() {

        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 50, //Texto a añadir
            "NINE CIRCLES",{
            fontFamily: "balloonfont",
            align: "right",
            fontSize: 42,
            color: "#ff9100ff"
        }).setOrigin(0.5);



        let startButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 100, "Start",{
            fontFamily: "arcade",
            align: "center",
            fontSize: 20,
        }).setOrigin(0.5).setInteractive();

        startButton.on('pointerdown', pointer =>{
             this.scene.start("PlayScene");
        });
    }
}
