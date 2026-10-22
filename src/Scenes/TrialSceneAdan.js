export default class Trial_Scene_Adan extends Phaser.Scene {
    constructor() {
        super({ key: "Trial_Scene_Adan" });
    }

    init(){

    }

    preload(){
        let image = this.add.image(this.scale.width/2,this.scale.height/2,"Ball_Prototype");
        
        this.add.text(this.scale.width/2,this.scale.height/2 + 100,
            "Nada que ver por aquí por el momento :P",{
            fontFamily: "Arial",
            align: "center",
            fontSize: 42,
            color: "rgb(26, 194, 14)"
        }).setOrigin(0.5);
    }

    update(){

    }
}