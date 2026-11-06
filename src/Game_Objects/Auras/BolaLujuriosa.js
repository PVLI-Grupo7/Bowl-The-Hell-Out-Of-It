import BowlingBall from "../BowlingBall.js";
//Esta bola tras ser lanzada esperará un tiempo y tras esto se acelerará y dejará un rastro por un instante en el que las futuras bolas también se acelerarán.
export default class LujuriaBall extends BowlingBall {

    constructor(scene, x, y, texture, frame, radius) {

        super(scene, x, y, texture, frame, radius);
    }

}