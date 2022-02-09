class Vector{
    constructor(y, x){
        this.y = y;
        this.x = x;
    }
    add(vector){
        this.x += vector.x;
        this.y += vector.y;
    }
    upd(x,y){
        this.y = y;
        this.x = x;
    }
}