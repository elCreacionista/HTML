class Ant{

    constructor(nestx, nesty){
        this.posx = nestx;
        this.posy = nesty;
        this.velx = 0;
        this.vely = 0;

        this.dirx = 0;
        this.diry = 0;
        
        this.nestx = nestx;
        this.nesty = nesty;

        this.size = 10;
        this.halfsize = this.size / 2;
        this.maxvel = .9;
        this.variability = .2;
        this.variability2 = .9;
        this.vision = 2;
        this.visioncapacity = 40;

        this.hasfood = false;
    }

    update(){
        this.logics();
        this.posy += this.vely;
        this.posx += this.velx;

        if (this.hasfood){
            this.gohome();
            this.leavePheromones("food");
        }

        this.watchfront();
        this.randDirection();
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

        let px = this.posx;
        let py = this.posy;

        let mx = this.dirx;
        let my = this.diry;

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
        let data = ctx.getImageData(py + vy, px + vx, 1, 1).data;


        let front;
        let phcon = 0;
        let water = false;

        this.variability = .2;
        this.variability2 = .9;
        for (let i = 0; i < this.visioncapacity; i++){
            let x = Math.floor(mx * i);
            let y = Math.floor(my * i);
            front = ctx.getImageData(py + y, px + x, 1, 1).data;
            

            /** NEST */
            if (front[0] == 100 && front[1] == 100 && front[2] == 100 && this.hasfood){
                this.variability = .01;
                this.variability2 = 1;
                let d = this.visioncapacity / 1;
                let ad = i / 1;
                console.log("CASAAAAA")
                this.reducevel(ad/d);
                if (ad / d == 0){
                    console.log("LETRS GO ")
                    this.hasfood = false;
                }
                return;
            }

            /** PHEROMONNES */
            if (front[0] == 100 && front[1] == 255 && front[2] == 100 && this.hasfood){
                phcon++;
                let d = this.visioncapacity / 1;
                let ad = i / 1;
                if (ad / d == 0){
                    console.log("VAYA PESTAZO A HORMIGA")
                }
                this.velx *= this.maxvel * ((phcon / 40));
                this.vely *= this.maxvel * ((phcon / 40));

                this.variability = (1 - (phcon / 40)) * .1;
                    this.variability2 = ((phcon / 40)) * 1.1;
                    
            }

            /**LEAVES */
            if (front[0] == 0 && front[1] == 150 && front[2] == 0 && !this.hasfood){
                this.variability = .01;
                this.variability2 = 1;
                let d = this.visioncapacity / 1;
                let ad = i / 1;
                this.reducevel(ad/d);
                if (ad / d == 0){
                    console.log("ONE MORE FOOD LETRS GO NEST")
                    this.hasfood = true;
                }
                return;
            }

            /**WATERT */
            if (front[0] == 0 && front[1] == 0 && front[2] == 150){
                this.variability = .2;
                this.variability2 = .1;
                let d = this.visioncapacity / 1;
                let ad = i / 1;
                console.log("AWITAAAAAAAa")
                water = true;
                this.reducevel(ad / d);
                return;
            }

            /**IN THEORY ANOTHER ANT */
            if (front[0] == 0 && front[1] == 0 && front[2] == 0){
                this.variability = .01;
                this.variability2 = 1;
                let d = this.visioncapacity / 1;
                let ad = i / 1;
                this.reducevel(ad/d);
                console.log("VEO ORMIGAS")
                return;
            }
            this.drawtrace(py + y, px + x, "blue");
        }


        mx = this.dirx * 1.5;
        my = this.diry * .5;

    for (let i = 0; i < this.visioncapacity; i++){
        let x = Math.floor(mx * i);
        let y = Math.floor(my * i);
        front = ctx.getImageData(py + y, px + x, 1, 1).data;
    
        
        this.drawtrace(py + y, px + x, "red");
    }
    mx = this.dirx * .5;
    my = this.diry * 1.5;

for (let i = 0; i < this.visioncapacity; i++){
    let x = Math.floor(mx * i);
    let y = Math.floor(my * i);
    front = ctx.getImageData(py + y, px + x, 1, 1).data;

    
    this.drawtrace(py + y, px + x, "red");
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

        if (this.posx < 15){
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
        }


        this.dirx = this.velx;
        this.diry = this.vely;

        this.updatedir(this.maxvel);

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
    drawant(){
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(this.posy - this.halfsize, this.posx - this.halfsize, this.size, this.size);
        if (this.hasfood){
            ctx.fillStyle = "rgb(0,50,0)";
            ctx.fillRect(this.posy - this.halfsize, this.posx - this.halfsize, 4, 4);
        }
    }

}