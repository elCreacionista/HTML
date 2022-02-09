class Player{
    constructor(x,y, name){
        this.r = 10;
        this.name = name;
        this.pos = new Vector(x,y);
        this.ac = new Vector(0,0);
        this.live = 100;
        this.cube = new Cube();
        this.lastDamage = 0;
        this.jumpCD = 100;
        this.jump = 0;
    }

    Swap(){
        this.cube.Swap(this.ac);
    }


    Update(){
        this.pos.addV(this.ac);
        this.ac.upd(0.95);
        this.borders();
        
        if (this.lastDamage > 0){
            this.lastDamage -= 0.5;
        }
        else{
            this.lastDamage = 0;
        }
        if (this.jump > 0){
            this.jump--;
        }

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10 , 10 , (this.live * 2) + (this.lastDamage * 2), 30);

        ctx.fillStyle = "rgb(0,200,0)";
        ctx.fillRect(10 , 10 , this.live * 2, 30);

        ctx.fillStyle = "rgb(100,100,100)";
        ctx.font = "30px Arial";
        ctx.fillText(this.live, 20, 40);
        let d = this.r * 2;
        ctx.fillStyle = this.cube.actual.color;
        
        ctx.strokeStyle = this.cube.actual.color;
        ctx.fillRect(this.pos.x - this.r, this.pos.y - this.r, d, d);
    }


    impact(damage){
        if (this.live > 0){
        this.live -= damage;
        }
        if (this.live <= 0){
            this.live = 0;
            gameOver();
            return;
        }

        
        this.lastDamage += damage;
    }


    borders(){
        if (this.pos.x > width){
            this.pos.x = width - this.r;
            this.ac.upd(-0.5);
        }
        if (this.pos.x < 0){
            this.pos.x = this.r;
            this.ac.upd(-0.5);
        }
        if (this.pos.y > height){
            this.pos.y = height - this.r;
            this.ac.upd(-0.5);
        }
        if (this.pos.y < 0){
            this.pos.y = this.r;
            this.ac.upd(-0.5);
        }
    }


    Jump(){
        if (this.jump > 0){
            return;
        }
        this.ac.upd(50);
        this.ac.setMax(15);
        this.jump = this.jumpCD;
    }

    MoveUp(){
        console.log("eyou");
        this.ac.add(0,-1);
    }
    MoveDown(){
        this.ac.add(0,1);
    }
    MoveLeft(){
        this.ac.add(-1,0);
    }
    MoveRight(){
        this.ac.add(1,0);
    }
}