export default class Inventario {
    constructor() {
        this.items = [];
    }

    // Añadir objetos
    addItem(item) {
        this.items.push(item);
    }

    // Eliminar objetos por su nombre
    removeItem(item) {
        const index = this.items.indexOf(item);

        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    // Consultar si un objeto está en el inventario
    hasItem(item) {
        return this.items.includes(item);
    }
}