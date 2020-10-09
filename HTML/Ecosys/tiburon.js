const     sharkS = 15;

class Shark extends Fish{
    constructor(posX, posY, maxVelocity, vision){
        super(posX, posY, maxVelocity);
        this.sprint = false;
        this.vision = vision;
        this.travelling = false;
        this.target = new Vector(center.x, center.y);
    }

    setFish(){
        let div = document.createElement("div");
        div.classList.add("shark");
        div.style.top = this.pos.x - sharkS + "px";
        div.style.left = this.pos.y - sharkS + "px";
        main.appendChild(div);
        this.dom = div;
    }
    setSpecie(){
        return;
    }


    update(){
        if (this.pos.getDist(this.target) < 40 * 40){
            this.randomMovement();
            this.sprint = false;
        }
        else {
            this.goTo(this.target);
            this.sprint = true;
            if (this.followFish() === false){
                this.randomMovement();
            }
        }
        
        if (this.sprint){
            this.dom.style.backgroundColor = "rgb(140, 140, 140)";
            this.vel.setMax(this.maxVelocity);
        } else{
            this.dom.style.backgroundColor = "black"
            this.vel.setMax(this.maxVelocity / 2);
        }
        
        
        this.updateVel();
    }
    updateVel(){
        for (let i = 0; i < Cwalls; i++){
            if (this.pos.getDist(walls[i].pos) < 
            (walls[i].size / 2) * (walls[i].size / 2) +
            (sharkS / 2) * (sharkS / 2)){
                this.goOut(walls[i].pos);
            }
        }
        this.pos.sum(this.vel);
        this.comproveBorders();
        this.dom.style.top = this.pos.x - sharkS + "px";
        this.dom.style.left = this.pos.y - sharkS + "px";
    }

    randomMovement(){
        let random = randomVector(100);
        if (this.travelling){
            this.sprint = true;
            if (Math.random() < 0.005){
                this.travelling = false;
            }
            return;
        }
        else{
            this.sprint = false;
            if (Math.random() < 0.01){
                this.travelling = true;
                random.setMax(this.maxVelocity);
                this.vel.sum(random);
                return;
            }
        }
        if (Math.random() > 0.01){
            random.setMax(0.5);
        } else{
            random.setMax(0.5);
        }
        this.vel.sum(random);
    }

    followFish(){
        let found = false;
        let nearestfish = [];
        let nearestDist = Infinity;
        let nearest = 0;
        for (let i = 0; i < Cfishes; i++){
            if (this.pos.getDist(fishes[i].pos) < sharkS * sharkS){
                fishes[i].die();
            }
            else if (this.pos.getDist(fishes[i].pos) < this.vision){
                nearestfish.push(fishes[i].pos);
                if (this.pos.getDist(fishes[i].pos) < nearestDist){
                    nearestDist = this.pos.getDist(fishes[i].pos);
                    nearest = nearestfish.length - 1;
                }
                found = true;
            }
        }
        if (found){
            this.sprint = true;
            this.goTo(nearestfish[nearest]);
        }
        else if (!this.travelling){
            this.sprint = false;
            /*if (this.pos.getDist(center) > 100 * 100){
                this.goTo(new Vector(height / 2, width / 2));
            }*/
        }
        return found;
    }
}