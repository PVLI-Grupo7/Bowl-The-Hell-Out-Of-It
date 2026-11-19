import Enemigo from './Enemigo.js';

export default class DiabloMarchito extends Enemigo {
    constructor(scene, x, y) {
        super(scene, x, y, "enemigo", 10, 40);
        this.puntosVida = 80;
        this.puntosAlMorir = 200; // nos da 2 pines de azufre por el gdd donde 100 puntos = 1 pin
    }

    recibirDano(cantidad, inventario) {
        this.puntosVida -= cantidad;
        if (this.puntosVida <= 0) {
            if (inventario) {
                inventario.modifySulfur(Math.floor(this.puntosAlMorir / 100)); // floor para redondear
            }
            this.destroy();
        }
    }

    colocarArenaAlmas(x, y) {
        return super.invocarObstaculo(x, y, "Roca", 10); // aqui pondria su textura pero voy a usar la roca de momento
    }
}