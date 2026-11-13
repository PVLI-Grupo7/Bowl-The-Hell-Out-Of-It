import Pin from "../Pin";
//Este pin no estoy muy seguro de como funciona, en el gdd pone: Añade 1 pin extra a la puntuación por cada otro pin que haya sido tirado en ese lanzamiento, con un máximo de 5 
//De todas formas creo que la implementacion de este seria mejor hacerla desde el sistema de puntos así que ahora mismo no puedo
export default class MatryoshkaPin extends Pin{
    constructor(scene,x,y,texture,witdh,height){
        super(scene, x, y, texture);

        this.points = 3;
    }
}