
function RandomPoint(diam){
    let radius = diam / 2;
    let r1 = (Math.random() * diam) - radius;
    let r2 = (Math.random() * diam) - radius;
    return new Point(r1,r2)
}
function RandomDirection(){
    
    let y = Math.abs((Math.random() * 1000) % 2).toFixed(0) - 1;
    let x = Math.abs((Math.random() * 1000) % 2).toFixed(0) - 1;
    return new Point(x,y)
}
class Point{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    PrintCoords(){
        console.log("X: " + this.x + " Y: " + this.y);
    }
    Move(point){
        this.x += point.x;
        this.y += point.y;
    }
    GetPos(){
        return new Point(this.x, this.y)
    }

    Sum(p){
        let point = new Point(this.x + p.x,this.y + p.y);
        return point;
    }

    getDirection(point){
        if(this.GetDist(point) < 1)
            return new Point(0,0);

        let x = point.x - this.x;
        let y = point.y - this.y;
        let p = new Point(x,y);
        p.setMax(2);
        return p;

    }
    setMax(v){
        let x = this.x;
        let y = this.y;
        if (this.x < 0){
            this.x *= -1;
        }
        if (this.y < 0){
            this.y *= -1;
        }
        let sum = this.x + this.y;
        if (sum > v){
            let maxS = sum / v;
            this.x /= maxS;
            this.y /= maxS;
        }
        if (x < 0){
            this.x *= -1;
        }
        if (y < 0){
            this.y *= -1;
        }
    }

    GetDist(point){

        let x2 = point.x - this.x;
        let y2 = point.y - this.y;

        return Math.sqrt((x2 * x2) + (y2 * y2));
    }
    
}