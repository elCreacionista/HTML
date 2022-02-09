class Ant{

    constructor(nestx, nesty, h, w){
        this.posx = 200 + Math.random()*h;
        this.posy = 200 + Math.random()*w;
        this.velx = 0;
        this.vely = 0;

        this.dirx = 0;
        this.diry = 0;
        
        this.nestx = nestx;
        this.nesty = nesty;

        this.size = 10;
        this.halfsize = this.size / 2;
        this.maxvel = 3;
        this.variability = .1;
        this.variability2 = .9;
        this.vision = 2;
        this.visioncapacity = 50;

        this.hasfood = false;
        this.fireballs = [];
        
        console.log( ctx.getImageData(-1,-1, 1, 1).data);

    }        
    fireball(px, py, dx, dy){
        let f = {};
        f.size = 10;
        f.posx = px; 
        f.posy = py;
        f.dirx = dx;
        f.diry = dy;
        return f;
        }
    atack(){
        this.fireballs.push(this.fireball(this.posx, this.posy, this.dirx + this.velx, this.diry + this.vely))
    }
    updatef(){
        for(let i = 0; i < this.fireballs.length; i++){
            let f = this.fireballs[i];
            f.posx += f.dirx;
            f.posy += f.diry;
            f.size -= Math.random() * 0.4;
            if (f.size <= 0){

                this.fireballs.shift();
            }
        }
    }

    update(){
        
        this.logics();
        this.posy += this.vely;
        this.posx += this.velx;

        /*if (this.hasfood){
            this.gohome();
            this.leavePheromones("food");
        }*/

        this.randDirection();
        this.watchfront();
        this.updatef();
    }

    leavePheromones(type){

        let randomvaluex = (Math.random()* 30) - 15;
        let randomvaluey = (Math.random()* 30) - 15;

        ctx.fillStyle = "rgb(10,255,10)";
        ctx.fillRect(randomvaluey, randomvaluex, 1, 1);


    }
    gohome(){
        this.goto(this.nestx, this.nesty);
    }
    goto(px, py){
        
        let adx = (this.posx * this.posx) + (this.dirx * this.dirx);
        let ady = (this.posy * this.posy) + (this.diry * this.diry);
        let apx = px * px;
        let apy = py * py;



    }

    watchfront(){

        let vx;
        let vy;

        let mx = this.dirx;
        let my = this.diry;
        while((mx * mx)  < this.halfsize * this.halfsize){
            mx *= 1.1;
            my *= 1.1;
        }
        let px = this.posx + mx;
        let py = this.posy + my;

        if (this.vely > 0){
            vy = 1;
        }
        else{
            vy = -1;
        }
        if (this.velx > 0){
            vx = 1;
        }
        else{
            vx = -1;
        }


        let front;
        let phcon = 0;
        let water = false;

        this.variability = .1;
        this.variability2 = .9;


        let iterations = this.visioncapacity;
        for (let i = 0; i < iterations; i++){
            let x = Math.floor(mx * i);
            let y = Math.floor(my * i);
            front = ctx.getImageData(py + y, px + x, 1, 1).data;

            if(front[0] == 0 && front[1] == 0 && front[2] == 254){
                iterations++;
                continue;
            }

            /** VER ATAQUES ENEMIGOS      "rgb(200,0,0)"  */
            if (front[0] == 200 && front[1] == 0 && front[2] == 0 ){
                this.variability = .1;
                this.variability2 = .5;
                let d = this.visioncapacity / 1;
                let ad = i / 1;
                console.log("FUEGO");
                if (i == 0){
                    console.log("MORI? ")
                    this.hasfood = false;
                }
                this.incrementvel();
                return;
            }


            /** NEST */
            if (front[0] == 100 && front[1] == 100 && front[2] == 100 && this.hasfood){
                this.variability = .001;
                this.variability2 = 1;
                let d = this.visioncapacity / 1;
                let ad = i / 1;
                console.log("CASAAAAA")
                this.incrementvel();
                if (i == 3){
                    console.log("LETRS GO ")
                    this.hasfood = false;
                }
                return;
            }

            /** PHEROMONNES         rgb(100,255,100)    */
            if (front[0] == 100 && front[1] == 255 && front[2] == 100 /*&& !this.hasfood*/){
                phcon++;
                let d = this.visioncapacity / 1;
                let ad = i / 1;
                if (ad / d == 0){
                    console.log("VAYA PESTAZO A HORMIGA")
                }
                console.log("HUELO ALGO");
                //this.reducevel();

                this.variability = .01;
                this.variability2 = .7;
                //this.variability2 = (1 - (phcon / 40)) * 1.1;
                    
            }

            /**LEAVES */
            if (front[0] == 0 && front[1] == 150 && front[2] == 0 && !this.hasfood){
                this.variability = .01;
                this.variability2 = 1;
                let d = this.visioncapacity / 1;
                let ad = i / 1;
                this.reducevel(ad/d);
                console.log("HOJAAS" + front)
                if (i == 3){
                    console.log("ONE MORE FOOD LETRS GO NEST")
                    this.hasfood = true;
                }
                return;
            }

            /**WATERT */
            if (front[0] == 0 && front[1] == 0 && front[2] == 150){
                this.variability = .1;
                this.variability2 = 0;
                let d = this.visioncapacity / 1;
                let ad = i / 1;
                console.log("AWITAAAAAAAa")
                water = true;
                this.reducevel(ad / d);
                return;
            }

            /**IN THEORY ANOTHER ANT */
            if (front[0] == 1 && front[1] == 1 && front[2] == 1){
                this.variability = .01;
                this.variability2 = 1;
                let d = this.visioncapacity / 1;
                let ad = i / 1;
                if (ad/d == 0){
                    this.incrementvel();
                } 
                else{
                this.reducevel(ad/d);
                }
                console.log("VEO ORMIGAS");
                this.atack();
                return;
            }
            this.drawtrace(py + y, px + x, "rgb(0,0,254)");
        }

        mx = this.dirx;
        my = this.diry * -1;

        for (let i = 0; i < this.visioncapacity; i++){
            let x = Math.floor(mx * i);
            let y = Math.floor(my * i);
            front = ctx.getImageData(py + y, px + x, 1, 1).data;
        
            
            this.drawtrace(py + y, px + x, "red");
        }

        mx = this.dirx * -1;
        my = this.diry * -1;

        for (let i = 0; i < this.visioncapacity; i++){
            let x = Math.floor(mx * i);
            let y = Math.floor(my * i);
            front = ctx.getImageData(py + y, px + x, 1, 1).data;
        
            
            this.drawtrace(py + y, px + x, "red");
        }
        mx = this.dirx * -1;
        my = this.diry;

        for (let i = 0; i < this.visioncapacity; i++){
            let x = Math.floor(mx * i);
            let y = Math.floor(my * i);
            front = ctx.getImageData(py + y, px + x, 1, 1).data;

            
            this.drawtrace(py + y, px + x, "red");
        }
        if (phcon > 0){

            this.variability = .01;
            this.variability2 = phcon / this.visioncapacity;
            this.incrementvel();
            if (phcon > 20){
                
            console.log("phermono " + phcon);
            }

        }

    }

    drawtrace(py, px, color){

        ctx.fillStyle = color;
        ctx.fillRect(py, px, 1, 1);
    }

    randDirection(){
        if (Math.random() > .99){
            this.variability = Math.random();
        }

        if (Math.random() > this.variability2){
            this.vely += (Math.random() - .5) * this.variability;
        }

        if (Math.random() > this.variability2){
            this.velx +=  (Math.random() - .5) * this.variability;
        }
    }


    logics(){
        if (this.vely > 0){
            this.vely = Math.min(this.vely, this.maxvel);
        }
        else{
            this.vely = Math.max(this.vely, -this.maxvel);
        }

        if (this.velx > 0){
            this.velx = Math.min(this.velx, this.maxvel);
        }
        else{
            this.velx = Math.max(this.velx, -this.maxvel);
        }

        /*if (this.posx < 15){
            this.velx = -this.velx;
        }
        if (this.posx > height - 15){
            this.velx = -this.velx;
        }

        
        if (this.posy < 15){
            this.vely = -this.vely;
        }
        if (this.posy > width - 15){
            this.vely = -this.vely;
        }*/


        this.dirx = this.velx;
        this.diry = this.vely;

        this.updatedir(this.maxvel);

    }
    incrementvel(){
        if (this.velx == 0 && this.vely == 0) return;
        this.velx *= 1.1;
        this.vely *= 1.1;
        
    }
    reducevel(vel){

        if (this.velx == 0 && this.vely == 0) return;
        while (this.velx * this.velx + this.vely * this.vely > vel * vel){
            this.velx *= .9;
            this.vely *= .9;
        }
    }
    updatedir(vel){
        if (this.velx == 0 && this.vely == 0) return;
        while (this.dirx * this.dirx + this.diry * this.diry < vel * vel){
            this.dirx *= 1.1;
            this.diry *= 1.1;
        }
    }
    drawantf(){
        for(let i = 0; i < this.fireballs.length; i++){
            let f = this.fireballs[i];
            let hs = f.size / 2;
            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect(f.posy - hs, f.posx - hs, f.size, f.size);
        }
    }
    drawant(){
        this.drawantf();
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(this.posy - this.halfsize, this.posx - this.halfsize, this.size, this.size);
        if (this.hasfood){
            ctx.fillStyle = "rgb(0,50,0)";
            ctx.fillRect(this.posy - this.halfsize, this.posx - this.halfsize, 4, 4);
        }
    }

}