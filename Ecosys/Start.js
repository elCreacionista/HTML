let initiated = false;
let setting = false;

document.querySelector("#init").style.display = "none";
function Game(){
    if (playing){stopAnimation();}
    if (!initiated){
        document.querySelector("#resetgame").style.display = "block";
        document.querySelector("#randomgame").style.display = "none";
        //setUp(5, 2, 50, 0);
        init();
        initiated = true;
        setting = false;
    }
    console.log("hello");
}
function ResetGame(){
    if (playing){stopAnimation();}
    if (initiated){
        killAll();
        reset();
        setValores(0);
        updateTable();
        init();
        setting = false;
        initiated = true;
    }
}
function PresetGame(){
    if (playing){stopAnimation();}
    if (setting){return;}
    document.querySelector("#resetgame").style.display = "none";

    setting = true;
    setAnimation(300,300,300,300,2000);
    setTimeout(function(){document.querySelector("#init").style.display = "flex";}, 2400)
    killAll();
    reset();
    setValores(0);
    updateTable();
    //container.style.display = "none";
}
function AddThisSpecie(){
    values[6] = color;
    console.log(values);
    setSpecies();
    addSpecie(values);
    init(true);
    initiated = true;
    setting = false;
}
const jugador = new Player();
function PlayShark(){
    Csharks = 1;
    sharkses[0] = jugador.shark;
}
main.onclick = function(event){
    jugador.shark.target.update(event.clientY, event.clientX + 30);
}