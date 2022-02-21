const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let tics = 0;
const height = 800;
const width = 1900;

canvas.height = height;
canvas.width = width;

//DrawBorder(3);




/*let interval = setInterval(function(){
    DrawAll(10);
    cell.Update();
    cell.Draw(ctx)
    cell.Move();
    tics++
}, 1200)*/




function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

            /*layers, layersize, complication, inputs, outputs)*/
//let RN = new RedNeuronal(10,10,1,2,3);



function ConvertRGB(values){
    return `rgb(${values[0] % 255},${values[1] % 255},${values[2] % 255})`
}


function getColor(point){
        //console.log(ctx.getImageData(100, 100, 1, 1).data);
    let pixel = ctx.getImageData(point.x, point.y, 1, 1).data;
    return [pixel[0], pixel[1], pixel[2]]
}




let e1 = new Nacion(new Point(100,100), [255,0,0],1000, 10)
e1.Draw(ctx);

let e2 = new Nacion(new Point(100,400), [0,255,0], 1000, 10)
e2.Draw(ctx);

e1.SetEnemy(e2);
e2.SetEnemy(e1);
//console.log(ctx.getImageData(100, 100, 1, 1).data);

function sameColor(a,b){
    a2 = Parse(a);
    b2 = Parse(b)
    return a2[0] == b2[0] &&  a2[1] == b2[1] &&  a2[2] == b2[2]
}

function Parse(color){
    if (color[0] > color[1] && color[0] > color[2])
        return [255, 0, 0];
    if (color[1] > color[0] && color[1] > color[2])
        return [0, 255, 0];
    if (color[2] > color[0] && color[2] > color[1])
        return [0, 0, 255];

    return [0,0,0]
    
}

let interval2 = setInterval(function(){ MakeThings()}, 2);
function MakeThings(){
    if (Math.random() > .5)
        e2.Update(ctx);
    else
        e1.Update(ctx);

    fov();

    e1.Draw(ctx);
    e2.Draw(ctx);

}


function Combat(nation, i, p){
    let rival = nation.enemy.GetTrop(p)
    if (nation.troops[i].strenght > nation.enemy.troops[rival])
        nation.enemy.kill(rival);
    else
        nation.kill(i)

}



function fov(){
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(0,0,width,height);
}
function DrawSmth(point, color){
    ctx.fillStyle = color;
    ctx.fillRect(point.y - 1, point.x - 1, 3, 3);
}
function DrawSmthF(point, color){
    ctx.fillStyle = color;
    ctx.fillRect(point.y - 1, point.x - 1, 5, 5);
}

function DrawAll(){
    DrawBorder(10);
    //cell.Update();
    cell.Draw(ctx);
    
}

function DrawBorder(size){

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,width,height)
    ctx.fillStyle = "white";
    ctx.fillRect(size,size,width - size*2,height - size*2);


}


