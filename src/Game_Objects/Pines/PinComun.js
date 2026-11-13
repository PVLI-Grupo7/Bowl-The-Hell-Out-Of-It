import Pin from "../Pin";
//Pin básico por lo que no toca nada especial de la configuracion base del objeto pin
export default class CommonPin extends Pin{
    constructor(scene,x,y,texture,witdh,height){
        super(scene, x, y, texture);
    }
}