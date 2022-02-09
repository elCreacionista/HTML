class animationGenerator{
    constructor(){
        this.animationFish = [];
        this.dom = document.querySelector("#box");
    }
    setStatics(top, left, height, width){
        this.top = top;
        this.left = left;
        this.height = height;
        this.width = width;
        this.radius = height / 2;
        this.center = new Vector(this.height / 2, this.width / 2);
        this.setDom();
        this.setFishes();
        this.dom.style.display = "block";
    }
    stop(){
        this.fishesDissapear();
        let reducir = setInterval(function(){
            AG.height *= 0.8;
            AG.width *=  0.8;
            AG.setDom();
        }, 20)
        setTimeout(function(){
        AG.dom.style.display = "none";
        clearInterval(reducir);
        }, 500)
    }
    fishesDissapear(){
        for (let i = 0; i < 10; i++){
            this.animationFish[i].pos.x = -10000;
            this.animationFish[i].pos.y = -10000;
            this.moveFish(this.animationFish[i]);
        }
    }
    updateFishes(){
        for (let i = 0; i < 10; i++){
            if (i != 0){
                if (this.animationFish[i].pos.getDist(this.animationFish[i - 1].pos) > 40 * 40){
                    this.animationFish[i].goTo(this.animationFish[i - 1].pos);
                }
            }
                if (this.animationFish[i].pos.getDist(this.center) > this.radius * this.radius){
                    this.animationFish[i].goTo(randomPoint(this.height, this.width))
                }
                if (this.animationFish[i].pos.x <= 0){
                    this.animationFish[i].pos.x = 0;
                } else if (this.animationFish[i].pos.x >= this.animationFish[i].mapheight){
                    this.animationFish[i].pos.x = this.animationFish[i].mapheight;
                }
                if (this.animationFish[i].pos.y <= 0){
                    this.animationFish[i].pos.y = 0;
                } else if (this.animationFish[i].pos.y >= this.animationFish[i].mapwidth){
                    this.animationFish[i].pos.y = this.animationFish[i].mapwidth;
                }
            this.animationFish[i].vel.sum(randomVector(0.05));
            this.moveFish(this.animationFish[i]);
        }
    }
    moveFish(fish){
        fish.vel.setMax(fish.maxVelocity);
        fish.pos.sum(fish.vel);
        fish.dom.style.top = fish.pos.x - 12 + "px";
        fish.dom.style.left = fish.pos.y - 12 + "px";
    }

    setFishes(){
        for(let i = 0; i < 10; i++){
            this.animationFish[i] = new Fish(Math.random() * this.height, Math.random() * this.width,3,0);
            this.setAnimations(this.animationFish[i], i);
        }
    }
    setAnimations(fish, i){
        fish.dom = document.querySelector("#particle" + i);
        fish.mapheight = this.height;
        fish.mapwidth = this.width;
        fish.dom.style.top = fish.pos.x + "px";
        fish.dom.style.left = fish.pos.y + "px";
    }
    setDom(){
        this.dom.style.top = this.top - (this.height / 2) + "px";
        this.dom.style.left = this.left - (this.width / 2) + "px";
        this.dom.style.height = this.height + "px";
        this.dom.style.width = this.width + "px";
    }

}

let playing = false;
let animation;
let AG = new animationGenerator();
function setAnimation(x,y,h,w, time){
    if (!playing){
        AG.setStatics(x,y,h,w)
        playing = true;
        animation = setInterval(function(){AG.updateFishes();}, 15);
        setTimeout(function(){
            stopAnimation();
        } , time);
    }
}
function stopAnimation(){
    if (playing){
        clearInterval(animation);
        AG.stop();
        playing = false;
    }
}