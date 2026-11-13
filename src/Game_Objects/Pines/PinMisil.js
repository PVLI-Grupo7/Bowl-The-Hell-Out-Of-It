import Pin from "../Pin";
//Este pin derriba otro pin tras terminar la tirada en caso de que quede otro en pie
//Este creo que tambien voy a esperame a montar el sistema de lanzamientos del nivel y tambien lo implemento desde allí
export default class RocketPin extends Pin{
    constructor(scene,x,y,texture,witdh,height){
        super(scene, x, y, texture);

    }
}