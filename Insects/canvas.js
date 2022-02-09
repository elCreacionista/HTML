class Canvas{
    constructor(w, h, color){
        this.dom = document.querySelector("canvas");
        this.ctx = this.dom.getContext("2d");
        this.width = w;
        this.height = h;
        this.v = new Vector(w,h);
        this.bg = color;
        this.dom.width = w;
        this.dom.height = h;
        this.clear();
    }
    clear(){
        this.ctx.fillStyle = this.bg;
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        this.ctx.fillStyle = "rgb(0,200,0)";
        this.ctx.fillRect(0, this.height - 9, this.width, this.height);
    }
    write(text, v){
        this.ctx.font = "10px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(text, v.y + 10, v.x);
    }
    draw(vpos, vsize, color){
        
        this.ctx.fillStyle = color;
        this.ctx.fillRect(vpos.y, vpos.x, vsize.y, vsize.x);
    }
}