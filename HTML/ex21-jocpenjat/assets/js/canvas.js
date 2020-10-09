let canvas;
let ctx;
let p;

function initDraw(){
  //1- Inicialitzar els elements HTML
  // - Tag CANVAS
  // - 7 imatges del penjat amb display none
  let dom = `<canvas id="canvas" width="1000" height="600" style="border:1px solid #000000;"></canvas>`;
  for (let i = 0; i < 7; i++) {
    dom += `<img id="penjat${i+1}" src="./assets/img/${i+1}.png" alt="penjat" style="display:none;">`;
  }
  document.querySelector("#app").innerHTML = dom;
  
  //2- Inicialitzar el canvas
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  p = canvas.getBoundingClientRect();
  
  //3- Pintar les lletres
  //Pintem les lletres amb 2 files
  //Fila 1: altura 320
  //Fila 2: altura 350
  //Pintarem un quadrat amb la lletra centrada a dins
  const widthCanvas = canvas.width;
  const lletresFila = lletres.length/2;
  const ampleLletra = widthCanvas / lletresFila;
  
  for(let i=0; i<lletres.length; i++){
    if(i < lletresFila){
      ctx.fillStyle="blue";
      ctx.fillRect(i*ampleLletra,320,i+ampleLletra,30);
      ctx.strokeRect(i*ampleLletra,320,i+ampleLletra,30);
  
      ctx.font = "20px Arial";
      ctx.fillStyle = "white"
      ctx.textAlign = "center";
      ctx.fillText(lletres[i], i*ampleLletra + (ampleLletra/2), 345);
    } else{
      ctx.fillStyle="blue";
      ctx.fillRect((i%lletresFila)*ampleLletra,350,i+ampleLletra,30);
      ctx.strokeRect((i%lletresFila)*ampleLletra,350,i+ampleLletra,30);
  
      ctx.font = "20px Arial";
      ctx.fillStyle = "white"
      ctx.textAlign = "center";
      ctx.fillText(lletres[i], (i%lletresFila)*ampleLletra+ (ampleLletra/2), 375);
    }
  }
  
  canvas.addEventListener("click",function(event){
    const x = event.clientX - p.left;
    const y = event.clientY - p.top;
  
    const widthCanvas = canvas.width;
    const lletresFila = lletres.length/2;
    const ampleLletra = widthCanvas / lletresFila;
    
    //Recuperar la lletra depenent de la coordenada X i Y
    for(let i=0; i<lletres.length; i++){
      let xini;
      let xfi;
      let yini;
      let yfi;
      
      if(i < lletresFila){
        xini = i*ampleLletra;
        xfi = xini + ampleLletra;
        yini = 320;
        yfi = yini + 30;
      } else{
        xini = (i%lletresFila)*ampleLletra;
        xfi = xini + ampleLletra;
        yini = 350;
        yfi = yini + 30;
      }
      
      //comprovar la coordenada x i y
      if(x>=xini && x<=xfi && y>=yini && y<=yfi){
        jugar(lletres[i])
      }
    }
    
  })
}

//Pintarem la paraula en joc a la posició 240 d'altura
//La X estarà centrada
function pintarParaulaEnJoc(){
  const widthCanvas = canvas.width;
  
  let p = '';
  for(let i=0; i<paraulaEnJoc.length; i++){
    p += " "+paraulaEnJoc[i]+" ";
  }
  
  ctx.font = "30px Arial";
  ctx.fillStyle = "blue"
  ctx.textAlign = "center";
  ctx.fillText(p, widthCanvas/2, 260);
}

//Pintem el penjat amb l'estat actual del penjat (200 altura)
//Pintau la imatge CENTRADA dins el canvas
function pintarPenjat(){
  const widthCanvas = canvas.width;
  const widthImage = 200;
  const heightImage = 200;
  
  let img = document.querySelector(`#penjat${estatPenjat}`);
  ctx.drawImage(img, (widthCanvas / 2) - (widthImage / 2), 20,widthImage,heightImage);
}

function pintarGuanyat(){
  const widthCanvas = canvas.width;
  const heightCanvas = canvas.height;
  
  ctx.fillStyle="white";
  ctx.fillRect(0,0,widthCanvas,heightCanvas);
  
  ctx.font = "30px Arial";
  ctx.fillStyle = "red"
  ctx.textAlign = "center";
  ctx.fillText("HAS GUANYAT", widthCanvas/2, 260);
}

function pintarPerdut() {
  const widthCanvas = canvas.width;
  const heightCanvas = canvas.height;
  
  ctx.fillStyle="white";
  ctx.fillRect(0,0,widthCanvas,heightCanvas);
  
  ctx.font = "30px Arial";
  ctx.fillStyle = "red"
  ctx.textAlign = "center";
  ctx.fillText("HAS PERDUT", widthCanvas/2, 260);
}