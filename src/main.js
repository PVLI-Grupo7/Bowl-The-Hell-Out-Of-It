import BootScene from "./Scenes/BootScene.js";;
import MainMenu from "./Scenes/MainMenu.js";

let config = {
	type: Phaser.AUTO,
	parent: 'juego',
	pixelArt: true,
	scale: {
		autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
		mode: Phaser.Scale.FIT,
		width: 500,
		height: 300,
		zoom: 1
	},
	scene: [BootScene,MainMenu]
};

new Phaser.Game(config);
