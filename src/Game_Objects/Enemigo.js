import Obstacle from './Obstacle.js'; // 1. El Enemigo importa al Obstáculo

export default class Enemigo extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture, w, h) {
        super(scene, x, y, texture);
        
        this.setDisplaySize(w, h);
        this.scene.add.existing(this);
        
        this.puntosVida = 50; 
    }

    recibirDano(cantidad) {
        this.puntosVida -= cantidad;
        if (this.puntosVida <= 0) {
            this.destroy();
        }
    }

    // 2. Método para que el enemigo cree obstáculos
    invocarObstaculo(x, y, textura, r) {
        return new Obstacle(this.scene, x, y, textura, r);
    }
}