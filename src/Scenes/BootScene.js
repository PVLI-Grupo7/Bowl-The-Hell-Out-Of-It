
export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: "BootScene" });
    }

    preload() {
        
        //TILEMAP
        // this.load.tilemapTiledJSON('tilemap', './assets/terrain.json'); 
        // this.load.image('patronTilemap', './assets/tileset.png');


        //SPRITES
        // this.load.spritesheet('player', './assets/player.png', { frameWidth: 14, frameHeight: 14 });
        // this.load.spritesheet('playerDead', './assets/dead.png', { frameWidth: 16, frameHeight: 16 });
        // this.load.spritesheet('playerBalloon', './assets/balloon.png', { frameWidth: 12, frameHeight: 12 });

        // this.load.spritesheet('star', './assets/star.png', { frameWidth: 10, frameHeight: 10 });
        // this.load.spritesheet('cloud', './assets/cloud.png', { frameWidth: 32, frameHeight: 32 });

        // this.load.spritesheet('enemy', './assets/enemy.png', {frameWidth: 16, frameHeight: 16});

        //AUDIO
        // this.load.audio("balloonSFX", "./assets/balloon.mp3");
        // this.load.audio("victory", "./assets/victory.mp3");
        // this.load.audio("loose", "./assets/loose.mp3");
    }

    create() {
        this.scene.start("MainMenu");
    }
}
