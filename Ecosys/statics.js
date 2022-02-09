
const tabla = document.querySelector(".Table");
let   contenido = [];
let   speciesCant = [];
let   valores = [];

function setValores(tabla){
    valores = tabla;
}

function updateTable(){
    tabla.innerHTML = "";
    contenido = [];
    createTR();
}

// VALORES[x][7]
function createTR(){
    if (valores === 0){return;}
    let row = null;
    let cell = null;
    let color = 0;
    for (let i = 0; i < valores.length; i++){
        row = document.createElement("tr");
        color = valores[i][valores[i].length - 1];
        for (let j = 0; j < valores[i].length - 1; j++){
            if (j == 0){
            cell = document.createElement("th");
            }
            else{
            cell = document.createElement("td");
            }
            cell.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
            if (j === 0 && i > 0){
                cell.innerHTML = 0;
            }
            else if (valores[i][j] > 0){
                 cell.innerHTML = Math.sqrt(parseFloat(Object.assign(valores[i][j]))).toFixed(2);
                if (j == 6){
                    cell.innerHTML = parseFloat(Object.assign(valores[i][j])).toFixed(2);
                }
            } else{
                cell.innerHTML = valores[i][j];
            }
            row.appendChild(cell);
        }
        if (i != 0){
            row.classList.add(valores[i][0]);
            let buttonElement = document.createElement("button");
            buttonElement.classList.add("Tablebutton");
            buttonElement.innerHTML = "<b>VER</b>";
            buttonElement.onclick = function(){
                setUpSpecies(i);
            }
            let element = document.createElement("td");
            element.appendChild(buttonElement);
            row.appendChild(element);
        }
        tabla.appendChild(row);
    }
    for (let i = 1; i < valores.length; i++){
        contenido[i - 1] = document.querySelector(`.Table tr:nth-child(${i + 1})`)
    }
    CountFishes();
    sortSpecies();
}
function CountFishes(){
    for (let i = 0; i < Cspecies; i++){
        speciesCant[i] = [0,i];
    }
    for (let i = 0; i < Cfishes; i++){
        if (fishes[i] == undefined){break;}
        if (fishes[i].alive){
        speciesCant[fishes[i].specie][0]++;
        }
    }
    for (let i = 0; i < Cspecies; i++){
        contenido[i].childNodes[0].innerHTML = speciesCant[i][0];
    }
}
function sortSpecies(){
    let order = Object.assign(speciesCant);
    order.sort(function(a, b){return b[0] - a[0]});
    for (let i = 0; i < Cspecies; i++){
        tabla.removeChild(contenido[order[i][1]]);
        tabla.appendChild(contenido[order[i][1]]);
}
}


function setUpSpecies(index){
    console.log(index)
}