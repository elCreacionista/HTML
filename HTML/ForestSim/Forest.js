class Forest{
    constructor(){
        this.rabbits = [new Rabit([500, 80, 3, 90, 300]), new Rabit([500, 50, 1, 80, 400]), new Rabit([600, 120, 5, 100, 400]), new Rabit([600, 90, 3, 100, 400])];
        this.dom = [];
        this.iterations = 0;
        this.dom[0] = document.querySelector("#others");
        this.dom[1] = document.querySelector("#adultsnchilds");
        this.dom[2] = document.querySelector("#statics");
    }
    update(){
        for (let rabbit of this.rabbits){
            rabbit.passTime();
        }
        console.log(this.rabbits.length);

        this.rabbits.sort(function(a, b){return parseInt(a.time) - parseInt(b.time);});
        while(this.rabbits.length > 0 && !this.rabbits[this.rabbits.length - 1].alive){
            this.rabbits.pop();
        }
        this.updateDOM();
        this.iterations++;
    }



    updateDOM(){
        let string = "";
        let contador = 0;
        let adults = 0;
        let nonadults = 0;
        for (let rabbit of this.rabbits){
            if (rabbit.adult){adults++;}
            else {nonadults++;}
            //string += ` Conejo numero: ${contador} está en el dia ${rabbit.time} tendra ${rabbit.litter} conejos el dia ${rabbit.daypregnacy} <br>`
        }
        this.dom[0].innerHTML = "DIA " + this.iterations;
        this.dom[1].innerHTML = "Adults: " + adults + " Non Adults: " + nonadults;
        this.dom[2].innerHTML = "Cantidad de conejos: " + this.rabbits.length;
    }
}