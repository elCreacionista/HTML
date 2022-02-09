const Nislas = 5;
let espacio = 100;
const islas = [];
const canvas = document.querySelector("#canvas");

canvas.width = 1200;
canvas.height = 700;
for (let i = 0; i < Nislas; i++){
    //createIsland(10 + Math.random()*100);
    createIsland(3);

}



let ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(100,100,255)";
ctx.fillRect(0, 0, 1200, 700);

SetCanvas();

let mapa = new Mapa(islas);
console.log(mapa)
mapa.draw();





console.log({islas});
function createIsland(t){
    let puntos = [];
    
    let point = [Math.floor(Math.random() * 1200), Math.floor(Math.random() * 700)];
    //let point = [600, 350];
    let iterations = 10000;
    while (true){
        newP = [point[0], point[1]];
        newP[0] = point[0] + Math.floor((Math.random()*espacio) - Math.floor(espacio/2));
        newP[1] = point[1] + Math.floor((Math.random()*espacio) - Math.floor(espacio/2));/*
        switch(Math.floor(Math.random()*4)){
            case 0: newP[0] = point[0] + Math.floor(Math.random()*espacio);break;
            case 1: newP[0] = point[0] - Math.floor(Math.random()*espacio);break;
            case 2: newP[1] = point[1] + Math.floor(Math.random()*espacio);break;
            case 3: newP[1] = point[1] - Math.floor(Math.random()*espacio);break;
        }*/
        if (addEnPuntos(puntos,newP) && borders(newP)){
        puntos.push(newP);
        point = newP;
        }

        if (puntos.length >= t || iterations < 0){
            break;
        }
        iterations--;
    }
    islas.push(puntos);
}
function borders(punto){
    if (punto[0] > 2 && punto[0] < 1198 && punto[1] > 2 && punto[1] < 698){
        return true;
    }
    return false;
}
function addEnPuntos(puntos,punto){
    for (let i = 0; i < puntos.length; i++){
        if (puntos[i][0] === punto[0] && puntos[i][1] === punto[1]){
            return false;
        }
    }
    return true;
}


function SeetCanvas(){
    
    let ctx = canvas.getContext("2d");
    for (let i = 0; i < islas.length; i++){
        for (let j = 0; j < islas[i].length; j++){
            for (let k = 0; k < islas[i].length; k++){
                ctx.moveTo(islas[i][j][0], islas[i][j][1]);
                if (islas[i][j] !== islas[i][k]){
                        ctx.lineTo(islas[i][k][0], islas[i][k][1]);
                        ctx.stroke();
                }
            }   
        }   
    }   
}

function SetCanvas(){
    for (let i = 0; i < islas.length; i++){
        let islandCenter = calculateCenter(islas[i]);
        for (let j = 0; j < islas[i].length; j++){
            let dist = getClosest(islas[i][j], islas[i]);
            console.log(dist);
            if (dist <= 100){
                ctx.fillStyle = "#000000";
                ctx.fillRect(islas[i][j][0] - 2, islas[i][j][1] - 2, 5, 5);
            }
            else if (dist <= 1000){
                ctx.fillStyle = "rgb(100,200,20)";
            }
            else{
                ctx.fillStyle = "rgb(200,200,20)";
            }
            
            ctx.fillRect(islas[i][j][0] - 2, islas[i][j][1] - 2, 5, 5);
                ctx.font = "20px Arial";
                ctx.fillText(dist, islas[i][j][0] + 2, islas[i][j][1] - 2);
            /*ctx.moveTo(islas[i][j][0], islas[i][j][1]);
            ctx.lineTo(islas[i][j + 1][0], islas[i][j + 1][1]);
            ctx.stroke();*/
        }
        
        /*ctx.fillStyle = "#000000";
        ctx.fillRect(islandCenter[0] - 10, islandCenter[1] - 10, 20,20);*/
    }
}