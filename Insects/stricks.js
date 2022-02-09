class stick{
    constructor(){
        let randomy = 10 + Math.random()* 20;
        this.start = new Vector(randomy, canvas.height - 10);
        this.size = new Vector(Math.random()*canvas.width, canvas.height - Math.random()* 500);
        this.color = "rgb(250,100,0)";
    }
}