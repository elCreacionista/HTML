let c = document.querySelector("canvas");
let ctx = c.getContext("2d");
c.height = 500;
c.width = 500;
let index = 25;
let dim = 500 / index;


let City = new Ciudad(index);

let Tester = new MapTester(City);


let vehicles = [];
for (let i = 0; i < 70; i++){
    vehicles[i] = new Vehicle(City);
}
                                            //let int = setInterval(move, 200);
/*function move(){
    drawCity();
    drawStreets();
    drawCar();
    for (let i = 0; i < vehicles.length; i++){
        vehicles[i].Move();
    }
}*/

function move(){
    drawCity();
    drawStreets();
    DrawMapTester();
    Tester.drive();
}


drawCity();
drawStreets();
function drawCity(){
    for (let i = 0; i < City.map.length; i++){
        for (let j = 0; j < City.map[i].length; j++){
            if (City.map[i][j].transitable){
                    ctx.fillStyle = "gray";
            }
            else{
                    ctx.fillStyle = "green";
            }    
        ctx.fillRect(i * dim,j * dim,dim,dim);
        }
    }
}
function drawStreets(){
    let med = dim / 2;
    for (let i = 0; i < index; i++){
        for (let j = 0; j < index; j++){
            if (City.map[i][j].up){
                ctx.fillStyle = "black";
                ctx.fillRect((i * dim) + med, (j * dim), 3, med + 3);
            }
            if (City.map[i][j].left){
                ctx.fillStyle = "black";
                ctx.fillRect((i * dim), (j * dim) + med, med + 3, 3);
            }
            if (City.map[i][j].right){
                ctx.fillStyle = "black";
                ctx.fillRect((i * dim) + med, (j * dim) + med, med, 3);
            }
            if (City.map[i][j].down){
                ctx.fillStyle = "black";
                ctx.fillRect((i * dim) + med, (j * dim) + med, 3, med);
            }
            
            if (City.map[i][j].semaforo){
                if (City.map[i][j].semaforo.pass){
                    ctx.fillStyle = "green";
                }
                else{
                    ctx.fillStyle = "red";

                }
                ctx.fillRect((i * dim) + (med / 2), (j * dim) + (med/ 2), 3, 3);
            }

        }
    }
    

}
function drawCar(){
    for (let i = 0; i < vehicles.length; i++){
    ctx.fillStyle = "rgb(200,200, " + i + ")";
    ctx.fillRect(vehicles[i].pos[0], vehicles[i].pos[1], 5, 5);
    }
}
function clear(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,500,500);
}
function Stop(){
    clearInterval(int);
}


DrawMapTester();

function DrawMapTester(){
    ctx.fillStyle = "Yellow";
    ctx.fillRect(Tester.pos[0] * dim,Tester.pos[1] * dim,dim,dim);
}








