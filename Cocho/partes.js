class Carretera{

    constructor(transitable, direccion){
        this.transitable = transitable;
        this.up = false;
        this.left = false;
        this.right = false;
        this.down = false;
        this.direccion = direccion;
    }
    setUp(){
        this.up = true;
    }
    setDown(){
        this.down = true;
    }
    setLeft(){
        this.left = true;
    }
    setRight(){
        this.right = true;
    }
    isFalse(){
        if (this.up == false && this.left == false && this.down == false && this.right == false){
            this.transitable = false;
        }
    }
    Comprove(){
        let semaforo = 0;
        if (this.up){
            semaforo++;
        }
        if (this.left){
            semaforo++;
        }
        if (this.right){
            semaforo++;
        }
        if (this.down){
            semaforo++;
        }
        if (semaforo >= 3 && Math.random() > .9){
            this.semaforo = new Semaforo();
        addsemaforos(this.semaforo);
        }
        this.isFalse();
    }
}

class TesterTile extends Carretera{
    constructor(transitable){
        super(transitable, [0,0,0,0]);
    }

    followDirection(){
        return this.direction;
    }

}

class Semaforo{
    constructor(){
        this.interval = Math.floor(50 + Math.random() * 300);
        this.pass = false;
        this.actual = 0;
    }
    changeMode(){
        if (this.actual >= this.interval){
            this.pass = !this.pass;
            this.actual = 0;
        }
        else{
            this.actual++;
        }
    }
}
let int2 = setInterval(function(){
    semaforos.forEach(s => {
        s.changeMode();
    }, 100);
})
let semaforos = [];
function addsemaforos(s){
    semaforos.push(s);
}