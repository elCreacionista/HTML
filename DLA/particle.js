class particle{
    constructor(x, y, r, id){
        if (arguments.length == 1){
            this.x = x.x;
            this.y = x.y;
            this.r = x.r;
            this.id = x.id;
            this.contact = x.contact;
            this.dom = document.querySelector("#particle" + this.id);
        } else{
            this.x = x;
            this.y = y;
            this.r = r;
            this.id = id;
            this.contact = false;
            this.dom = document.querySelector("#particle" + this.id);
        }
    }
    ceate(){
        this.dom.style.height = this.r + "px";
        this.dom.style.width = this.r + "px";
        this.draw();
    }
    
    move(){
        this.x += (Math.random()* 5) - 3;
        this.y += (Math.random()* 5) - 2.5;
        if (this.x < 0 + this.r){
            this.x = 0 + this.r;
        }
        else if (this.x > 500 - this.r){
            this.x = 500 - this.r;
        }
        if (this.y < 0 + this.r){
            this.y = 0 + this.r;
        }
        else if (this.y > 500 - this.r){
            this.y = 500 - this.r;
        }
    }
    draw(){
        this.dom.style.left = (this.y - this.r/2) + "px";
        this.dom.style.top = (this.x - this.r/2)+ "px";
        if (this.contact){
            this.dom.style.backgroundColor = "yellow";
        } else{
            this.dom.style.backgroundColor = "white";
        }
    }
    getDistance(other){
        let dx = 0;
        let dy = 0;
        if (this.x > other.x){
            dx = this.x - other.x;
        } else{
            dx = other.x - this.x;
        }
        if (this.y > other.y){
            dy = this.y - other.y;
        } else{
            dy = other.y - this.y;
        }
        return Math.sqrt((dx * dx) + (dy * dy));


    }

    isTouching(other){
        return this.getDistance(other) < (this.r + other.r)/2;
    }

}