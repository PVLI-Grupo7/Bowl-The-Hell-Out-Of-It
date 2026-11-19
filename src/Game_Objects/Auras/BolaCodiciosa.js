import BowlingBall from "../BowlingBall.js";
//Si no consigues derribar un bolo, la siguiente bola del carril desaparecerá, en caso de derribar los bolos, por cada bolo derribado tienes un 10% de recibir una bola extra que copiará el efecto de alguna de las bolas que tengas en tu inventario.
export default class CodiciaBall extends BowlingBall {

    constructor(scene, x, y, texture, frame, radius) {

        super(scene, x, y, texture, frame, radius);
    }

}