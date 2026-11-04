import ItemTienda from "../Game_Objects/ItemTienda.js";
import Player from "../Game_Objects/Player.js";
import Inventario from "../Game_Objects/inventario.js";
import bola from "../Game_Objects/BowlingBall.js";
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
        this.ball = new bola(this, 200, 300, "Ball_Prototype", Phaser.Math.Between(0, 15), 50, 2, 100);


        //Aqui se crea el jugador y su inventario (si no existe ya)
        if (!this.game.registry.has("inventario")) {
            this.game.registry.set("inventario", new Inventario());
        }
        this.inventario = this.game.registry.get("inventario");

        this.player = new Player(this, 60, 300, "ProtaIdle", this.inventario);
        this.player.setFlipX(true);


        //Cajas de colisiones que encasan la tienda
        this.box = {};
            this.box.wall1 = new Wall(this, 685, 265, "Wall_Prototype", 150, 10);
            this.box.wall2 = new Wall(this, 685, 337, "Wall_Prototype", 150, 10);
            this.box.wallup = new Wall(this, 470, 180, "Wall_Prototype", 700, 5).setVisible(false);
            this.box.walldown = new Wall(this, 470, 420, "Wall_Prototype", 700, 5).setVisible(false);
            this.box.wallleft = new Wall(this, 165, 300, "Wall_Prototype", 5, 300).setVisible(false);
            this.box.wallright = new Wall(this, 765, 300, "Wall_Prototype", 5, 300).setVisible(false);

        this.physics.add.collider(this.ball, this.box.wall1);
        this.physics.add.collider(this.ball, this.box.wall2);
        this.physics.add.collider(this.ball, this.box.wallup);
        this.physics.add.collider(this.ball, this.box.walldown);
        this.physics.add.collider(this.ball, this.box.wallleft);
        this.physics.add.collider(this.ball, this.box.wallright);


        //Texto con el dinero
        this.textMoney = this.add.text(20, 200, "Dinero: " + this.inventario.dinero + " (M)", { font: "20px Arial", fill: "#272525" }).setOrigin(0, 0).setScrollFactor(0,0);


        //Gestión de colisiones con los distintos items de la tienda
        this.physics.add.overlap(this.ball, this.Restock1, () => {
            this.randomizaTienda();
        });
        this.physics.add.overlap(this.ball, this.Restock2, () => {
            this.randomizaTienda();
        });

        this.physics.add.overlap(this.ball, this.itemTienda1, (ball, item) => {
            if (this.inventario.checkMoney() >= 4){
                item.comprarItem();
                item.setVisible(false);
                this.updateMoney();
            }
            this.ball.reset();
        });
        this.physics.add.overlap(this.ball, this.itemTienda2, (ball, item) => {
            if (this.inventario.checkMoney() >= 4){
                item.comprarItem();
                item.setVisible(false);
                this.updateMoney();
            }
            this.ball.reset();
        });


        //Texto de información según el item de la tienda que se seleccione con el ratón
        this.info = this.add.text(20, 500, "", {font: "20px Arial", color: "#272525"}).setOrigin(0, 0).setScrollFactor(0, 0);
        this.info.setVisible(false);

        this.itemTienda1.setInteractive();
        this.itemTienda2.setInteractive();

        this.mostrarInfo(this.itemTienda1);
        this.mostrarInfo(this.itemTienda2);


        //Hack de gemas infinitas clash royale (funciona en 2017!)
        this.teclaM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        this.teclaM.on("down", () => {this.activaCheats();});

        this.physics.add.existing(this.arrow);
        this.arrow.body.setImmovable(true);
        this.physics.add.collider(this.ball, this.arrow, ()=> {
            this.scene.start("Trial_Scene_Adan");
        });
    }

    activaCheats(){
        if (this.inventario)
        {
            this.inventario.modifyMoney(10);
            this.updateMoney();
        }
    }

    randomizaTienda(){  
        //Randomiza los items de la tienda si el jugador tiene el dinero 
        //suficiente y le resta 1 al dinero del jugador. Tambien se
        //asegura de que el item random es distinto al anterior
        if (this.inventario && this.inventario.checkMoney() >= 1){
            let npin;
            let nbola;

            do {
                npin = this.listaPin[Phaser.Math.Between(0, 2)];
            } while(npin == this.numRandomPin);

            do {
                nbola = this.listaBolo[Phaser.Math.Between(0, 2)];
            } while(nbola == this.numRandomBola);

            console.log(npin == this.numRandomPin);
            console.log(nbola == this.numRandomBola);

            this.numRandomPin = npin;
            this.numRandomBola = nbola;

            this.itemTienda1.setTexture(this.numRandomPin);
            this.itemTienda1.setVisible(true);
            this.itemTienda2.setTexture(this.numRandomBola);
            this.itemTienda2.setVisible(true);

            this.inventario.modifyMoney(-1);
            this.updateMoney();

            this.ball.reset();
        }
    }

    updateMoney(){
        this.textMoney.setText("Dinero: " + this.inventario.dinero + " (M)");
    }

    mostrarInfo(item) {
        item.on("pointerover", () => {
            const descripciones = {
                "Pin1": "Pin normalito",
                "Pin2": "Este es un ejemplo, muy feo",
                "Pin3": "Tambien un ejemplo, incluso mas feo",

                "Bola1": "Bola normalita",
                "Bola2": "Bola pero un poco mas fea",
                "Bola3": "Bola pero la más fea"
            };
            this.info.setText(descripciones[item.texture.key] || "");
            this.info.setVisible(true);
        });

        item.on("pointerout", () => {this.info.setVisible(false);});
    }
    update(time,delta){
        if (!this.ball || !this.ball.active || !this.ball.body) {
            return;
        }
        this.ball.update(time,delta);
        if((this.ball.hasAlreadyBeenTrown && (this.ball.body.velocity.x == 0 && this.ball.body.velocity.y == 0)))this.ball.reset();
    }
}