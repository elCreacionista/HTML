class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    update(x, y){
        this.x = x;
        this.y = y;
    }
    sum(vector){
        this.x += vector.x;
        this.y += vector.y;
    }
    getMed(vectors){
        let vector = new Vector(vectors[0].x, vectors[0].y);
        for (let i = 1; i < vectors.length; i++){
            vector.sum(vectors[i]);
        }
        if (vectors.length > 0){
            vector.x /= vectors.length;
            vector.y /= vectors.length;
        }
        else {return null}
        return vector;
    }

    getDir(vect, v){
        



    }


    getDist(position){
        let distx = 0;
        let disty = 0;
        if (this.x > position.x){
            distx = this.x - position.x;
        } else{
            distx = position.x - this.x;
        }
        if (this.y > position.y){
            disty = this.y - position.y;
        } else{
            disty = position.y - this.y;
        }
        return distx * distx  + disty * disty;
    }
    setMax(v){
        let x = this.x;
        let y = this.y;
        if (this.x < 0){
            this.x *= -1;
        }
        if (this.y < 0){
            this.y *= -1;
        }
        let sum = this.x + this.y;
        if (sum > v){
            let maxS = sum / v;
            this.x /= maxS;
            this.y /= maxS;
        }
        if (x < 0){
            this.x *= -1;
        }
        if (y < 0){
            this.y *= -1;
        }
    }
}

function randomPoint(limitx, limity){

    let v = new Vector(Math.random() * limitx, Math.random() * limity);
    return v;
}

function randomVector(val){
    let v = new Vector((Math.random() * 100) - 50, (Math.random() * 100) - 50);
    v.setMax(val);
    return Object.assign(v);
}   