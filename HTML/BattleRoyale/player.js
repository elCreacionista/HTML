class Player{
    constructor(color, Weapon){
        this.pos = new Vector(200,200)//randomPoint(canvas.width, canvas.height);
        this.acc = new Vector(0,0);
        this.color = color;
        this.life = 100;
        this.shield = 0;
        this.weapon = Weapon ? Weapon : null;
    }
    Draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x - 10, this.pos.y - 10, 21,21);
        let v = new Vector(this.acc.x, this.acc.y);
        v.setMax(50);
        console.log(v)
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.lineTo(this.pos.x + v.x, this.pos.y + v.y);
        ctx.stroke();
        ctx.closePath();
        this.Write();
    }
    Write(){
        
        ctx.font =  "10px Arial";
        ctx.fillStyle = this.color;
        ctx.fillText("" + this.life + " " + this.shield ,this.pos.x + 2, this.pos.y - 5);
    }
    Update(){
        this.acc.sum(randomVector(0.1));
        this.Borders();
        this.pos.sum(this.acc);
        this.Draw();
    }
    Borders(){
        if (this.pos.y > canvas.height){
            this.pos.y = canvas.height;
        }
        else if (this.pos.y < 0){
            this.pos.y = 0;
        }
        if (this.pos.x > canvas.width){
            this.pos.x = canvas.width;
        }
        else if (this.pos.x < 0){
            this.pos.x = 0;
        }
    }
}