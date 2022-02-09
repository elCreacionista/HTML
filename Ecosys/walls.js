class Wall{
    constructor(x, y, size){
        this.pos = new Vector(x,y);
        this.size = size;
        this.radius = (size / 2) * (size / 2);
    }


    remove(){
        console.log(this.dom);
        main.removeChild(this.dom);
    }

    setWall(){
        this.dom = document.createElement("div");
        this.dom.classList.add("wall");
        this.dom.style.top = this.pos.x - (this.size / 2) + "px";
        this.dom.style.left = this.pos.y - (this.size / 2) + "px";
        this.dom.style.width = this.size + "px";
        this.dom.style.height = this.size + "px";
        //this.dom.style.transform = `rotateZ(${Math.random()* 360}deg)`
        main.appendChild(this.dom);
    }
}