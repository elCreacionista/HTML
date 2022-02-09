class Wind{

    constructor(){
        this.fishArray = [];
        this.cantFishes = 500;
        for (let i = 0; i < this.cantFishes; i++){
            this.fishArray[i] = new Fish(400,400,2,null);
            this.fishArray[i].setFish(main);
        }
        this.size = 80;
        this.iterations = 0;
        this.map = [];
        for (let i = 0; i < 10; i++){
            this.map[i] = [];
            for (let j = 0; j < 10; j++){
                this.map[i][j] = {
                    vector : randomVector(10),
                    position : new Vector(i * this.size, j * this.size)
                };
                this.createDom(this.map[i][j]);
            }
        }
    }
    updateMap(){
        for (let i = 0; i < 10; i++){
            for (let j = 0; j < 10; j++){
                let vector = randomVector(10);
                this.map[i][j].vector.sum(vector);
                this.map[i][j].vector.setMax(2);
                this.updateCell(this.map[i][j]);
            }
        }
    }
    updateCell(cell){
        cell.dom.innerHTML = (cell.vector.x).toFixed(2) + " " + (cell.vector.y).toFixed(2);
        cell.dom.style.top = cell.position.x + "px";
        cell.dom.style.left = cell.position.y + "px";
    }
    createDom(cell){
        cell.dom = document.createElement("div");
        cell.dom.classList.add("cuadrado");
        this.updateCell(cell);
        main.appendChild(cell.dom);
    }
    getCell(x,y){
            let Nx = parseInt(x / this.size);
            let Ny = parseInt(y / this.size);
        if (Nx > 0 && Ny > 0){
            return this.map[Nx][Ny];
        }
        else {return this.map[0][0];}
    }
    update(){
        this.iterations++;
        if (this.iterations >= 200){
            this.updateMap();
            this.iterations = 0;
        }
        for (let fish of this.fishArray){
            fish.comproveBorders();
            let fishCell = this.getCell(fish.pos.x, fish.pos.y);
            if (fishCell != undefined){
                fish.vel.sum(fishCell.vector);
                
            }

            let vector = new Vector(0,0);
            let found = false;
            for (let other of this.fishArray){
                if (other == undefined){break;}
                if (other != fish){
                    if (fish.pos.getDist(other.pos) < 3 * 3){
                        vector.sum(fish.goOut(other.pos));
                        found = true;
                    }
                }
            }
            if (found){
                fish.vel.sum(vector);
            }
            fish.vel.setMax(1);
            fish.pos.sum(fish.vel);
            fish.dom.style.top = fish.pos.x - fishS + "px";
            fish.dom.style.left = fish.pos.y - fishS + "px";
        }
    }
}
function otherfunction(){
    wind = new Wind();
    console.log(wind.map);
    console.log(wind);
    main.style.display = "block";
    let Intervalo = setInterval(function(){wind.update();}, 20);
}