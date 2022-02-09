const MARBELSIZE = 30;
const FRICTION = 0.8;
class human{
    constructor(id){
        this.position = [Math.random()*500,Math.random()*500];
        this.velocity = [Math.random()*-10,(Math.random()*30) - 15];
        this.gravity = [1,0];
        this.id = id;
        this.sizex = (Math.random()*50) + 5;
        this.sizey = this.sizex;
        this.bounciness = (Math.random()*0.3) + 0.6;
        this.DOM = document.querySelector("#human" + id);
        this.DOM.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255} )`;
        this.DOM.style.height = this.sizex + "px";
        this.DOM.style.width = this.sizey + "px";
    }
    move(){
        this.bounce();
        for (let i = 0; i < 2; i++){
            this.position[i] += this.velocity[i];
            this.velocity[i] += this.gravity[i];
        }
        this.DOM.style.top = this.position[0] + "px";
        this.DOM.style.left = this.position[1] + "px";
    }
    bounce(){
        if (this.position[0] >= 620 - this.sizex) {
            this.position[0] = 620 - this.sizex;
            this.velocity[0] = -this.velocity[0] *  this.bounciness * FRICTION;
        }
        if (this.position[0] <=  this.sizex) {
            this.position[0] = this.sizex;
            this.velocity[0] = -this.velocity[0] *  this.bounciness * FRICTION;
        }
        if (this.position[1] >= 890 - this.sizey) {
            this.position[1] = 890 - this.sizey;
            this.velocity[1] = -this.velocity[1] *  this.bounciness * FRICTION;
        }
        if (this.position[1] < this.sizey) {
            this.position[1] =  this.sizey;
            this.velocity[1] = -this.velocity[1] *  this.bounciness * FRICTION;
        }
        /* LOS IMPACTOS NO FUNCIONAN Y NO SE PORQUE*/ 
        let array = Object.assign(humann);
        for (let i = 0 ; i < SIZEH + SIZEC; i++){
            if (array[i] === this) continue;
            if (this.calculatephisics(this, array[i])){
                this.velocity[0] = (this.velocity[0] + array[i].velocity[0]) * this.bounciness * FRICTION;
                this.velocity[1] = (this.velocity[1] + array[i].velocity[1]) * this.bounciness * FRICTION;
            }
        }
    }
    calculatephisics(human1, human2){
        let contact1 = false;
        let contact2 = false;
         if (human1.position[0] >= human2.position[0] && human1.position[0] <= human2.position[0] + human2.sizex + human1.sizey){
             contact1 = true;
         }
         if (human1.position[1] >= human2.position[1] && human1.position[1] <= human2.position[1] + human2.sizey + human1.sizey){
             contact2 = true;
         
        }
        return (contact1 == true) && (contact2 == true)
    }
}
