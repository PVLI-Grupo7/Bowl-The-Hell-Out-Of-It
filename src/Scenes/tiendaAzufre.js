import Inventario from '../Game_Objects/inventario.js';
import Player from '../Game_Objects/Player.js';

export default class tiendaAzufre extends Phaser.Scene {

    constructor() {
        super({ key: "tiendaAzufre"});
    }

    init(data) {
        this.previousScene = data.previousScene;    //necesario para guardar el nombre de la escena en la que pausamos
    }

    create() {
        //gestiona los personajes desbloqueados
        if (!this.registry.has("personajesDesbloqueados"))
            this.registry.set("personajesDesbloqueados", ["petra"]);

        //gestiona el personaje seleccionado
        if (!this.registry.has("personajeSeleccionado"))
            this.registry.set("personajeSeleccionado", "petra");

        //obtengo el inventario y el jugador
        if(!this.registry.has("inventario"))
            this.registry.set("inventario", new Inventario());
        const inventario = this.registry.get("inventario");

        //texto con el dinero 
        this.Dinero = this.add.text(this.scale.width/3 + 35, this.scale.height/4 - 10, "Pines de azufre: " + inventario.checkSulfur(),{font: "bold 30px Arial", color: "#4646c0"});
        this.Dinero.setDepth(5);

        //imagen preview del personaje, se inicializa por default en el personaje inicial
        this.preview = this.add.sprite(this.scale.width/5 + 10, this.scale.height/3, "ProtaIdle");
        this.preview.setFrame(0);
        this.preview.setDepth(10);

        //texto con la información del personaje
        this.textoInfo = this.add.text(this.scale.width/10 - 20, this.scale.height/2, "", {font: "20px Arial", color: "#ffffff"});
        this.textoInfo.setDepth(5);

        this.ancho = this.scale.width - this.scale.width/10;
        this.alto = this.scale.height - this.scale.height/10;
        this.contenedor = this.add.container(0, 0);
        this.mostrarTienda();
        this.contenedor.setDepth(0);

        //boton para volver al menu principal
        let volver = this.add.text(this.scale.width/2, this.scale.height - 80, "VOLVER", 
            {
                font: "30px Arial",
                color: "#ffffff",
                backgroundColor: "#277a35",
                padding: {x: 20, y: 10}
        })
        volver.setOrigin(0.5)
        volver.setInteractive({useHandCursor: true});

        volver.on("pointerup", () => { // se ejecuta cuando el jugador sueltao el clic del raton
            this.scene.start("MainMenu"); 
        });
    }

    mostrarTienda(){
        this.contenedor.removeAll(true);    //se limpia y se pone

        const fondo = this.add.rectangle(this.scale.width/2, this.scale.height/2, this.ancho, this.alto, 0xbe6a2e);
        const person = this.add.text(this.scale.width/7, this.scale.height/10, "TIENDA DE PERSONAJES", {font: "48px Arial", color: "#ffffff"});
        this.contenedor.add(fondo);
        this.contenedor.add(person);

        const rectInfo = this.add.rectangle(this.scale.width/10 - 30, this.scale.height/2 - 20, 230, 250, 0x3e281a);
        rectInfo.setOrigin(0,0);
        this.contenedor.add(rectInfo);

        const petra = this.add.sprite(this.scale.width/2 - 30, this.scale.height/2 - 50, "ProtaIdle");
        petra.setFrame(0);
        this.contenedor.add(petra);

        const pers2 = this.add.image(this.scale.width/2 + 100, this.scale.height/2 - 50, "chelan");
        this.contenedor.add(pers2);
        
        const pers3 = this.add.image(this.scale.width/2 - 30, this.scale.height/2 + 100, "kcalb");
        this.contenedor.add(pers3);
        
        const pers4 = this.add.image(this.scale.width/2 + 100, this.scale.height/2 + 100, "froze");
        this.contenedor.add(pers4);

        const personajes = [
            { id: "petra", imagen: petra, textura: "ProtaIdle", texto: "PETRA\n\nx1 reroll gratis\npor tienda\n\nBola base: normal"},
            { id: "chelan", imagen: pers2, textura: "chelan", texto: "GOLIATH: 50 pines\n\nTamaño de piedras\nreducido en un 50%,\n+30% de posibilidad\nde encontrar Pin Misil\ny Bola Pesada en\ntienda\n\nBola base: gulosa"},
            { id: "kcalb", imagen: pers3, textura: "kcalb", texto: "MAMMON: 75 pines\n\nDinero extra inicial,\nposible descuento en\ntienda, +30% de\nposibilidad de encontrar\nPin Diamante en tienda\n\nBola base: codiciosa"},
            { id: "froze", imagen: pers4, textura: "froze", texto: "AZAZEL: 100 pines\n\nPrimera bola de cada\nset inmune al magma,\n+30% de posibilidad de\nencontrar Bolas de Ira\ny lujuria en tienda\n\nBola base: irascible"}
        ];

        personajes.forEach(p =>{
            //añado los bordes a cada imagen
            p.borde = this.add.rectangle(
                p.imagen.x, p.imagen.y, p.imagen.displayWidth + 10, p.imagen.displayHeight + 10, 0xffffff);

            p.borde.setStrokeStyle(4, 0xffffff);
            p.borde.setFillStyle(0x000000, 0);
            this.contenedor.add(p.borde);

            //aqui las voy a transformar en imagenes interactivas
            p.imagen.setInteractive({ useHandCursor: true });
            //se muestra el personaje en preview
            p.imagen.on("pointerover", () => {
                this.preview.setTexture(p.textura);
                if (p.textura === "ProtaIdle") this.preview.setFrame(0);
                this.textoInfo.setText(p.texto);
            });

            p.imagen.on("pointerdown", () => {
                //lo pongo dentro de desbloqueados en caso de que no lo estuviese
                const desbloqueados = this.registry.get("personajesDesbloqueados");
                if (!desbloqueados.includes(p.id)) {
                    desbloqueados.push(p.id);
                    this.registry.set("personajesDesbloqueados", desbloqueados);
                }
                //selecciona al personaje
                this.registry.set("personajeSeleccionado", p.id);
                this.actualizarSeleccion(personajes);
            });
        })

        //esto va a dibujar el reborde dependiendo del personaje que esté seleccionado
        this.actualizarSeleccion(personajes);
    }

    actualizarSeleccion(personajes) {
        const seleccionado = this.registry.get("personajeSeleccionado");
        const desbloqueados = this.registry.get("personajesDesbloqueados");

        personajes.forEach(p => {
            if (p.id === seleccionado) {
                // Reborde visible
                p.borde.setStrokeStyle(4, 0xffff00);
            }
            else {
                // Reborde invisible
                p.borde.setStrokeStyle(0, 0xffffff);
            }

            if(!this.encuentraPersonaje(p.id, desbloqueados)){
                if (!p.unlockable){
                    p.unlockable = this.add.rectangle(
                    p.imagen.x, p.imagen.y, p.imagen.displayWidth + 10, p.imagen.displayHeight + 10, 0x000000, 0.5);
                }
            }
            else {
                if (p.unlockable) {
                    p.unlockable.destroy();
                    p.unlockable = null;
                }
            }
        });
    }

    encuentraPersonaje(id, desbloqueados) {
        for (let i = 0; i < desbloqueados.length; i++) {
            if (desbloqueados[i] === id)
                return true;
        }
        return false;
    }
}