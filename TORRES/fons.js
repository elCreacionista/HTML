let canvas = document.querySelector("#c1");
let ctx = canvas.getContext("2d");
canvas.height = 800;
canvas.width = 1600;
canvas.style.height = "500px";
canvas.style.width = "1000px";
ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0,0,1600,800);
let mont = new Mont(300,450, .5, 2);

function stop(){
    clearInterval(inter);
}
let inter = setInterval(dostuff, 1);
let monts = [];
for (let i = 0; i < 20; i++){
    monts[i] = createmont(i);
}
function dostuff(){
    ctx.drawImage(canvas, 1, 0);
for (let i = 0; i < monts.length; i++){
        if (!monts[i].finished){
            monts[i].update();
            drawmont();
        }
        else{
            monts[i] = createmont(i);
        }
    }
}
function createmont(i){
    i = monts.length - i
    let x = i / monts.length;
    return new Mont((Math.random()* 200) * x, (Math.random()*500) * x, Math.random()*2, Math.random()*2);

}

function drawmont(){

    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, 0, 1, 800);
    for (let i = 0; i < monts.length; i++){
        ctx.fillStyle = "rgb(0,0," + ( (i * (255 / monts.length))) + ")";
        ctx.fillRect(0, 800 - monts[i].actualheight, 1, monts[i].actualheight);
    }
}
