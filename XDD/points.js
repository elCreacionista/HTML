class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    getCoeficient(){
        let Cx = this.x / Width;
        let Cy = this.y / Height;
        let x = (Cx * 10) - 5;
        let y = (Cy * 10) - 5;



        return new Point(x,y);
    }
    getNewPoint(){
        return new Point(this.x, this.y);
    }
    add(point){
        this.x += point.x;
        this.y += point.y;
    }


}
class Tail{
    constructor(firstPoint){
        this.color = "rgb(" + Math.random()*255 + "," +  Math.random()*255 + "," + Math.random()*255 + ")";
        console.log(firstPoint);
        this.firstPoint = firstPoint;
        this.tail = [firstPoint];
        this.coeficient = firstPoint.getCoeficient();
    }
    update(){
        
        if (this.tail.length > 200){
            this.undraw();
            this.removePoint();
        }
        let p = this.tail[this.tail.length - 1].getNewPoint();
        this.coeficient = this.tail[0].getCoeficient();
        p.add(this.coeficient);
        this.addPoint(p);
        this.draw();
    }

    addPoint(point){
        this.tail.push(point);
    }
    removePoint(){
        this.tail.shift();
    }

    undraw(){

        ctx.fillStyle = "black";
        ctx.fillRect(this.tail[0].x - 1, this.tail[0].y - 1, 4,4);
    }
    draw(){
        let i = this.tail.length - 1;
        if (!i){return;}
        if (Math.random() > .5){
        ctx.fillStyle = this.color;

        }
        else{
            ctx.fillStyle = "white";

        }
        ctx.fillRect(this.tail[i].x, this.tail[i].y, 2,2);
        
    }
    isOnRange(){
        return this.tail[0].x <= 0 || this.tail[0].x >= Width ||
        this.tail[0].y <= 0 || this.tail[0].y >= Height;
    }
}