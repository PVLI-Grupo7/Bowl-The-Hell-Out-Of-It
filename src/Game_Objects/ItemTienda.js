export default class ItemTienda extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture) {
        super({scene, x, y, texture});
        this.scene.add.existing(this);
    }

    init(data){
        this.item = data.pin
    }

    preload(){
        
    }

    // update(){
        
    // }

    create(data){
        
    }
}