import BowlingBall from "../BowlingBall.js";
//Según la cantidad de bolos que esta bola derribe, la cantidad en su totalidad se añade a tu puntuación y la mitad (redondeando hacia arriba) se le resta al contrincante
export default class EnvidiaBall extends BowlingBall {

    constructor(scene, x, y, texture, frame, radius) {

        super(scene, x, y, texture, frame, radius);
    }

}