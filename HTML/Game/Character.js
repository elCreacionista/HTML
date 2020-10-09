class Face{
    constructor(id){
        this.id = id;
        this.setType(id);
    }
    setType(type){
        this.type = type;
    }
    setColor(){
        switch (this.type){
            case 0: this.color = "rgb(200, 50, 50)";
            case 1: this.color = "rgb(50, 200, 50)";
            case 2: this.color = "rgb(50, 50, 200)";
            case 3: this.color = "rgb(100, 100, 100)";
            case 4: this.color = "rgb(100, 150, 150)";
            case 5: this.color = "rgb(150, 150, 100)";
            case 6: this.color = "rgb(150, 100, 150)";
        }
    }
    setFaces(top,left,bottom,right){
        this.faces = [top,left,bottom,right];
    }
    Swap(arg){
        return this.faces[arg];
    }

}

class Cube{
    constructor(){
        this.faces = [];
        for(let i = 0; i < 6; i++){
            this.faces[i] = new Face(i);
        }
        this.faces[0].setFaces(1,2,3,4);
        this.faces[1].setFaces(0,2,4,5);
        this.faces[2].setFaces(0,1,3,5);
        this.faces[3].setFaces(0,2,4,5);
        this.faces[4].setFaces(0,1,3,5);
        this.faces[5].setFaces(1,2,3,4);
        this.actual = this.faces[0];
    }


    Swap(ac){
        this.actual = this.faces[Math.floor(Math.random()* 6)];
    }
}