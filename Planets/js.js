let main = document.querySelector("#main");
//let sun = new planet (20000, 120, 1500, 2500, "sun");
//sun.vel.update(0,0)
let planets = [];
let CPlanets = 10;
for (let i = 0; i < CPlanets; i++){
    planets[i] = new planet(Math.random() * 10000, Math.random() * 100, Math.random() * 3000, Math.random()* 4000, "planet");
}

const G = 0.000314;
const LUZ = 31.4;

let interval = setInterval(function(){
for (let i = 0; i < planets.length; i++){
    if (planets[i].exist){
        for (let j = 0; j < planets.length; j++){
            let vectors = [];
            if (planets[j].exist && planets[i] !== planets[j]){
                Gravity(planets[i], planets[j]);
            }
        }
    }
}

for (let i = 0; i < planets.length; i++){
    if (!planets[i].exist){continue;}
    planets[i].update();
    for (let j = 0; j < planets.length; j++){
        if (planets[j].exist && planets[i] !== planets[j] && testImpact(planets[i], planets[j])){
            planets[i].addPlanet(planets[j]);
            main.removeChild(planets[j].dom)
            planets[j].exist = false;
        }
    }
}    //Gravity(earth, moon);
    
}, 15);


// F = G * ((M1 * M2) / R²)
function Gravity(object1, object2){
    let m1 = object1.heigth;
    let m2 = object2.heigth;
    let d = object1.pos.getDist(object2.pos);
    let F = G * ((m1 * m2) / d);
    let direction = object1.pos.getVectorTo(object2.pos, F);
    object1.vel.sum(direction);
}

function testImpact(object1, object2){
    let radius1 = (object1.radius / 2) * (object1.radius / 2);
    let radius2 = (object2.radius / 2) * (object2.radius / 2)
    if (object1.pos.getDist(object2.pos) <= radius1 + radius2){
        return true;
    }
    else return false;
}