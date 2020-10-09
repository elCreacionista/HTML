const lletres = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const paraules = ["LINUX","MACOS","WINDOWS"];
let paraulaSeleccionada;
let paraulaEnJoc = [];
let estatPenjat = 1;
let gameFinish = false;

function init(){
  let paraulaSeleccionadaGuardada = localStorage.getItem("paraulaSeleccionada");
  if(paraulaSeleccionadaGuardada){
    paraulaSeleccionada = paraulaSeleccionadaGuardada;
  } else {
    paraulaSeleccionada = paraules[Math.floor(Math.random() * paraules.length)]
    localStorage.setItem("paraulaSeleccionada",paraulaSeleccionada)
  }
  
  for(let i=0; i<paraulaSeleccionada.length; i++){
    paraulaEnJoc.push("_")
  }
  
  //Comprovar si tenim algun joc guardat
  let paraulaGuardada = JSON.parse(localStorage.getItem("paraula"));
  let numeroImatge = JSON.parse(localStorage.getItem("numeroImatge"));
  
  if(paraulaGuardada){
    paraulaEnJoc = paraulaGuardada;
  }
  
  if(numeroImatge){
    estatPenjat = numeroImatge;
  }
  
  
  initDraw();
  pintarParaulaEnJoc();
  pintarPenjat();
}

function jugar(lletra){
  console.log("Game finish",gameFinish)
  if(!gameFinish) {
    //Cercar si la lletra és dins la paraula i si hi és canviar-la
    let trobat = false;
    for (let i = 0; i < paraulaSeleccionada.length; i++) {
      if (paraulaSeleccionada[i] === lletra) {
        paraulaEnJoc[i] = lletra;
        trobat = true;
      }
    }
    //ACTUALITZAR LA PARAULA
    localStorage.setItem("paraula",JSON.stringify(paraulaEnJoc));
  
    if (!trobat) {
      estatPenjat++;
      //ACTUALITZAR LA IMATGE
      localStorage.setItem("numeroImatge",JSON.stringify(estatPenjat));
    }
  
    pintarParaulaEnJoc();
    pintarPenjat();
  
    //Joc acabat
    if (estatPenjat == 7) {
      //REINICIAR PARAULA I IMATGE
      localStorage.removeItem("paraula");
      localStorage.removeItem("numeroImatge")
      localStorage.removeItem("paraulaSeleccionada")
      pintarPerdut();
      gameFinish = true;
    }
  
    if (paraulaEnJoc.indexOf("_") == -1) {
      //REINICIAR PARAULA I IMATGE
      localStorage.removeItem("paraula");
      localStorage.removeItem("numeroImatge")
      localStorage.removeItem("paraulaSeleccionada")
      pintarGuanyat();
      gameFinish = true;
    }
  }
}
