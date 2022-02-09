
class aracnid{
    constructor(stick){
        this.index = "araña";
        this.stick = stick;
        this.pos = new Vector(stick.size.y, stick.size.x);
        this.acc = new Vector(0,0);
        this.size = new Vector(4, 4);
        this.color = "rgb(100,100,255)";
        this.radius = 5;
    }
    Update(){
        this.pos.add(this.acc);
        if (Math.random() > 0.2){
            this.GoUp();
        }
        else{
            this.GoDown();
        }
        let x = this.pos.x % canvas.height;
        let y = this.pos.y % canvas.width;
        this.pos.upd(x,y);
    }
    getPos(){
        return this.pos;
    }
    GoUp(){
        this.acc.upd(1-Math.random()*2, 0);
    }
    GoDown(){
        this.acc.upd(1-Math.random()*2, 0);
    }
    RandomPath(){
        this.acc.upd(1-Math.random()*2, 1-Math.random()*2);
        if (Math.random < 0.5){
            this.acc.upd(100-Math.random()*200, 100-Math.random()*200);
        }
    }
}









class fly{
    constructor(y, x){
        this.fear = Math.random()* 500;
        this.index = "mosca";
        this.pos = new Vector(y, x);
        this.acc = new Vector(0,0);
        this.size = new Vector(4, 4);
        this.color = "rgb(0,0,0)";
        this.radius = 5;
    }
    Update(){
        this.pos.add(this.acc);
        if (this.pos.x >= this.fear){
            this.FlyHigh();
        }
        else{
            this.RandomPath();
        }
        let x = this.pos.x % canvas.height;
        let y = this.pos.y % canvas.width;
        this.pos.upd(x,y);
    }
    getPos(){
        return this.pos;
    }
    FlyHigh(){
        this.acc.upd(-Math.random()*2, 1-Math.random()*2);
    }
    RandomPath(){
        this.acc.upd(1-Math.random()*2, 1-Math.random()*2);
        if (Math.random < 0.5){
            this.acc.upd(100-Math.random()*200, 100-Math.random()*200);
        }
    }
}