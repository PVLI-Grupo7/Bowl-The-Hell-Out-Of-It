export default class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: "MainMenu" });
    }

    create() {

        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 220, //Texto a añadir
            "Bowl The Hell Out Of It",{
            fontFamily: "Arial",
            align: "center",
            fontSize: 42,
            color: "rgb(231, 231, 231)"
        }).setOrigin(0.5);

        /*

        let startButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY , "Start",{
            fontFamily: "arcade",
            align: "center",
            fontSize: 20,
        }).setOrigin(0.5).setInteractive();

        startButton.on('pointerdown', pointer =>{
             this.scene.start("PlayScene");
        });
        */

        let button_Trial_Scene1 = this.add.image(this.scale.width/4,this.scale.height/3,"Button_Scene_Adan"); 
        button_Trial_Scene1.setInteractive();
        button_Trial_Scene1.on("pointerup",()=>{this.scene.start("Trial_Scene_Adan");})

        let button_alejandro = this.add.image(this.scale.width/2,this.scale.height/3,"Button_Scene_Adan");
        button_alejandro.setInteractive();
        button_alejandro.on("pointerup",()=>{this.scene.start("EscenaAlejandro");})
    }
}
