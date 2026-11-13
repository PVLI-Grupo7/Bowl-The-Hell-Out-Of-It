export default class Inventario {
    constructor(dinero=10) {
        this.items = [];
        this.dinero = dinero;
        this.sulfur = 0;
        this.loadSulfur();
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

    // Añade o resta una cantidad a tu sulfur y se asegura de guardarlo
    modifySulfur(num){
        this.sulfur += num;
        this.saveSulfur();
    }

    // Devuelve tu cantidad de sulfur
    checkSulfur(){
        return this.sulfur;
    }

    // Guarda de forma persistente la cantidad de sulfur que tenga el usuario
    saveSulfur(){
        localStorage.setItem('sulfurValue', this.sulfur);
    }

    //Carga la cantidad de sulfur del usuario
    loadSulfur(){
        let sulfurLoadTry = localStorage.getItem('sulfurValue');
        if (sulfurLoadTry !== null) this.sulfur = parseInt(sulfurLoadTry);
        else this.sulfur = 0;

    }

    //Resetea la cantidad de sulfuro del usuario
    resetSulfur(){
        this.sulfur = 0;
        this.saveSulfur();
    }

    //Reinica el inventario para comenzar una nueva partida
    resetInventoryGame(){
        this.dinero = 0;
        this.items.forEach(item => {
            item.destroy();
        });
        this.items.length = 0;
    }
}