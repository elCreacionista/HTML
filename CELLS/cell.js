class Cell{

    constructor(x, y){
        this.body = new CellBody();
        this.position = new Point(x, y);
    }


    Update(){
        //DO STUFF

        /*if (Math.random() > .4)
            this.Move();*/

        
        this.body.Grow();
        this.body.PrintBody();
    }
    Draw(ctx){
        this.body.Draw(this.position, ctx);
    }

    Move(){
        this.position.Move(RandomPoint(3))
    }
}

class CellBody{

    constructor(){
        this.points = [];
        this.points.push(new Point(0,0));
        this.mass = this.points.length;
        this.maxDiam = 10;

    }
    PrintBody(){
        console.log("Diam: " + this.maxDiam);
        console.log("Mass: " + this.mass);
        console.log(this.points)
    }
    Grow(){
        let p = RandomPoint(this.maxDiam);
        if(p.GetDist(new Point(0,0)) > this.maxDiam * .5){
            return;
        }
        for (let i = 0; i < this.points.length; i ++){    
            if (this.points[i].GetDist(p) == 0)
            return;
        }
        this.mass++;
        this.points.push(p);
    }

    Draw(position, ctx){
        let x = position.x;
        let y = position.y;
        for (let i = 0; i < this.points.length; i ++){  
            ctx.fillStyle = "red";
            ctx.fillRect(this.points[i].x + x,this.points[i].y + y,1,1) 
        }
        
    }

}















class CellBody2{

    constructor(){
        this.mass = 1;
        this.membrane = [];
        this.membrane[0] = [];
        this.membrane[0][0] = 1;
        this.maxDiam = 1;

    }
    PrintBody(){
        console.log("Diam: " + this.maxDiam);
        console.log("Mass: " + this.mass);
        console.log(this.membrane);

    }
    Grow(){
        let done = false;
        let factor = 3;
        let pos = new Point(0,0);
        while (!done){
            if (factor > 60) break;
            let p = RandomPoint(factor);
            if(!(this.membrane[p.x] == null)){
                if (this.membrane[p.x][p.y] == null){
                    this.membrane[p.x][p.y] = 1;
                    this.maxDiam = factor; this.mass++; console.log("growing")                    //OLa
                    break;
                }
            }
            else {
                this.membrane[p.x] = [];
                this.membrane[p.x][p.y] = 1;
                this.maxDiam = factor; this.mass++; console.log("growing")                    //OLa
                break;
            }
            factor++;
        }
    }
    Draw(position, ctx){
        let x = position.x;
        let y = position.y;
        for (let i = this.maxDiam * -1; i < this.maxDiam; i ++){
            for (let j = this.maxDiam * -1; j < this.maxDiam; j ++){
                if(!(this.membrane[j] == null) && !(this.membrane[j][i] == null)){
                    ctx.fillStyle = "red";
                    ctx.fillRect(x + j,y + i,1,1);
                }
            }
        }
        
    }


}