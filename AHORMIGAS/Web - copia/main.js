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

for(let i = 0; i < 10; i++){
    ants[i] = new Ant(Math.random()* height, Math.random()* width);
}



let Game = setInterval(cosas, 1);

function cosas(){
    clear();
    for(let i = 0; i < ants.length; i++){
        ants[i].update();
        ants[i].drawant();
    }
    leavePheromones()
}



   let phermonones = []
   for (let i = 0; i < 100; i++){
    phermonones[i] = [];
       phermonones[i][0] = (height / 100)*i;
       phermonones[i][1] = (width / 100)*i;

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








function leavePheromones(){

    for(let i = 0; i < 100; i++){

        ctx.fillStyle = "rgb(100,255,100)";
        ctx.fillRect(phermonones[i][1], phermonones[i][0], 10, 10);
    }

}






function drawnest(){
    ctx.fillStyle = "rgb(100,100,100)";
    ctx.fillRect(95, 95, 10, 10);
}
function drawrocks(){
    ctx.fillStyle = "rgb(0,150,0)";
    ctx.fillRect(1050, 400, 50, 73);
}
function clear(){
    ctx.fillStyle = "rgb(0,0,150)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "rgb(0,255,0)";
    ctx.fillRect(20, 20, width - 40, height - 40);
    drawrocks();
    drawnest();
}