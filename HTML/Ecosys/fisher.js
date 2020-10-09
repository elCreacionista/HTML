
const     fisherS = 7.5;  
class Fisher{
    constructor(x, y, sizeX, sizeY){
        this.pos = new Vector(x,y);
        this.size = new Vector(sizeX, sizeY);
        this.rangue = sizeX / 2;
        this.setFisher();
        this.setRed();
    }

    update(){

        for (let i = 0; i < fishS; i++){
            if (fishes[i].alive && this.pos.getDist(fishes[i].pos) <= this.rangue * this.rangue){
                console.log(fishes[i].pos)
                console.log(this.pos.getDist(fishes[i].pos))
                fishes[i].die();
            }
        }
        
        

    }
    setRed(){
        let div = document.createElement("div");
        div.classList.add("red");
        div.style.top = this.pos.x - (this.size.x / 2) + "px";
        div.style.left = this.pos.y - (this.size.y / 2) + "px";
        div.style.height = this.size.x + "px";
        div.style.width = this.size.y + "px";
        main.appendChild(div);
        this.dom2 = div;
    }

    setFisher(){
        let div = document.createElement("div");
        div.classList.add("fisher");
        div.style.top = this.pos.x - (fisherS / 2)+ "px";
        div.style.left = this.pos.y - (fisherS / 2) + "px";
        main.appendChild(div);
        this.dom1 = div;
    }

}