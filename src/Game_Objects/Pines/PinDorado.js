import Pin from "../Pin";
//Este pin simplemente vale más puntos al derribarlo
export default class GoldenPin extends Pin{
    constructor(scene,x,y,texture,witdh,height){
        super(scene, x, y, texture);

        this.points = 3;
    }
}