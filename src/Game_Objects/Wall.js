export default class Wall extends Phaser.GameObjects.Image{
    constructor(scene, x, y, texture, w, h){
        super(scene, x, y, texture);
        
        this.setOrigin(0.5,0.5);
        this.setDisplaySize(w,h);

        this.scene.add.existing(this);

        //Fisicas y config del body
        scene.physics.add.existing(this,true);
        this.body.setSize(w,h);

    }

}