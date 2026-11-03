import ItemTienda from "../Game_Objects/ItemTienda.js";
import Player from "../Game_Objects/Player.js";
import Inventario from "../Game_Objects/inventario.js";
import BowlingBall from "../Game_Objects/BowlingBall.js";
import Wall from "../Game_Objects/Wall.js";

export default class EscenaAlejandro extends Phaser.Scene {
    constructor() {
        super({ key: "EscenaAlejandro" });

        this.numRandomPin;
        this.numRandomBola;
        this.itemTienda1;
        this.itemTienda2;
        this.Restock1;
        this.Restock2;
        this.inventario;

        //Listas de items disponibles en la tienda
        this.listaPin = ["Pin1", "Pin2", "Pin3"];
        this.listaBolo = ["Bola1", "Bola2", "Bola3"];
    }

    create(){
        //Imagen de fondo de la tiena
        this.tienda = this.add.image(0, 0, "Tienda").setOrigin(0,0);
        this.tienda.setDisplaySize(this.scale.width,this.scale.height);
        this.tienda.setDepth(0);


        //Creacion de los items de tienda 
        this.numRandomPin = this.listaPin[Phaser.Math.Between(0, 2)]
        this.itemTienda1 = new ItemTienda(this, 680, 188, this.numRandomPin);
        this.itemTienda1.setScale(0.25);
        this.itemTienda1.setDepth(1);
        this.itemTienda1.setOrigin(0,0);

        this.numRandomBola = this.listaBolo[Phaser.Math.Between(0, 2)]
        this.itemTienda2 = new ItemTienda(this, 680, 348, this.numRandomBola);
        this.itemTienda2.setScale(0.25);
        this.itemTienda2.setDepth(1);
        this.itemTienda2.setOrigin(0,0);


        //Creacion de la flecha para cambiar de escena
        this.arrow = this.add.image(680, 268, "redArrow").setOrigin(0,0);
        this.arrow.setScale(0.25);
        this.arrow.setDepth(1);
        

        //Creacion de los items de restock, junto a sus fisicas
        this.Restock1 = this.add.image(310, 190, "Restock").setOrigin(0,0);
        this.Restock1.setScale(0.1);
        this.Restock1.setDepth(1);

        this.physics.add.existing(this.Restock1);
        this.Restock1.body.setImmovable(true);

        this.Restock2 = this.add.image(310, 370, "Restock").setOrigin(0,0);
        this.Restock2.setScale(0.1);
        this.Restock2.setDepth(1);

        this.physics.add.existing(this.Restock2);
        this.Restock2.body.setImmovable(true);


        //Creacion de la bola
        this.ball = new BowlingBall(this, 200, 300, "Ball_Prototype" , 50);
        this.ballInitialState = {
            x: this.ball.x,
            y: this.ball.y,
        };


        //Gestión de colisiones con los distintos items de la tienda
        this.physics.add.overlap(this.ball, this.Restock1, () => {
            this.randomizaTienda();
        });
        this.physics.add.overlap(this.ball, this.Restock2, () => {
            this.randomizaTienda();
        });

        this.physics.add.overlap(this.ball, this.itemTienda1, (ball, item) => {
            item.comprarItem();
            item.setVisible(false);
            this.resetBola();
        });
        this.physics.add.overlap(this.ball, this.itemTienda2, (ball, item) => {
            item.comprarItem();
            item.setVisible(false);
            this.resetBola();
        });


        //Aqui se crea el jugador y su inventario (si no existe ya)
        if (!this.game.registry.has("inventario")) {
            this.game.registry.set("inventario", new Inventario());
        }
        this.inventario = this.game.registry.get("inventario");

        this.player = new Player(this, 60, 300, "ProtaIdle", this.inventario);
        this.player.setFlipX(true);


        //Cajas de colisiones que encasan la tienda
        this.box = {};
            this.box.wallUp = new Wall(this, 685, 265, "Wall_Prototype", 150, 10);
            this.box.wallDown = new Wall(this, 685, 337, "Wall_Prototype", 150, 10);

        this.physics.add.collider(this.ball, this.box.wallUp);
        this.physics.add.collider(this.ball, this.box.wallDown);
    }

    randomizaTienda(){  
        //Randomiza los items de la tienda si el jugador tiene el dinero 
        //suficiente y le resta 1 al dinero del jugador. Tambien se
        //asegura de que el item random es distinto al anterior

        if (this.inventario && this.inventario.checkMoney() >= 1){
            this.npin;
            this.nbola;

            do {
                this.npin = this.listaPin[Phaser.Math.Between(0, 2)];
            } while(this.npin === this.numRandomPin);

            do {
                this.nbola = this.listaBolo[Phaser.Math.Between(0, 2)];
            } while(this.bola === this.numRandomBola);

            this.numRandomPin = this.npin;
            this.numRandomBola = this.nbola;

            this.itemTienda1.setTexture(this.numRandomPin);
            this.itemTienda1.setVisible(true);

            this.itemTienda2.setTexture(this.numRandomBola);
            this.itemTienda2.setVisible(true);
            this.inventario.modifyMoney(-1);

            this.resetBola();
        }
    }

    resetBola(){    //Resetea la bola, solo se llama en metodos llamados al haber una colisión
        this.ball.setPosition(
            this.ballInitialState.x,
            this.ballInitialState.y
        );

        this.ball.body.setVelocity(0, 0);
        this.ball.body.enable = true;
    }

    update(time,delta){
        this.ball.update(time,delta);
    }
}