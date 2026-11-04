import Pin from "./Pin.js";

export default class PinManager {
    constructor(scene, x, y, spacing, texture = "bolo"){
        
        this.scene = scene;

        this.pins = [];
        
        //Filas del triangulo
        const rows = 4;

        for(let r = 0; r < rows; r++){
            //Como en cada fila queremos que haya un bolo mas
            const pinsInRow = r + 1;

            //Cada fila queda mas lejos que la de antes
            const rowX = x + r * spacing;
            //Centramos los bolos
            const startY = y - (pinsInRow - 1) * spacing / 2;

            for(let i = 0; i < pinsInRow; i++){
                const pin = new Pin(scene, rowX, startY + i * spacing, texture, 25, 60);
                this.pins.push(pin);
            }
        }
    }
}