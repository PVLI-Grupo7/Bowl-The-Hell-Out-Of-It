export default class Inventario {
    constructor(dinero=10) {
        this.items = [];
        this.dinero = dinero;
    }

    // Añadir item
    addItem(item) {
        this.items.push(item);
    }

    // Consultar si un item está en el inventario
    hasItem(item) {
        return this.items.includes(item);
    }

    // Tanto para ganar como perder dinero, si es perder entonces será negativo
    modifyMoney(numero){
        this.dinero += numero;
    }

    // Devuelve la cantidad de dinero que tiene el jugaddor
    checkMoney(){
        return this.dinero;
    }
}