export default class ItemTienda extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.scene = scene;
        this.scene.add.existing(this);

        this.scene.physics.add.existing(this); 
    }

    preUpdate() {
        
    }

    comprarItem() {
        const inventario = this.scene.game.registry.get("inventario");

        if (inventario && inventario.checkMoney() >= 4) {
            console.log("Item comprado!!");
            inventario.addItem(this.texture);
            inventario.modifyMoney(-4);
        }
    }

}