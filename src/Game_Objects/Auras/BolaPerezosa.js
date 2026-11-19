import BowlingBall from "../BowlingBall.js";
//Esta bola se volverá intangible por un tiempo tras entrar en contacto con un obstáculo, en este estado no será afectada por obstáculos y los podrá atravesar (en caso de llegar a los pines siendo intangible esta podría atravesarlos y pasar sin derribarlos)
export default class PerezaBall extends BowlingBall {

    constructor(scene, x, y, texture, frame, radius) {

        super(scene, x, y, texture, frame, radius);
    }

}