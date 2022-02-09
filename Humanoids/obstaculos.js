class obstaculo{
    constructor(x, y, h, w, id){
        this.position = [x,y];
        this.sizex = h;
        this.sizey = w;
        this.id = id;
        this.DOM = document.querySelector("#shape" + id);
        //this.DOM.style.backgroundColor = `black`;
        this.DOM.style.height = this.sizex + "px";
        this.DOM.style.width = this.sizey + "px";
        this.DOM.style.top = this.position[0] + "px";
        this.DOM.style.left = this.position[1] + "px";
        
    }

    istouching(shape){
        let contact1 = false;
        let contact2 = false;

        if (shape.position[0] >= this.position[0] && shape.position[0] <= this.position[0] + shape.sizex + this.sizey){
            contact1 = true;
        }
        if (shape.position[1] >= this.position[1] && shape.position[1] <= this.position[1] + this.sizey + shape.sizey){
            contact2 = true;
        }
        return (contact1 == true) && (contact2 == true);
    }

}