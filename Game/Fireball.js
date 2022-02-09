class Fireball{
    constructor(r, pos, ac){
        this.color = "rgb(200,10,10)";
        this.r = r;
        this.pos = pos;
        this.ac = ac;
        this.death = false;
        this.dotail = 0;
        this.tail = [this.pos, this.pos, this.pos, this.pos, this.pos];
    }

    impact(){
        this.death = true;
    }




    Tail(){
        for(let i = 0; i < 10; i++){
            if (this.tail[i] && this.tail[i + 1]){
            this.tail[i] = new Vector(this.tail[i + 1].x, this.tail[i + 1].y);
            let size = this.r - i;
            ctx.fillStyle = "rgb(" + i + "00,0,0)";
            ctx.fillRect(this.tail[i].x - size, this.tail[i].y - size, size * 2, size * 2);
            }
        }
        if (this.dotail > this.r / 2){
            this.dotail = 0;
            this.tail[this.tail.length - 1] = new Vector(this.pos.x, this.pos.y);
        }
        else{
            this.dotail++;
        }
    }
    Update(){
        this.pos.addV(this.ac);
        this.borders();
        this.Tail();
        let d = this.r * 2;
        ctx.fillStyle = this.color;
        
        ctx.fillRect(this.pos.x - this.r, this.pos.y - this.r, d, d);
    }
    borders(){
        if (this.pos.x > width + this.r){
            this.pos.x = width;
            this.ac.upd(0);
            this.death = true;
        }
        if (this.pos.x < -this.r){
            this.pos.x = 0;
            this.ac.upd(0);
            this.death = true;
        }
        if (this.pos.y > height + this.r){
            this.pos.y = height;
            this.ac.upd(0);
            this.death = true;
        }
        if (this.pos.y < -this.r){
            this.pos.y = 0;
            this.ac.upd(0);
            this.death = true;
        }
    }

}
function createRandomBall(r, v){
    let rand = Math.floor(Math.random() * 4);
    let ac;
    let pos;
    switch (rand){
        case 0: 
            pos = new Vector(10, Math.random() * height);
            ac = new Vector(v, 0);
            break;
        case 1: 
            pos = new Vector(width - 10 , Math.random() * height);
            ac = new Vector( -v, 0);
            break;
        case 2: 
            pos = new Vector(Math.random() * width, 10);
            ac = new Vector( 0, v);
            break;
        case 3: 
            pos = new Vector(Math.random() * width, height - 10);
            ac = new Vector( 0, -v );
            break;
        default: console.log("error");
            ac = new Vector(0, 0);
            pos = new Vector(0, 0);
    }
    return new Fireball(r, pos, ac);
    
}
function createToPlayerBall(r,pl,v){

    //let rand = Math.floor(Math.random() * 4);
    let rand = 1;          //971797345 657400277 660545612 46396138d bankia 8489  docupenalizaciones@vodafone.es <   abono penalizacion >>>> dni + facturas + extracto bancario
    let randposx = pl.x + (Math.random() * 30 - 15);
    let randposy = pl.y + (Math.random() * 30 - 15);

    let ac;
    let pos;
    switch (rand){
        case 0: 
            pos = new Vector(10, randposy);
            ac = new Vector(v, 0);
            break;
        case 1: 
            pos = new Vector(width - 10 , randposy);
            ac = new Vector( -v, 0);
            break;
        case 2: 
            pos = new Vector(randposx, 10);
            ac = new Vector( 0, v);
            break;
        case 3: 
            pos = new Vector(randposx, height - 10);
            ac = new Vector( 0, -v );
            break;
        default: console.log("error");
            ac = new Vector(0, 0);
            pos = new Vector(0, 0);
    }
    return new Fireball(r, pos, ac);
}