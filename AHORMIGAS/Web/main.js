const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let tics = 0;

const height = 600;
const width = 1400;
canvas.height = height;
canvas.width = width;

const styleheight = 600;
const stylewidth = 1300;
canvas.style.height = styleheight + "px";
canvas.style.width = stylewidth + "px";

let ants = [];

for(let i = 0; i < 1; i++){
    ants[i] = new Ant(100, 100, height - 400, width - 400);
}



let Game = setInterval(cosas, 1);
function cosas(){
    clear();
    //leavePheromones();
    for(let i = 0; i < ants.length; i++){
        ants[i].drawant();
        ants[i].update();
    }
}



   /*let phermonones = []
   for (let i = 0; i < 100; i++){
        phermonones[i] = [];
        phermonones[i][0] = (height / 100)*i;
        phermonones[i][1] = (width / 100)*i;
        phermonones[i][2] = Math.random()*20;

   }
   for (let i = 100; i < 200; i++){
        phermonones[i] = [];
        phermonones[i][0] = Math.random()*height;
        phermonones[i][1] = Math.random()*width;
        phermonones[i][2] = Math.random()*20;

    }



function leavePheromones(){

    for(let i = 0; i < phermonones.length; i++){

        ctx.fillStyle = "rgb(100,255,100)";
        ctx.fillRect(phermonones[i][1], phermonones[i][0], phermonones[i][2], phermonones[i][2]);
    }

}*/
function drawnest(){
    ctx.fillStyle = "rgb(100,100,100)";
    ctx.fillRect(200, 160, 200, 40);


}
function drawrocks(){
    ctx.fillStyle = "rgb(0,150,0)";
    ctx.fillRect(1050, 400, 150, 73);
}
function clear(){
    ctx.fillStyle = "rgb(0,0,150)";
    ctx.fillRect(0, 0, width, height);
    
    ctx.fillStyle = "rgb(0,255,0)";
    ctx.fillRect(200, 200, width - 400, height - 400);
    drawrocks();
    drawnest();
}









//put this outside the event loop..

function draw(evt) {
    var pos = getMousePos(canvas, evt);

    ctx.fillStyle = "#000000";
    ctx.fillRect (pos.x, pos.y, 4, 4);
}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}