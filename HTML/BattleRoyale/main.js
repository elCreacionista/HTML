let canvas = document.querySelector("canvas");
canvas.height = 600;
canvas.width = 1200;
let ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.clearRect(0,0,1200,600);

let p = new Player("red");
let i = setInterval(Move, 20);

function Move(){
    clear();
    p.Update();
}


function clear(){
    ctx.fillStyle = "white";
    ctx.clearRect(0,0,1200,600);
}