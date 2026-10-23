export default class EscenaAlejandro extends Phaser.Scene {
    constructor() {
        super({ key: "EscenaAlejandro" });
    }

    init(){

    }

    preload(){
        let image = this.add.image(this.scale.width/2,this.scale.height/2,"Ball_Prototype");
        
        this.add.text(this.scale.width/2, this.scale.height/6,
            "Mi escena de prueba",{
            fontFamily: "Arial",
            align: "center",
            fontSize: 70,
            color: "rgb(228, 255, 53)"
        }).setOrigin(0.5);
    }

    update(){

    }

    create(){

    }
}