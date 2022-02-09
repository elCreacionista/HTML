let canvas = new Canvas(1000,500, "rgb(220,220,255)");
let moscas = [];
let sticks = [];
let aracnids = [];
for (let i = 0; i < 10; i++){
    sticks[i] = new stick();
    aracnids[i] = new aracnid(sticks[i]);
}
for (let i = 0; i < 30; i++){
    moscas[i] = new fly(Math.random()*canvas.width, Math.random()*canvas.height);
}
let int = setInterval(funcion, 15);

function funcion(){
    canvas.clear();
    for (let i = 0; i < sticks.length; i++){
        canvas.draw(sticks[i].size, sticks[i].start, sticks[i].color);
        canvas.draw(sticks[i].size, new Vector(5,5), "rgb(0,0,200)");
        
        //canvas.draw(sticks[i].start, new Vector(5,5), "rgb(0,0,0)");
    }
    for (let i = 0; i < moscas.length; i++){
        moscas[i].Update();
        canvas.write(moscas[i].index, moscas[i].pos);
        let mpos = moscas[i].getPos();
        canvas.draw(mpos, moscas[i].size, moscas[i].color);
    }
    for (let i = 0; i < aracnids.length; i++){
        
        aracnids[i].Update();
        canvas.write(aracnids[i].index, aracnids[i].pos);
        let mpos = aracnids[i].getPos();
        canvas.draw(mpos, aracnids[i].size, aracnids[i].color);
    }
}