class MapTester{
    constructor(City){
        this.city = City;
        this.size = City.map.length;
        this.CreateCityAi();
        this.pos = [0, 0];
        console.log(this.CityAi);
    }
    
    /*
        let direc1 = i % 2 == 0 ? 1 : -1;
        let direc2 = j % 2 == 0 ? 1 : -1;
        let arr = [0,0,0,0];

        if (direc1 == 1){   arr[0] = 1;    }
        else{   arr[2] = 1;    }
        
        if (direc2 == 1){   arr[1] = 1; }
        else{   arr[3] = 1; }

        if (casilla.up){    arr[0] = 1; }
        if (casilla.left){  arr[1] = 1; }
        if (casilla.down){  arr[2] = 1; }
        if (casilla.right){ arr[3] = 1; }
    */

    drive(){
        


    }

    
    Borders(){
        if (this.pos[0] < 0){
            this.pos[0] = 0;
        }
        if (this.pos[0] > this.size - 1){
            this.pos[0] = this.size - 1;
        }
        
        if (this.pos[1] < 0){
            this.pos[1] = 0;
        }
        if (this.pos[1] > this.size - 1){
            this.pos[1] = this.size - 1;
        }
    }

    setCityAi(){
        for (let i = 0; i < this.index; i++){
            for (let j = 0; j < this.index; j++){
                if (this.CityAi[i][j].transitable){
                    if (j < this.index - 1 && this.CityAi[i][j + 1].transitable){
                        this.CityAi[i][j].setDown();
                    }
                    if (i < this.index - 1 && this.CityAi[i + 1][j].transitable){
                        this.CityAi[i][j].setRight();
                    }
                    
                    if (j > 0 && this.CityAi[i][j - 1].transitable){
                        this.CityAi[i][j].setUp();
                    }
                    if (i > 0 && this.CityAi[i - 1][j].transitable){
                        this.CityAi[i][j].setLeft();
                    }
                }
            }
        }
    }
    CreateCityAi(){
        this.CityAi = [];
        for (let i = 0; i < this.size; i++){
            this.CityAi[i] = [];
            for (let j = 0; j < this.size; j++){
                if (this.city.map[i][j].transitable){
                    this.CityAi[i][j] = new TesterTile(true);
                }
                else{
                    this.CityAi[i][j] = new TesterTile(false);

                }
            }
        }        
    }

}






class Vehicle{
    constructor(city){
        this.pos = [(dim * 10) + (dim / 2), (dim * 10) + (dim / 2)];
        this.acc = [0, 1];
        this.i = 4;
        this.city = city;
    }
    Move(){
        this.Borders();
        if (this.city.map[Math.floor(this.pos[0] / dim)] [Math.floor(this.pos[1] / dim)].transitable){
            if (this.CenterStreet() && this.getSemaforo()){
                return;
            }
        }
        if (this.CenterStreet()){
                this.ChangeDirection(this.Intersection(true));
            }
        this.pos[0] += this.acc[0];
        this.pos[1] += this.acc[1];
    }

    getSemaforo(){
        let casilla = this.city.map[Math.floor(this.pos[0] / dim)] [Math.floor(this.pos[1] / dim)];
        if (casilla.semaforo){
            return !casilla.semaforo.pass;
        }
        return false;
    }
    CenterStreet(){
        
        return (this.pos[0] % dim ) == dim / 2 && (this.pos[1] % dim )== dim / 2;
    }
    ChangeDirection(directions){
        let iter = 0;
        let i = 0;
        if (Math.random() < .7){
            i = this.i;
        }
        else{
            i = Math.floor(Math.random()*4);
        }
        while (iter++ < 100){
            if (directions[i] == 1){
                break;
            }
            i = Math.floor(Math.random()*4);
        }
        this.i = i;
        switch (i){
            case 0: this.acc = [0, -1];
            break;
            case 1: this.acc = [-1, 0];
            break;
            case 2: this.acc = [0, 1];
            break;
            case 3: this.acc = [1, 0];
            break;
            default: console.log("Something is wromg");
        }

    }
    Intersection(valor){
        
        let arr = [0,0,0,0];
        let casilla = this.city.map[Math.floor(this.pos[0] / dim)] [Math.floor(this.pos[1] / dim)];
        if (!valor){
                return casilla.direccion;
        }
        if (casilla.up){
            arr[0] = 1;
        }
        if (casilla.left){
            arr[1] = 1;
        }
        if (casilla.down){
            arr[2] = 1;
        }
        if (casilla.right){
            arr[3] = 1;
        }
        return arr;
    }
    Borders(){
        let dm = dim / 2
        if (this.pos[0] < dm){
            this.pos[0] = 500 - dm;
        }
        if (this.pos[0] > 500 - dm){
            this.pos[0] = dm;
        }
        
        if (this.pos[1] < dm){
            this.pos[1] = 500 - dm;
        }
        if (this.pos[1] > 500 - dm){
            this.pos[1] = dm;
        }
    }
}