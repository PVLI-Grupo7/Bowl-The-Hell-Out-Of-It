export default class Obstacle extends Phaser.GameObjects.Image{
    constructor(scene, x, y, texture, r){
        super(scene, x, y, texture);
    

        this.scene.add.existing(this);

        //Fisicas y config del body
        scene.physics.add.existing(this,true);
        
        this.body.setCircle(r);


        //Apariencia y colocacion del sprite sobre el collider
        this.setDisplaySize(r*4,r*4)
        const offsetX = (this.width - r * 2) / 2;
        const offsetY = (this.height - r * 2) / 2;
        this.body.setOffset(offsetX, offsetY);

    }

}