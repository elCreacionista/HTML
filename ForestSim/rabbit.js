class Rabit{
    constructor(dna){
        this.dna = dna;
        this.decodeDNA();
        this.time = 0;
        this.daypregnacy = 0;
        this.pregnate = false;
        this.childs = [];
        this.adult = false;
        this.alive = true;
    }

    passTime(){
        if (this.alive){
            this.time++;
            this.evaluateStatics();
        }
    }
    evaluateStatics(){
        if (this.time >= this.lifetime){
            this.die();
            return;
        }
        if (this.pregnate && this.time == this.daypregnacy){
            this.birth();
            this.pregnate = false;
        }
        if (!this.pregnate && this.adult && Math.random() < 0.1){
            this.daypregnacy = this.time + this.gestationtime;
            this.pregnate = true;
        }
        if (this.time >= this.childtime && this.time < this.adulttime){
            this.adult = true;
        }
        else {
            this.dault = false;
        }
    }

    die(){
        // REMOVE THIS RABIT FROM THE MAIN TAL
        this.alive = false;
    }
    birth(){
        // AÑADIR CONEJOS AL MAIN THING
        let child = [];
        for (let i = 0; i < this.litter; i++){
            forest.rabbits.push(new Rabit(this.encodeDNA()));
        }
    }

    decodeDNA(){
        this.lifetime = this.dna[0];
        this.gestationtime = this.dna[1];
        this.litter = this.dna[2];
        this.childtime = this.dna[3];
        this.adulttime = this.dna[4];
    }
    encodeDNA(){
        let dna = [];
        dna[0] = this.lifetime + Math.random() * 2 - 1;
        dna[1] = this.gestationtime;
        dna[2] = this.litter;
        dna[3] = this.childtime;
        dna[4] = this.adulttime;
        return dna;
    }
}