class Mont{

    constructor(c, t, lr, rr){
        this.center = c;
        this.total = t;
        this.leftratio = lr + 1;
        this.rightratio = rr + 1;
        this.actualpos = 0;
        this.actualheight = 0;
        this.finished = false;
    }
    update(){
        if (this.actualpos < this.center){
            this.actualheight += Math.random()*this.leftratio;
        }
        else{
            this.actualheight -= Math.random()*this.rightratio;
        }
        this.actualpos ++;
        if (this.actualheight <= 0){
            this.finished = true;
        }
    }
    

}