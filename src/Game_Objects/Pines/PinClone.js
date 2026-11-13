import Pin from "../Pin";
//Este pin simplemente aumenta su puntuacion cada vez que es derribado
export default class ClonePin extends Pin{
    constructor(scene,x,y,texture,witdh,height){
        super(scene, x, y, texture);
        this.effectPostLaunch = true;
    }

    extraEffect(){
        this.points++;
    }
}