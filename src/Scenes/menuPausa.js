export default class menuPausa extends Phaser.Scene {

    constructor() {
        super({ key: "menuPausa"});
    }

    init(data) {
        this.previousScene = data.previousScene;    //necesario para guardar el nombre de la escena en la que pausamos
    }

    create() {
        this.ancho = this.scale.width - this.scale.width/5
        this.alto = this.scale.height - this.scale.height/5
        this.contenedor = this.add.container(0, 0);
        this.mostrarMenuPausa();
    }

    //el primer menu que se muestra al entrar al menu de pausa
    mostrarMenuPausa(){
        this.contenedor.removeAll(true);    //se limpia y se pone

        const fondo = this.add.rectangle(this.scale.width/2, this.scale.height/2, this.ancho, this.alto, 0x000000, 0.7);
        const pausa = this.add.text(this.scale.width/2 - 100, 100, "PAUSA", {font: "48px Arial", color: "#ffffff"});
        this.contenedor.add(fondo);
        this.contenedor.add(pausa);

        const reanudar = this.add.text(this.scale.width/3 - 150, 250, "REANUDAR",   //botón para reanudar la escena
            {
                font: "30px Arial",
                color: "#ffffff",
                backgroundColor: "#277a35",
                padding: {x: 20, y: 10}
            }
        )
        reanudar.setInteractive({useHandCursor: true});     //esto hace que al poner el cursor por encima aparezca como una mano
        reanudar.on("pointerup", () => {
            this.scene.resume(this.previousScene);      //la escena anterior se reanuda y luego cierro esta
            this.scene.stop();
        });
        this.contenedor.add(reanudar);

        const menuPrinc = this.add.text(this.scale.width - this.scale.width/3 - 150, 250, //botón para irse al menu de inicio
            "MENU INICIO", {
                font: "30px Arial",
                color: "#ffffff",
                backgroundColor: "#277a35",
                padding: {x: 20, y: 10}
            }
        )
        menuPrinc.setInteractive({useHandCursor: true});
        menuPrinc.on("pointerup", () => {
            this.scene.stop();
            this.scene.stop(this.previousScene);
            this.scene.start("MainMenu");
        });
        this.contenedor.add(menuPrinc);

        const creditos = this.add.text(this.scale.width/3 - 150, 420, //botón para ver los creditos
            "CREDITOS", {
                font: "30px Arial",
                color: "#ffffff",
                backgroundColor: "#277a35",
                padding: {x: 20, y: 10}
            }
        )
        creditos.setInteractive({useHandCursor: true});
        creditos.on("pointerup", () => {this.mostrarCreditos()});
        this.contenedor.add(creditos);

        const configs = this.add.text(this.scale.width - this.scale.width/3 - 150, 420, //botón para ver la configuración
            "CONFIGURACION", {
                font: "30px Arial",
                color: "#ffffff",
                backgroundColor: "#277a35",
                padding: {x: 20, y: 10}
            }
        )
        configs.setInteractive({useHandCursor: true});
        configs.on("pointerup", () => {this.mostrarConfig()});
        this.contenedor.add(configs);
    }

    //esto se muestra al darle al botón de créditos
    mostrarCreditos(){
        this.contenedor.removeAll(true);

        const fondo = this.add.rectangle(this.scale.width/2, this.scale.height/2, this.ancho, this.alto, 0x000000, 0.7);
        const texto = this.add.text(this.scale.width/2 - 300, 100, 
            "Alejandro de Haro Morales\nDiego García Alonso\nAdán Calvo Durán\nJavier de Sala Rodríguez", 
            {font: "48px Arial", color: "#ffffff"});
        this.contenedor.add(fondo);
        this.contenedor.add(texto);

        // Botón para volver
        const volver = this.add.text(this.scale.width/3 - 150, 420, "VOLVER",
        {
            font: "30px Arial",
            color: "#ffffff",
            backgroundColor: "#277a35",
            padding: { x: 20, y: 10 }
        })
        volver.setInteractive({useHandCursor: true});
        volver.on("pointerup", () => {this.mostrarMenuPausa()});
        this.contenedor.add(volver);
    }

    //esto se muestra al darle al botón de configuración
    mostrarConfig(){
        this.contenedor.removeAll(true);

        const fondo = this.add.rectangle(this.scale.width/2, this.scale.height/2, this.ancho, this.alto, 0x000000, 0.7);
        const otrotext = this.add.text(this.scale.width/2 - 300, 100, "CONFIGURACIÓN", {font: "48px Arial", color: "#ffffff"});
        this.contenedor.add(fondo);
        this.contenedor.add(otrotext);

        const music = this.add.text(this.scale.width/3 - 150, 250, "MUTE (aun no hay nada que mutear)",
        {
            font: "30px Arial",
            color: "#ffffff",
            backgroundColor: "#277a35",
            padding: { x: 20, y: 10 }
        })
        music.setInteractive({useHandCursor: true});
        let muted = false;
        music.on("pointerup", () => {
            muted = !muted;
            if (muted) music.setBackgroundColor("#ff0000");
            else music.setBackgroundColor("#277a35");
        });
        this.contenedor.add(music);

        const volver = this.add.text(this.scale.width/3 - 150, 420, "VOLVER",
        {
            font: "30px Arial",
            color: "#ffffff",
            backgroundColor: "#277a35",
            padding: { x: 20, y: 10 }
        })
        volver.setInteractive({useHandCursor: true});
        volver.on("pointerup", () => {this.mostrarMenuPausa()});
        this.contenedor.add(volver);
    }
}