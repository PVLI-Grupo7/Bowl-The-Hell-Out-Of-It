import Enemigo from './Enemigo.js';

export default class CuboLava extends Enemigo {
    constructor(scene, x, y) {

        super(scene, x, y, "enemigo", 50, 50); 
        this.puntosVida = 60;
        this.puntosAlMorir = 100; // nos da 1 pin de azufre ya que cada 100 puntos segun el gdd era un pin 
    }

    recibirDano(cantidad, inventario) {
        this.puntosVida -= cantidad;
        if (this.puntosVida <= 0) {
            if (inventario) {
                inventario.modifySulfur(Math.floor(this.puntosAlMorir / 100)); // floor para redondear
            }
            this.destroy(); // destruimos el enemigo pero no el objeto que ha instanciado
        }
    }

    colocarMagma(x, y) {
        return super.invocarObstaculo(x, y, "Roca", 10); // aqui pondria su textura pero voy a usar la roca de momento
    }
}