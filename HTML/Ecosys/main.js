let     main = document.querySelector("#main");
const   container = document.querySelector("#other"); 
const   height = 800;
const   width = 800;
const   center = new Vector(height / 2, width / 2);

let     Cwalls = 30;
let     walls = [];

let     Cspecies = 10;
let     species = [];

let     Cfishes = 200;
let     fishes = [];

let     Csharks = 0;
let     sharkses = [];

let     Cfishers = 0;
let     fishers = [];


//setAnimation(300,300,500,500, 5000);
//setInterval(function(){setAnimation(400,400,500,500,5000);} , 6000)
function setUp(Cant_walls, Cant_species, Cant_fishes, Cant_sharks){
    Cwalls = Cant_walls;
    Cspecies = Cant_species;
    Cfishes = Cant_fishes;
    Csharks = Cant_sharks;
    console.log("hello");

}
function killAll(){
    for (let fisher of fishers){
        fisher.die();
    }
    for (let wall of walls){
        wall.remove();
    }
    for (let shark of sharkses){
        shark.die();
    }
    for (let fish of fishes){
        if (fish == undefined){break;}
        fish.die();
    }
}
function reset(){
    clearInterval(LeInterval);
    fishes = [];
    sharkses = [];
    fishers = [];
    walls = [];
    species = [];
    container.style.display = "none";
    main.style.display = "none";
}
function display(){
    document.querySelector("#init").style.display = "none";
    setTimeout(function(){
            main.style.display = "block";
            LeInterval = setInterval(updatethings, 15);
            setTimeout(function(){container.style.display = "block";}, 200)
    }, 3000) 
}

function addSpecie(newSpecie){
    species[Cspecies] = newSpecie;
    Cspecies++;
}
function init(){
    if (arguments.length == 0){
    setSpecies();
    }
    setAnimation(500,500,300,300, 2500);
    killAll();
    display();
    console.log(species);
    setTimeout(function(){
        for (let i = 0; i < Cwalls; i++){
            walls[i] = new Wall((Math.random() * (height - 100)) + 50, (Math.random() * (width - 100)) + 50, (Math.random() * 50) + 50);
            walls[i].setWall();
        }
        for (let i = 0; i < Cfishes; i++){
            fishes[i] = new Fish(Math.random() * height, Math.random() * width, 2.5, Math.floor(Math.random()*Cspecies));
            fishes[i].setFish(main);
            fishes[i].setSpecie();
        }
        for (let i = 0; i < Csharks; i++){
            sharkses[i] = new Shark(Math.random() * height,Math.random() * width,2.5, Math.random() * 1000);
        }
        for (let i = 0; i < Cfishers; i++){
            fishers[i] = new Fisher(height / 2,width / 2, 200, 200);
        }
        createTable();
    }, 1000);
}

function setSpecies(){
    for (let i = 0; i < Cspecies; i++){
        species[i] = [];
        for (let j = 0; j < 4; j++){
            species[i][j] = Math.random() * 3000;
        }
        species[i][4] = Math.random() * 1000;
        species[i][5] = Math.random() * 3;
        species[i][6] = [Math.random() * 255, Math.random() * 255, Math.random() * 255]
    }
}




let LeInterval;
function updatethings(){
    for (let i = 0; i < Cfishers; i++){
        fishers[i].update();
    }
    for (let i = 0; i < Csharks; i++){
        sharkses[i].update();
    }
    for (let i = 0; i < Cfishes; i++){
        if (fishes[i] == undefined){break;}
        fishes[i].update();
    }
    
}

function ArrayFishes(){
    for (let died = 0; died < Cfishes; died++){
        if (!fishes[died].alive || fishes[died] == undefined){
            if (died == Cfishes - 1){
                fishes.pop();
            }
            else if (died == 0){
                fishes.shift();
            }
            else{
                fishes.splice(died,died);
            }
            Cfishes--;
            break;
        }
    }
}

function createTable(){
    /*createTR([["Cantidad", "Static1", "Static2", "Static3", "Static4", "Static5", "Static6", ["co", "lo", "res"]],
          [0, 1, 2, 3, 4, 5, 6, [200, 200, 20]],
          [0, 1, 2, 3, 4, 5, 6, [200, 100, 40]],
          [0, 1, 2, 3, 4, 5, 6, [100, 100, 40]],
          [0, 1, 2, 3, 4, 5, 6, [0, 100, 40]],
          [0, 1, 2, 3, 4, 5, 6, [255, 0, 0]]]);
    */
    const text = [];
    text[0] = ["Cantidad peces", "Separacion", "Vision", "Go center", "Shark vision", "Wall vision", "Max velocidad", [200, 200, 200]];
    for (let i = 0; i < Cspecies; i++){
        text[i + 1] = [];
        text[i + 1][0] = "species" + i;
        
            for (let j = 0; j < species[i].length; j++){
                text[i + 1][j + 1] = species[i][j];
            }
    }
    setValores(text);
    createTR();
}
