class Weapon{
    constructor(dmg, speed){
        this.dmg = dmg ? dmg : 20;
        this.speed = speed ? speed : 5;
        this.cd = 0;
    }
    Attack(){
        if (this.cd >= this.speed){
            this.cd = 0;
            return true;
        }
        this.Update();
        return false;
    }
    Update(){
        this.cd++;
    }
}