import Inventario from '../Game_Objects/inventario.js';

export default class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: "MainMenu" });
    }

    create() {


        // inciializo el inventario en el registry para que asi se mantengan los datos y puntos de azufre 

        if (!this.registry.has("inventario"))
        {
            this.registry.set("inventario", new Inventario());
        }

        const inventario = this.registry.get("inventario");

        // aqui va el titulo del juego
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 220,
            "Bowl The Hell Out Of It",{
            fontFamily: "Arial",
            align: "center",
            fontSize: 42,
            color: "rgb(231, 231, 231)"
        }).setOrigin(0.5);

        this.add.text(20,20, "Pines de azufre: " + inventario.checkSulfur(),{
                fontFamily: "Arial",
                fontSize: 22,
                color: "rgb(13, 87, 207)"
        })


        // boton para ir a escena de batalla

        let botonJugar = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 40, "JUGAR", {
            fontFamily: "Arial", 
            color: "rgb(231, 231, 231)" ,
            backgroundColor: "rgb(143, 4, 4)", 
            padding: {x: 20, y: 10} // borde
        }).setOrigin(0.5).setInteractive({useHandCursor: true});

        botonJugar.on("pointerup", () => { // se ejecuta cuando el jugador sueltao el clic del raton
            inventario.resetInventoryGame();
            this.registry.set("level", 0);
            this.scene.start("EscenaBatalla"); 
        });

        // boton tienda de personajes
        let botonTienda= this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 40, "TIENDA", {
             fontFamily: "Arial", 
            color: "rgb(231, 231, 231)" ,
            backgroundColor: "rgb(143, 4, 4)", 
            padding: {x: 20, y: 10} // borde
        }).setOrigin(0.5).setInteractive({useHandCursor: true});

        // le he metido un log porque la escena no esta creada todavia
        botonTienda.on("pointerup", () => { // se ejecuta cuando el jugador sueltao el clic del raton
            console.log("hola quiero gastar mi sulfuro");
        });

        // boton ajustes (he usado el menu de pausa)
        let botonAjustes = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 120, "AJUSTES", {
            fontFamily: "Arial", 
            color: "rgb(231, 231, 231)" ,
            backgroundColor: "rgb(143, 4, 4)", 
            padding: {x: 20, y: 10} // borde
        }).setOrigin(0.5).setInteractive({useHandCursor: true});

        botonAjustes.on("pointerup", () => { // se ejecuta cuando el jugador sueltao el clic del raton
            if (this.scene.isActive("menuPausa")) return;
            this.scene.launch("menuPausa", {previousScene: this.scene});
            this.scene.pause();
        });


        /*

        let startButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY , "Start",{
            fontFamily: "arcade",
            align: "center",
            fontSize: 20,
        }).setOrigin(0.5).setInteractive();

        startButton.on('pointerdown', pointer =>{
             this.scene.start("PlayScene");
        });
        */

        /*
        let button_Trial_Scene1 = this.add.image(this.scale.width/4,this.scale.height/3,"Button_Scene_Adan");
        this.add.text(this.scale.width/2,this.scale.height*2/3,
            "El botón a la izquierda es la version más avanzada, \n el del medio es la tienda y el de la derecha es una prueba para el enemigo \n (instancia un objeto al ser invocado, hay que darle a la w repetidas veces para que muera)",{
            fontFamily: "Arial",
            align: "center",
            fontSize: 15,
            color: "rgb(26, 194, 14)"
        }).setOrigin(0.5);
        button_Trial_Scene1.setInteractive();
        button_Trial_Scene1.on("pointerup",()=>{this.scene.start("Trial_Scene_Adan");})

        let button_alejandro = this.add.image(this.scale.width/2,this.scale.height/3,"Button_Scene_Adan");
        button_alejandro.setInteractive();
        button_alejandro.on("pointerup",()=>{this.scene.start("EscenaAlejandro");})

        let button_javier = this.add.image(this.scale.width - 200,this.scale.height/3,"escena").setScale(0.4,0.4);
        button_javier.setInteractive();
        button_javier.on("pointerup",()=>{this.scene.start("EscenaJavier");})

        let button_diego = this.add.image(this.scale.width/2,this.scale.height/2,"xd");
        button_diego.setInteractive();
        button_diego.on("pointerup",()=>{
            //Guardamos el nivel en el que empieza
            this.registry.set("level" , 0);    
            this.scene.start("Level_Diego");
        })

*/
    }
}
