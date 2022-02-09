class box{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.id = this.x + "" + this.y;
        this.dom = document.querySelector("#box" + this.id);
        this.number = 0;
        this.setPosition();
    }

    createNumber(){
        if (Math.random() > 0.5){
            this.number = 2;
        } else {
            this.number = 4;
        }
    }
    removeNumber(){
        this.number = 0;
    }
    addNumber(){
        this.number *= 2;
    }
    displayNumber(){
        if (this.number > 999){
            this.dom.style.fontSize = 40 + "px";
        }
        else {
            this.dom.style.fontSize = 50 + "px";
        }
        if (this.number == 0 ){
        this.dom.innerHTML = null;

        }else {
            this.dom.innerHTML = this.number;
        }
    }

    setPosition(){
        this.dom.style.top = this.x * 100 + "px";
        this.dom.style.left = this.y * 100 + "px";

    }
}
