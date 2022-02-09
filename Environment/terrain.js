const staticsDOM = document.querySelector("#statics");
const vistaDOM = document.querySelector("#vista");
const world = document.querySelector("#mundo");

let string = " ";
let chunks = [];


function genTerrain(){
    let total = 0;
    let higher = 0.1;
    for(let i = 0; i < 10; i++){
        chunks[i] = [];
        for(let j = 0; j < 10; j++){
            chunks[i][j] = new Chunk(i,j);
            string += `<div class = '${chunks[i][j].name} id = 'chunk${i + "" + j}'>${chunks[i][j].availability.toFixed(2)}</div>`;
            total += chunks[i][j].availability;
            if (chunks[i][j].availability > higher){ higher = chunks[i][j].availability;}
        }
    }
    let average = total / 100;
    document.querySelector("#average").innerHTML = "Average: " + average + "<br> Higher: " + higher;
    world.innerHTML = string;
    string = "";
}

class Chunk{

    constructor(i, j){
        this.x = i;
        this.y = j;
        if (i == 0 || j == 0 || i == 9 || j == 9){
            this.water = 1;
            this.salt = Math.random()* 0.7;
            this.mountains = Math.random()* 0.3;
        }
        else{
            this.water = Math.random();
            this.mountains = Math.random();
            this.salt = this.water * this.mountains;
        }
        this.capacity = 1;
        this.waste = 0;
        this.availability = this.water * (1 - this.mountains) * (1 - this.salt) * (1 - this.waste);

        if (this.mountains > 0.7){
            this.name = "chmountain";
        } else if(this.water > 0.7){
            this.name = "chwater";
        } else {
            this.name = "ch";
        }

    }
    recalculate(){
       this.availability = this.water * (1 - this.mountains) * (1 - this.salt) * (1 - this.waste);
       if (this.mountains > 0.7){
           this.name = "chmountain";
       } else if(this.water > 0.7){
           this.name = "chwater";
       } else {
           this.name = "ch";
       }
    }

}

function recalculateAv(){
    let total = 0;
    let higher = 0.1;
    let string = "";
        for (let i = 0 ; i < 10; i++){
            for (let j = 0 ; j < 10;j++){
                chunks[i][j].recalculate();
                string += `<div class = '${chunks[i][j].name} id = 'chunk${i + "" + j}'>${chunks[i][j].water.toFixed(2) + "<br>" + chunks[i][j].waste.toFixed(2)}</div>`;
                total += chunks[i][j].availability;
                if (chunks[i][j].availability > higher){ higher = chunks[i][j].availability;}
            }
        }
        let average = total / 100;
        document.querySelector("#average").innerHTML = "Average: " + average + "<br> Higher: " + higher;
        world.innerHTML = string;
    }
genTerrain();