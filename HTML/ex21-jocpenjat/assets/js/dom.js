function initDraw(){
  let dom = `<div id="penjat"></div>`;
  
  dom += '<div id="paraula"></div>';
  
  dom += "<ul>";
  for(let i=0; i<lletres.length; i++){
    dom += `<li onclick="jugar('${lletres[i]}')">${lletres[i]}</li>`;
  }
  dom += "</ul>";
  
  document.querySelector("#app").innerHTML = dom;
}

function pintarParaulaEnJoc(){
  let p = '';
  for(let i=0; i<paraulaEnJoc.length; i++){
    p += " "+paraulaEnJoc[i]+" ";
  }
  
  document.querySelector("#paraula").innerHTML = p;
}

function pintarPenjat(){
  let img = `<img src="./assets/img/${estatPenjat}.PNG" alt="Penjat">`;
  document.querySelector("#penjat").innerHTML=img;
}

function pintarGuanyat(){
  document.querySelector("#penjat").innerHTML="HAS GUANYAT!";
}

function pintarPerdut(){
  document.querySelector("#penjat").innerHTML="HAS PERDUT!";
}