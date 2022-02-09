class planet{
    constructor(heigth, radius, posX, posY, type){
        this.exist = true;
        this.heigth = heigth;
        this.radius = radius;
        this.type = type;
        this.pos = new Vector(posX, posY);
        this.vel = randomVector(15);
        this.createObject();
    }
    createObject(){
        let div = document.createElement("div");
        div.classList.add(this.type);
        div.style.height = this.radius + "px";
        div.style.width = this.radius + "px";
        div.style.top = (this.pos.x - this.radius / 2) + "px";
        div.style.left = (this.pos.y - this.radius / 2) + "px";
        main.appendChild(div);
        this.dom = div;
    }
    addPlanet(other){
        this.vel.update(0,0);
        this.heigth += other.height;
        this.radius = Math.sqrt((this.radius * this.radius) + (other.radius * other.radius))
    }
    setVel(velX, velY){
        this.vel.update(velX, velY);
    }
    update(){
        this.vel.setMax(LUZ);
        this.pos.sum(this.vel);
        this.dom.style.height = this.radius + "px";
        this.dom.style.width = this.radius + "px";
        this.dom.style.top = (this.pos.x - this.radius / 2) + "px";
        this.dom.style.left = (this.pos.y - this.radius / 2) + "px";
    }
}