const humann = [];
const shapes = [];
const SIZEH =20;
const SIZEC = 0;

let string = "";
const visual = document.querySelector("#visual");
for (let i = 0; i < SIZEH; i++){
    string += "<div class = 'human' id = 'human" + i + "'> </div>";
}
for (let i = 0; i < SIZEC; i++){
    string += "<div class = 'shape' id = 'shape" + i + "'> </div>";
}
visual.innerHTML = string;
for (let i = 0; i < SIZEH; i++){
    humann[i] = new human(i);
}
for (let i =0; i < SIZEC; i++){
//    humann[i+ SIZEH] = new obstaculo(Math.random()* 700, Math.random()* 500, Math.random()* 500, Math.random()* 500,i);
    humann[i+ SIZEH] = new obstaculo(610, 310, 10, 400,i);


}
console.log(humann);
let interval1 = setInterval(function(){
    for (let i = 0; i < SIZEH; i++){
        humann[i].move();
    }
}, 10);