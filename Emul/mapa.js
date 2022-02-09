class Mapa{
    
    constructor(islas){
        this.points = [];
        let count = 0;
        this.montes = [];
        this.alturas = [];
        this.playas = [];
        for (let i = 0; i < islas.length; i++){
            this.montes[i] = getMontes(islas[i]);//this.getDobleMontes(getMontes(islas[i]));
            this.alturas[i] = getAlturas(islas[i]);
            this.playas[i] = getPlayas(islas[i]);

            for (let j = 0; j < islas[i].length - 1; j++){
                this.points.push(islas[i][j]);
            }
        }
    let ctx = canvas.getContext("2d");
    
    }
    getDobleMontes(isla){
        let montes = [];
        for (let i = 0; i < isla.length; i++){
            let dist = getClosest(isla[i], isla);
            for (let m of isla){
                if (isla[i] !== m && getClosest(m, isla) === dist){
                    let found = false;
                    for (let j of montes){
                        if (j === [isla[i], m] ||j === [m, isla[i]]){
                            found = true;
                        }
                    }
                    if (!found){
                        montes.push([isla[i], m]);
                    }
                }
            }
        }
        return montes;

    }
    draw(){
        let ctx = canvas.getContext("2d");
            for (let i = 0; i < this.playas.length; i++){
                ctx.beginPath();
                if (this.playas[i].lenght === 0){
                    break;
                }
                    ctx.moveTo(this.playas[i][0][0], this.playas[i][0][1]);
                for (let j = 0; j < this.playas[i].length - 1; j++){
                    
                    ctx.lineTo(this.playas[i][j + 1][0], this.playas[i][j + 1][1]);
                }
                ctx.closePath();
                ctx.fillStyle = "rgb(200,200,20)";
                ctx.fill();
            }

            for (let i = 0; i < this.alturas.length; i++){
                ctx.beginPath();
                if (this.alturas[i].lenght == 0){
                    break;
                }
                    ctx.moveTo(this.alturas[i][0][0], this.alturas[i][0][1]);
                for (let j = 0; j < this.alturas[i].length - 1; j++){
                    
                    ctx.lineTo(this.alturas[i][j + 1][0], this.alturas[i][j + 1][1]);
                }
                ctx.closePath();
                ctx.fillStyle = "rgb(100,200,20)";
                ctx.fill();
            }

            for (let i = 0; i < this.montes.length; i++){
                
                if (this.montes[i].lenght == 0){
                    break;
                }
                for (let j = 0; j < this.montes[i].length - 1; j++){
                    /*
                    ctx.moveTo(this.montes[i][j][0][0], this.montes[i][j][0][1]);
                    ctx.lineTo(this.montes[i][j][1][1], this.montes[i][j][1][1]);
                    ctx.stroke();*/
                    ctx.fillStyle = "#000000";
                    ctx.fillRect(this.montes[i][j][0], this.montes[i][j][1], 10, 10);

                }
            }
        }
    
}