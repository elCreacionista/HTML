let main = document.querySelector("#main");
let boxes = [];
let puedemverse = [true,true,true,true];
for (let i = 0; i < 4; i++){
    boxes[i] = [];
    for (let j = 0; j < 4; j++){
        createBoxes(i + "" + j);
        boxes[i][j] = new box(i,j);
    }
}

getRandomBox().createNumber();
getRandomBox().createNumber();

for (let i = 0; i < 4; i++){
    for (let j = 0; j < 4; j++){

    boxes[i][j].displayNumber();
    

    }
}






function createBoxes(i){
    let box = document.createElement("div");
    box.id = "box" + i;
    box.classList.add("box");
    main.appendChild(box);
}

function moveDown(){
    let moved = false;
    let count = 0;
    for (let k = 0; k < 5; k++){
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 4; j++){
                if (boxes[i][j].number != 0 && boxes[i + 1][j].number == 0){
                    boxes[i + 1][j].number = boxes[i][j].number;
                    boxes[i][j].removeNumber();
                    moved = true;
                } 
                else if (boxes[i][j].number != 0 && boxes[i + 1][j].number == boxes[i][j].number){
                    boxes[i][j].removeNumber();
                    boxes[i + 1][j].addNumber();
                    moved = true;
                }
                else {
                   count++;
                }
            }
        }
    }
    if (moved){
        getRandomBox().createNumber();
    }
    displayAllBoxes();
    
    if (count == 60){
        puedemverse[0] = false;
    } else {
        puedemverse[0] = true;
    }
    gameStuff();

}
function moveUp(){
    let moved = false;
    let count = 0;
    for (let k = 0; k < 5; k++){
        for (let i = 3; i >= 1; i--){
            for (let j = 0; j < 4; j++){
                if (boxes[i][j].number != 0 && boxes[i - 1][j].number == 0){
                    boxes[i - 1][j].number = boxes[i][j].number;
                    boxes[i][j].removeNumber();
                    moved = true;
                } 
                else if (boxes[i][j].number != 0 && boxes[i - 1][j].number == boxes[i][j].number){
                    boxes[i][j].removeNumber();
                    boxes[i - 1][j].addNumber();
                    moved = true;
                }
                else{
                    count++;
                }

            }
        }
    }
    if (moved){
        getRandomBox().createNumber();
    }
    displayAllBoxes();
        
    if (count == 60){
        puedemverse[1] = false;
    } else {
        puedemverse[1] = true;
    }
    gameStuff();
}


function moveLeft(){
    let moved = false;
    let count = 0;
    for (let k = 0; k < 5; k++){
        for (let i = 0; i < 4; i++){
            for (let j = 0; j < 3; j++){
                if (boxes[i][j].number != 0 && boxes[i][j + 1].number == 0){
                    boxes[i][j + 1].number = boxes[i][j].number;
                    boxes[i][j].removeNumber();
                    moved = true;
                } 
                else if (boxes[i][j].number != 0 && boxes[i][j + 1].number == boxes[i][j].number){
                    boxes[i][j].removeNumber();
                    boxes[i][j + 1].addNumber();
                    moved = true;
                }
                else {
                    count++;
                }
            }
        }
    }
    if (moved){
        getRandomBox().createNumber();
    }
    displayAllBoxes();
        
    if (count == 60){
        puedemverse[2] = false;
    } else {
        puedemverse[2] = true;
    }
    gameStuff();
}

function moveRight(){
    let moved = false; 
    let count = 0;
    for (let k = 0; k < 5; k++){
        for (let i = 0; i < 4; i++){
           for (let j = 3; j >= 1; j--){
               if (boxes[i][j].number != 0 && boxes[i][j - 1].number == 0){
                   boxes[i][j - 1].number = boxes[i][j].number;
                   boxes[i][j].removeNumber();
                   moved = true;
               } 
               else if (boxes[i][j].number != 0 && boxes[i][j - 1].number == boxes[i][j].number){
                   boxes[i][j].removeNumber();
                   boxes[i][j - 1].addNumber();
                   moved = true;
               }
               else {
                   count++;
               }
           }
        }
    }
    if (moved){
        getRandomBox().createNumber();
    }
    displayAllBoxes();
        
    if (count == 60){
        puedemverse[3] = false;
    } else {
        puedemverse[3] = true;
    }
    gameStuff();
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        moveUp();
    }
    else if (e.keyCode == '40') {
        moveDown();
    }
    else if (e.keyCode == '37') {
        moveRight();
    }
    else if (e.keyCode == '39') {
        moveLeft();
    }

}

function displayAllBoxes(){
    
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            boxes[i][j].displayNumber();
        }
    }
}
function gameStuff(){
    let points = 0;
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            points += boxes[i][j].number;
        }
    }
    if (!puedemverse[0] && !puedemverse[1] && !puedemverse[2] && !puedemverse[3]){
        endGame();
    }
    document.querySelector("#puntos").innerHTML = points + " puntos";
}

function endGame(){
    let endgame = document.createElement("p");
    endgame.style.fontSize = "70px";
    endgame.innerHTML = "JUEGO ACABADO";
    main.style.display = "none";
    document.querySelector("body").appendChild(endgame);
}
function getRandomBox(){
    let rx = Math.floor(Math.random()* 4);
    let ry = Math.floor(Math.random()* 4);
    while (boxes[rx][ry].number != 0){
        rx = Math.floor(Math.random()* 4);
        ry = Math.floor(Math.random()* 4);
    }
    return boxes[rx][ry];
}


