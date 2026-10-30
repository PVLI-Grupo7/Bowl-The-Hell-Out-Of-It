import MainMenu from "./Scenes/MainMenu.js";
import BootScene from "./Scenes/BootScene.js";
import Trial_Scene_Adan from "./Scenes/TrialSceneAdan.js";
import EscenaAlejandro from "./Scenes/EscenaAlejandro.js";
import EscenaJavier from "./Scenes/EscenaJavier.js";

/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */
let config = {
	type: Phaser.AUTO,
	parent:'juego',
	width:  800,
	height: 600,
	pixelArt: true,
	scale: {
		autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
	},
	scene: [BootScene,MainMenu,Trial_Scene_Adan,EscenaAlejandro],	
												// Decimos a Phaser cual es nuestra escena, en este caso la escena es un 
												//objeto formado por el método preload y create definidos más abajo en 
												//este mismo archivo
	physics: { 
		default: 'arcade', 
		arcade: { 
			gravity: { y: 0 }, 
			debug: true 
		} 
	}
};
new Phaser.Game(config);

