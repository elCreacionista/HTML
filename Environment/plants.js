class Plant{
    constructor(father){
        if (father != null){
            this.adaptation = father.adaptation;
            this.size = 10;
            this.acuatic = father.acuatic;
            this.sporessize = father.sporessize;

            this.chunkx = Math.floor((father.chunkx + Math.random()*3) - 1);
            if (this.chunkx >= 10) this.chunkx = 9;
            else if (this.chunkx <= 0) this.chunkx = 0;
            this.posx = father.posx + (Math.random()*0.5) - 0.25;

            this.chunky = Math.floor((father.chunky + Math.random()*3) - 1);
            if (this.chunky >= 10) this.chunky = 9;
            else if (this.chunky <= 0) this.chunky = 0;
            this.posy = father.posy + (Math.random()*0.5) - 0.25;

            this.thirst = father.thirst;
            this.waterconsumed = 0;
            this.alive = true;
        } else{
            this.adaptation = Math.random();
            this.size = Math.random()* 10;
            this.acuatic = Math.random() > 0.5;
            this.sporessize = (Math.random()* 0.5) + 0.1;
            this.chunkx = Math.floor(Math.random()*10);
            this.chunky = Math.floor(Math.random()*10);
            this.posx = Math.random();
            this.posy = Math.random();
            this.thirst = (Math.random()* 0.3) + 0.05;
            this.waterconsumed = 0;
            this.alive = true;
        }
    }
    live(){
        if (chunks[this.chunkx][this.chunky].water > this.size * 0.01 && chunks[this.chunkx][this.chunky].water - this.thirst > 0){
            this.size++;
            chunks[this.chunkx][this.chunky].water -= this.thirst;
            this.waterconsumed += this.thirst;
        }else{
        this.size --;
        if (this.waterconsumed > 0.01){
            chunks[this.chunkx][this.chunky].waste += 0.01;
            this.waterconsumed -= 0.01;
        }
        }
        if (this.size < 1){
            this.die()
        }
    }
    die(){
        chunks[this.chunkx][this.chunky].water += this.waterconsumed;
        this.alive = false;
    }
    spores(){
        let cant = Math.floor(Math.random() * 2);
        let newplants = [];
        for (let i = 0; i < cant + 1; i++){
            newplants[i] = new Plant(this);
            this.size = 0;
            this.die();
        }
        return newplants;
    }

}