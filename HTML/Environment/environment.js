let plants = []
let cantplants = 0;
let time = setInterval(timePases, 400)

function genPlants(){
    for (let i = 0; i < 50; i++){
        genPlant();
    }
}

function genPlant(){
    plants[cantplants] = new Plant(null);
    cantplants++;
    draw();
}
function draw(){
    sort();
    let string = "";
    for (let i = 0; i < cantplants; i++){
        string += `<div class = 'plant' style = 'height: ${plants[i].size}px; width: ${plants[i].size}px;
         left: ${((plants[i].chunky + plants[i].posy)* 60) - plants[i].size/2}px; top: ${((plants[i].chunkx + plants[i].posx) * 50) - plants[i].size/2}px;'> </div>`;

    }
        document.querySelector("#plantas").innerHTML = string;
}

function timePases(){
    if (cantplants > 500) return;
    document.querySelector("#cantplants").innerHTML = "Cant Plants: " + cantplants;
    recalculateAv();
    let number = cantplants
    for (let i = 0; i < number; i++){
        if (plants[i] == undefined) continue;
        if (plants[i].alive) plants[i].live();
        else{
            plants.shift()
            cantplants--;
            number--;
        }
        
        if(plants[i].size > plants[i].sporessize * 100){
            let newplants = plants[i].spores()
            cantplants += newplants.length;
            plants = plants.concat(newplants);
        }
    }
    draw();
    
}

function sort(){
    plants.sort(function(a, b){return a.size - b.size});
}