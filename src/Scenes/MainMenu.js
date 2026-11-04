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
        this.add.text(this.scale.width/2,this.scale.height*2/3,
            "El botón a la izquierda es la version más avanzada, \n el del medio es la tienda y el de la derecha es una prueba para el enemigo \n (instancia un objeto al ser invocado, hay que darle a la w repetidas veces para que muera)",{
            fontFamily: "Arial",
            align: "center",
            fontSize: 15,
            color: "rgb(26, 194, 14)"
        }).setOrigin(0.5);
        button_Trial_Scene1.setInteractive();
        button_Trial_Scene1.on("pointerup",()=>{this.scene.start("Trial_Scene_Adan");})

        let button_alejandro = this.add.image(this.scale.width/2,this.scale.height/3,"Button_Scene_Adan");
        button_alejandro.setInteractive();
        button_alejandro.on("pointerup",()=>{this.scene.start("EscenaAlejandro");})

        let button_javier = this.add.image(this.scale.width - 200,this.scale.height/3,"escena").setScale(0.4,0.4);
        button_javier.setInteractive();
        button_javier.on("pointerup",()=>{this.scene.start("EscenaJavier");})


    }
}
