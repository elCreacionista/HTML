let canvasj = document.querySelector("#c2");
let ctxj = canvasj.getContext("2d");
canvasj.height = 800;
canvasj.width = 1600;
canvasj.style.height = "500px";
canvasj.style.width = "1000px";


let avion = new Avion();
let torre = new Torre(0,400,50);


let done = false;
let juego = setInterval(game, 1);
function game(){
    clear();
    drawavion();
    drawTorre();
    avion.update();
    torre.update();
    if (!done){
        crash();
    }
}


function crash(){
    if (avion.posy <= torre.posy2 + torre.sizey2){
        torre.break(avion.posx, avion.posy);
        avion.break();
        done = true;
    }

}



function clear(){
    ctxj.clearRect(0,0,1600,800);
}
function drawavion(){
    ctxj.fillStyle = "rgb(255,255,255)";
    ctxj.fillRect(avion.posy,avion.posx,20,10);
}
function drawTorre(){

    if (!torre.broken){
        ctxj.fillStyle = "rgb(255,255,255)";
        ctxj.fillRect(torre.posy1, 800 - torre.sizex1,torre.sizey1,torre.sizex1);
        ctxj.fillStyle = "rgb(255,255,255)";
        ctxj.fillRect(torre.posy2, 800 - torre.sizex2,torre.sizey2,torre.sizex2);
    }
    else{
        for(let i = 0; i < torre.chunks.length; i++){
            ctxj.fillStyle = "rgb(255,255,255)";
            ctxj.fillRect(torre.chunks[i][0], 800 - torre.chunks[i][1],torre.chunks[i][2],torre.chunks[i][1]);
        }
        for(let i = 0; i < torre.fires.length; i++){
            ctxj.fillStyle = "rgb(255,0,0)";
            ctxj.fillRect(torre.fires[i][0], torre.fires[i][1],torre.fires[i][2],torre.fires[i][3]);
        }
    }
}