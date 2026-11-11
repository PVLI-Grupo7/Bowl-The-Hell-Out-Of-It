import Enemigo from '../Game_Objects/Enemigo.js';

export default class EscenaJavier extends Phaser.Scene{
constructor() {
        super({ key: "EscenaJavier" });
    }


    // para pasar datos entre escenas
    init () // no hace falta poner el "function"
    {
        
    }

    // cargamos los recursos antes de usarlos
    preload() // aqui mejor se cargan imagenes (mejor en la bootSceene) y audio
    {
        
    }

    // inicializamos
    create () // aqui mejor poner sprites, variables y entrada
    {
        // usamos this para que sean accesibles desde "Enemigo"

        this.enemigo = new Enemigo(this, this.scale.width / 2, this.scale.height / 2, "enemigo", 500, 500);
        
        this.obstaculo = this.enemigo.invocarObstaculo(this.scale.width / 1.5, this.scale.height / 2, "Roca", 25);

        this.teclaW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        //Menú de pausa
        this.teclaEscape = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        this.teclaEscape.on("down", () => {
            if (this.scene.isActive("menuPausa")) return;   //sólo se puede abrir si está cerrada
            //lanzo la escena y mando el key de esta para que el init del menu de pausa lo pille
            this.scene.launch("menuPausa", {previousScene: this.scene.key});
            this.scene.pause();
        })
    }
 

    // se llama cada ciclo de juego para actualizar el estado
    update ()
    {
        if (Phaser.Input.Keyboard.JustDown(this.teclaW)) {
        if (this.enemigo && this.enemigo.active) {
                
            
                this.enemigo.recibirDano(25); // le quitamos 25 puntos de vida
                
                // para probar
                if (this.enemigo.active) {
                    console.log("- 25 de vida. Vida restante:", this.enemigo.puntosVida);
                } else {
                    console.log("enemigo destruido");
                }
            }
        }
    }
}