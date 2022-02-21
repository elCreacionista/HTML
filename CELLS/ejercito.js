class Nacion{

    constructor(point, color, size, dispersion){
        this.state = "neutral";
        this.cuartel = point;
        this.rgb = color;
        this.color = `rgb(${color[0]},${color[1]},${color[2]})`;
        this.troops = [];
        this.CreateTroops(size, dispersion);
    }
    SetState(state){
        this.state = state;
    }
    SetEnemy(enemy){
        this.enemy = enemy;
        this.SetState("advance");
    }
    Grow(){
    }

    Update(ctx){
        //console.log(ctx.getImageData(100, 100, 1, 1).data[0]);
        let trueP = this.cuartel.GetPos();
        for(let i = 0; i < this.troops.length; i++){
            
            if(Math.random() > 1)
                continue;
            let p = this.cuartel.Sum(this.troops[i].position);

            let pUP = p.GetPos(p.Sum(new Point(  0,  1)));
            let pDW = p.GetPos(p.Sum(new Point(  0, -1)));
            let pLF = p.GetPos(p.Sum(new Point( 1,  0)));
            let pRG = p.GetPos(p.Sum(new Point( -1, 0)));
            //console.log(getColor(pDW))
            //console.log(this.enemy.rgb)
            //console.log(sameColor(getColor(pUP), this.enemy.rgb))
            
            
            if (sameColor(getColor(pUP), this.enemy.rgb)){
                Combat(this, i, pUP);
//                console.log("I'm: " + this.color + " With index: " + i + " I see enemy UP");
                return;
            }
            if (sameColor(getColor(pDW), this.enemy.rgb)){
                Combat(this, i, pDW);
                return;
            }
            if (sameColor(getColor(pLF), this.enemy.rgb)){
                Combat(this, i, pLF);
                return;
            }
            if (sameColor(getColor(pRG), this.enemy.rgb)){
                Combat(this, i, pRG);
                return;
            }

            switch(this.state){
                case "neutral":
                        this.troops[i].RandomMove();
                break;
                case "advance":
                        this.troops[i].Advance(trueP, this.enemy.cuartel);
                break;
                case "retreat":
                        this.troops[i].Advance(trueP, this.cuartel);

            }
            
        }
    }

    CreateTroops(cant, dispersion){
        for(let i = 0; i < cant; i++){
            let p = RandomPoint(dispersion);
            this.troops.push(new Troop(p,this.color))
        }

    }
    Draw(ctx){

        let x = this.cuartel.x;
        let y = this.cuartel.y;
        for (let i = 0; i < this.troops.length; i ++){  
            ctx.fillStyle = this.color;
            ctx.fillRect(this.troops[i].position.x + x,this.troops[i].position.y + y,1,1) 
        }
        


        ctx.fillStyle = "black";
        ctx.fillRect(this.cuartel.x - 5,this.cuartel.y - 5,10,10);

        ctx.fillStyle = this.color;
        ctx.fillRect(this.cuartel.x - 2,this.cuartel.y - 2,4,4);
    }

    GetTrop(pos){
        for (let i = 0; i < this.troops.length; i++){
            if (this.troops[i].position.GetPos() == pos){
                return i;
            }
        }
    }
    kill(trop){
        this.troops.splice(trop, 1)
    }
}

class Troop{

    constructor(point, color){
        this.position = point;
        this.color = color;
        this.fearFactor = Math.random();
        this.strenght = Math.random();
    }
    Update(){
        this.RandomMove();
    }
    Advance(pos, enemy){

        if(Math.random() > this.fearFactor){
            this.position.Move(RandomPoint(3))
            return;
        }
        let p = this.position.Sum(pos);
        let goto = p.getDirection(enemy);
        

        this.position.Move(goto);
    }
    RandomMove(){
        this.position.Move(RandomPoint(3))
    }

}