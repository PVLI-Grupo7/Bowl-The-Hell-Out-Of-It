import BowlingBall from "../BowlingBall.js";
//Al entrar en contacto con un bolo, explota y derriba todos los bolos en una pequeña área de efecto, además en caso de impactar contra un obstáculo que no pueda atravesar esta explotará destruyendo el obstáculo.
export default class IraBall extends BowlingBall {

    constructor(scene, x, y, texture, frame, radius) {

        super(scene, x, y, texture, frame, radius);
    }

}