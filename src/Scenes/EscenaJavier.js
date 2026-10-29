export default class EscenaJavier extends Phaser.Scene{
constructor() {
        super({ key: "EscenaJavier" });
    }


    // para pasar datos entre escenas
    init () // no hace falta poner el "function"
    {
        
    }

    // cargamos los recursos antes de usarlos
    preload() // aqui mejor se cargan imagenes y audio
    {
        
    }

    // inicializamos
    create () // aqui mejor poner sprites y variables
    {
        this.puntosVida = 50;

        this.enemigo = this.add.sprite(300, 200, 'enemigo'); // cargamos al enemigo 
        this.petra = this.add.sprite(100,200, 'Ball_Prototype'); // cargamos a petra

        this.teclaAtaque = this.scene.input.keyboard.addKey("W");

    }

    // se llama cada ciclo de juego para actualizar el estado
    update ()
    {
        if (this.teclaAtaque.isDown)
        {
            this.Quitavida(this.enemigo, 25);
        }
    }

    Quitavida(enemigo, cantidad)
    {
        if (!enemigo || this.enemigo.puntosVida <= 0)
        {
            return;
        }
        else
        {
            enemigo.puntosVida -= cantidad;
        }
    }
}