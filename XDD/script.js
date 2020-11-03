let Height = 600;
let Width = 1200;
let cantStars = 500;
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
canvas.height = Height;
canvas.width = Width;
ctx.fillStyle = "black";
ctx.fillRect(0,0,1200,600);
let Tails = [];
for (let i = 0; i < cantStars; i++){
    let x = Math.random()*Width;
    let y = Math.random()*Height;
    Tails[i] = new Tail(new Point(x,y));
}
console.log(Tails)
let interval = setInterval(function(){
    for (let i = 0; i < cantStars; i++){
        Tails[i].update();
        ControlTails();
    }
}, 1);


function ControlTails(){
    for (let i = 0; i < cantStars; i++){
        if (Tails[i].isOnRange()){    
            let x = 400 + (Math.random()*400);
            let y = 200 + (Math.random()*200);
            Tails[i] = new Tail(new Point(x,y));
        }
    }
}
