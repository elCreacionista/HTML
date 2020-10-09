const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let tics = 0;

let height = 500;
let width = 1000;


canvas.height = height;
canvas.width = width;
let j1 = new Player(200,200,"pepito");

let sizeB = 5;
let balls = [];
for (let i = 0; i < sizeB; i++){
    balls[i] = createRandomBall(5, 3);
}


document.onkeydown = checkeys;
function checkeys(e){
    e = e || window.event;
    if (e.keyCode == '38'){
        j1.MoveUp();
    }
    else if (e.keyCode == '40'){
        j1.MoveDown();
    }
    else if (e.keyCode == '37'){
        j1.MoveLeft();
    }
    else if (e.keyCode == '39'){
        j1.MoveRight();
    }
    else if (e.keyCode == '188'){
        j1.Jump();
    }
    else if (e.keyCode == '189'){
        j1.Swap();
    } 
    else {
        console.log(e.keyCode);
    }
}


//let time = setInterval(update, 2);

function update(){
    clear();
    for (let i = 0; i < sizeB; i++){
        if (balls[i]){
            balls[i].Update();
            if (balls[i].pos.dist(j1.pos) < (j1.r + balls[i].r) * (j1.r + balls[i].r)){
                j1.impact(balls[i].r);
                balls[i].impact();
                sizeB++;
            }
            if ( balls[i].death){
                balls[i] = createRandomBall(2 + Math.floor(Math.random()* 3), 3);
            }
        }
        else{
            balls[i] = createRandomBall(2 + Math.floor(Math.random()* 3), 3);
        }
    }
    j1.Update();
    
    tics++;
    if (tics > 200){
        sizeB++;
        tics = 0;
    }
}

function clear(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 1000, 500);
}

function SetUp(h, w){
    height = h;
    width = w;
}


function gameOver(){
    console.log("game over");
}
