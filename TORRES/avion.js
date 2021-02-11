class Torre{
    constructor(y, sx, sy){
        this.posy1 = y;
        this.sizex1 = sx;
        this.sizey1 = sy;

        this.posy2 = y + (Math.random()* 50) + 50;
        this.sizex2 = sx - Math.random()* 50;
        this.sizey2 = sy + Math.random()* 50;
    }
    update(){
        this.posy1 += .2;
        this.posy2 += .2;
        if (this.broken){
            for(let i = 0; i < this.chunks.length; i++){
                this.chunks[i][1] -= .2;
                this.chunks[i][2] += (Math.random()*.5) - .25;
            }
            for(let i = 0; i < this.fires.length; i++){
                this.fires[i][0] += 5 - Math.random()*10;
                this.fires[i][1] += 5 - Math.random()*10;
                if (!this.fires[i][2] < 0 ){
                    this.fires[i][2] -= Math.random();
                }
                if (!this.fires[i][3] < 0){
                    this.fires[i][3] -= Math.random();
                }
            }
        }
    }
    break(posx, posy){
        this.broken = true;
        this.chunks = [];
        for(let i = 0; i < 10; i++){
            this.chunks[i] = [];
            this.chunks[i][0] = this.posy1 + Math.random()* this.sizey1;
            this.chunks[i][1] = Math.random()* this.sizex1;
            this.chunks[i][2] = Math.random()* this.sizey2;
        }
        this.fires = [];
        for(let i = 0; i < 40; i++){
            this.fires[i] = [];
            this.fires[i][0] = posy;
            this.fires[i][1] = posx;
            this.fires[i][2] = Math.random()*30;
            this.fires[i][3] = Math.random()*30;
        }
    }

}




class Avion{
    constructor(){
        this.posx = 600;
        this.posy = 1400;
    }
    update(){
        this.posy -= .5;
    }
    break(){
        this.posx = 900;
    }
}