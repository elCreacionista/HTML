class Duck{

    constructor(mother, father, x, y){
        this.age = 0;
        this.reproduce = 0;
        this.family = this.getFamily(mother, father);
        this.posX = x;
        this.posY = y;
    }
    constructor(x, y){
        this.age = 0;
        this.reproduce = 0;
        this.family = this.getFamily("A", "B");
        this.posX = x;
        this.posY = y;
    }

    Draw(){
        
    }
    /*Update(){
        this.age += 0.1;
        if(this.age >= 30){
            if(this.reproduce)
        }    

    }*/


}