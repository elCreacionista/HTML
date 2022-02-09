
const     fishS = 4;
class Fish{
    constructor(posX, posY, maxVelocity, specie){
        this.specie = specie;
        this.pos = new Vector(posX,posY);
        this.vel = randomVector(5);
        this.maxVelocity = maxVelocity;
        this.alive = true;
        this.hunger = 0;
        this.maxHunger = Math.random() * 1000;
        this.mapheight = 800;
        this.mapwidth = 800;
    }
    

    update(){
        if (!this.alive){ return;}
        this.hunger += Math.random()* 0.1;
        if (this.hunger > this.maxHunger){
            this.die(); 
            console.log(fishes);
        }
        this.goCenter();
        this.separation();
        this.followNear();
        for (let i = 0; i < Cfishers; i++){
            if (this.pos.getDist(fishers[i].pos) > 400 * 400){
                this.goTo(fishers[i].pos)
            }
            if (this.pos.getDist(fishers[i].pos) < 75 * 75){
                this.goOut(fishers[i].pos)
            }
        }
        for (let i = 0; i < Csharks; i++){
            if (this.pos.getDist(sharkses[i].pos) < this.sharkvision){
                this.goOut(sharkses[i].pos);
            }
        }
        for (let i = 0; i < Cwalls; i++){
            if (this.pos.getDist(walls[i].pos) <= walls[i].radius + 
                this.wallvision){
                    this.vel.sum(randomVector(1));
            }
            if (this.pos.getDist(walls[i].pos) <= walls[i].radius){
                this.goOut(walls[i].pos)
            }
        }
        
        this.vel.setMax(this.maxVelocity);
        this.pos.sum(this.vel);
        this.comproveBorders();
        this.dom.style.top = this.pos.x - fishS + "px";
        this.dom.style.left = this.pos.y - fishS + "px";
        
    }

    goToWalls(){
        let found = false;
        let nearestwall = [];
        for (let i = 0; i < Cwalls; i++){
            if (this.pos.getDist(walls[i].pos) < 20 * 20){
                this.goOut(walls[i].pos);
                break;
            }
            else if (this.pos.getDist(walls[i].pos) < 50 * 50){
                nearestwall.push(walls[i].pos);
                found = true;
            }
        }
        if (found){
            let vector = this.pos.getMed(nearestwall);
            vector.setMax(this.maxVelocity * 0.2);
            this.vel.sum(vector);
        }
        return found;
    }


    die(){
        main.removeChild(this.dom);
        this.pos.x = -100;
        this.pos.y = -100;
        this.alive = false;
        console.log("fish dies" + this.specie);
        
        /*ArrayFishes();
        CountFishes();
        sortSpecies();
    */}


    goCenter(){
        let found = false;
        let vectors = [];
        let cant = 0;
        for (let i = 0; i < Cfishes; i++){
            if (fishes[i] == undefined){break;}
            if (fishes[i] != this && this.specie === fishes[i].specie){
                if (this.pos.getDist(fishes[i].pos) < this.vcenter){
                    vectors[cant++] = Object.assign(fishes[i].pos);
                    found = true;
                }
            }
        }
        if (found){
            let vector = this.pos.getMed(vectors);
            vector.setMax(0.01);
            this.vel.sum(vector);
        }
    }
    separation(){
        let vector = new Vector(0,0);
        let found = false;
        for (let i = 0; i < Cfishes; i++){
            if (fishes[i] == undefined){break;}
            if (fishes[i] != this && this.specie === fishes[i].specie){
                if (this.pos.getDist(fishes[i].pos) < this.Vseparation){
                    vector.sum(this.goOut(fishes[i].pos));
                    found = true;
                }
            }
        }
        if (found){
            this.vel.sum(vector);
        }
    }

    followNear(){
        for (let i = 0; i < Cfishes; i++){
            if (fishes[i] == undefined){break;}
            if (fishes[i] != this && this.specie === fishes[i].specie){
                if (this.pos.getDist(fishes[i].pos) < this.vision){
                    this.vel.sum(fishes[i].vel);
                }
            }
        }
    }
    setSpecie(){
        for (let i = 0; i < Cspecies; i++){
            if (this.specie === i){
                this.Vseparation = species[i][0];
                this.maxHunger = Math.random() * 1000 + 10000;
                this.vision = species[i][1];
                this.vcenter = species[i][2];
                this.sharkvision = species[i][3];
                this.wallvision = species[i][4];
                this.maxVelocity = species[i][5];
                this.dom.style.backgroundColor = 
            `rgb(${species[i][6][0]},${species[i][6][1]},${species[i][6][2]})`
                return;
            }
        }
    }

    setFish(doc){
        let div = document.createElement("div");
        div.classList.add("fish");
        div.style.top = this.pos.x + "px";
        div.style.left = this.pos.y + "px";
        doc.appendChild(div);
        this.dom = div;

    }


    goTo(position){
        let x = position.x - this.pos.x;
        let y = position.y - this.pos.y;
        this.vel.sum(new Vector(x,y));
    }
    goOut(position){
        let x = position.x - this.pos.x;
        let y = position.y - this.pos.y;
        this.vel.sum(new Vector(-x,-y));
        return new Vector(-x,-y)
    }
    comproveBorders(){
        
        if (this.pos.x <= 10){
            this.pos.x = this.mapheight - 10;
        } else if (this.pos.x >= this.mapheight - 10){
            this.pos.x = 10;
        }
        if (this.pos.y <= 10){
            this.pos.y = this.mapwidth - 10;
        } else if (this.pos.y >= this.mapwidth - 10){
            this.pos.y = 10;
        }
    }

}