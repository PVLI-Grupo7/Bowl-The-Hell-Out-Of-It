import Pin from "../Pin";
//Este pin te da oro al terminar el encuentro, cada vez que lo derribes su oro otorgado aumenta
//En la escena habra que hacer que al ganar y se recompense al jugador que chequee cuantos pines de diamante hay y lea cuanto valen
export default class DiamondPin extends Pin{
    constructor(scene,x,y,texture,witdh,height){
        super(scene, x, y, texture);

        this.goldRewardCap = 4;
        this.goldReward = 0;
        this.effectPostLaunch = true;
    }

    extraEffect(){
        if (this.goldReward < this.goldRewardCap) this.goldReward++;
        return;
    }

    returnGoldValue(){
        return this.goldReward;
    }
}