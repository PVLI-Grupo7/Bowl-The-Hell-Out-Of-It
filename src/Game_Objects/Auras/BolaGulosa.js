import BowlingBall from "../BowlingBall.js";
//Esta bola automáticamente se vuelve pesada teniendo los efectos de ser pesada, y tras ser lanzada crecerá a lo largo de la pista hasta tener un tamaño equivalente al doble de su tamaño original.
export default class GulaBall extends BowlingBall {

    constructor(scene, x, y, texture, frame, radius) {

        super(scene, x, y, texture, frame, radius);
    }

}