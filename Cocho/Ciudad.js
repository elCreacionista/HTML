class Ciudad{
    constructor(index){
        this.index = index;
        this.setMap();
        this.setCity();
        this.setMap2();
    }
    setMap(){
        let map = [];
        for (let i = 0; i < this.index; i++){
            map[i] = [];
            for (let j = 0; j < this.index; j++){
                let direc1 = i % 2 == 0 ? 1 : -1;
                let direc2 = j % 2 == 0 ? 1 : -1;
                let arr = [0,0,0,0];
                if (direc1 == 1){
                    arr[0] = 1;
                }
                else{
                    arr[2] = 1;
                }
                
                if (direc2 == 1){
                    arr[1] = 1;
                }
                else{
                    arr[3] = 1;
                }

                if (Math.random() < .9){
                    map[i][j] = new Carretera(true, arr);
                }
                else {
                    map[i][j] = new Carretera(false, arr);
                }
            }
        }
        this.map = map;
    }
    setCity(){
        for (let i = 0; i < this.index; i++){
            for (let j = 0; j < this.index; j++){
                if (this.map[i][j].transitable){
                    if (j < this.index - 1 && this.map[i][j + 1].transitable){
                        this.map[i][j].setDown();
                    }
                    if (i < this.index - 1 && this.map[i + 1][j].transitable){
                        this.map[i][j].setRight();
                    }
                    
                    if (j > 0 && this.map[i][j - 1].transitable){
                        this.map[i][j].setUp();
                    }
                    if (i > 0 && this.map[i - 1][j].transitable){
                        this.map[i][j].setLeft();
                    }
                }
            }
        }
    }
    setMap2(){
        for (let i = 0; i < this.index; i++){
            for (let j = 0; j < this.index; j++){
                this.map[i][j].Comprove();
            }
        }
    }
}