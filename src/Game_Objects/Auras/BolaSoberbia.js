import BowlingBall from "../BowlingBall.js";
// Actúa en todas sus características como la bola normal, solo que al derribar un bolo, su puntuación se multiplica por un valor aleatorio entre 0.5 y 3.5.
export default class SoberviaBall extends BowlingBall {

    constructor(scene, x, y, texture, frame, radius) {

        super(scene, x, y, texture, frame, radius);
    }

}