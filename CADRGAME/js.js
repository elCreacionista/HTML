

//  espada > hacha > lanza

const tropasN1 = document.querySelector("#N1");
const tropasN2 = document.querySelector("#N2");
const tropasN3 = document.querySelector("#N3");
const tropasciudad = document.querySelector("#tropasciudad");

const actual = document.querySelector("#actual h2");
const ciudad = document.querySelector("#ciudad");
const cartas = document.querySelector("#cartas");
const mision1 = document.querySelector("#mision1");
const mision2 = document.querySelector("#mision2");
const mision3 = document.querySelector("#mision3");
const recursos = document.querySelector("#recursos");
const mapa = document.querySelector("#mapa");
const ayuntamiento = document.querySelector("#ayuntamiento");
const cuartel = document.querySelector("#cuartel");
const coliseo = document.querySelector("#coliseo");
const tienda = document.querySelector("#tienda");
const academia = document.querySelector("#academia");
const muro = document.querySelector("#muro");
const granja = document.querySelector("#granja");

const subirayuntamiento = document.querySelector("#subirayuntamiento");
const subirrecursos = document.querySelector("#subirrecursos");
const subircuartel = document.querySelector("#subircuartel");
const subircoliseo = document.querySelector("#subircoliseo");
const subirtienda = document.querySelector("#subirtienda");
const subiracademia = document.querySelector("#subiracademia");
const subirmuro = document.querySelector("#subirmuro");
const subirgranja = document.querySelector("#subirgranja");

const recursospmme = document.querySelector("#pmme");

function addhistory(edificio, nivel,  coste){
let string = "<p style= 'color:rgb(100,100,100); font-size: 1.3em;'> <b>" + edificio + " nivel actual: " + nivel + "</b></p> coste: " + coste;
historial.innerHTML += "<br>" + string;

document.querySelector("#historial img").src = 'https://img.icons8.com/fluent/48/000000/filled-message.png';
setTimeout(function(){document.querySelector("#historial img").src = 'https://img.icons8.com/color/80/000000/open-book.png';}, 2500);
}
function addhistoryT(tropa, cantidad,  coste){
let string = "<p style= 'color: rgb(120,80,100); font-size: 1.3em;'> <b>" + tropa + " Cantidad: " + cantidad + "</b></p> coste: " + coste;
historial.innerHTML += "<br>" + string;
}

const historial = document.querySelector("#historial div");


let habilidades = {Nrecursos : 1, Ncoliseo : 0, Ntienda : 0,
 Ncuartel : 0, Nmuro : 0, Ngranja : 0, Nayuntamiento : 1, Nacademia : 0,
Nmision1 : 1, Nmision2 : 0, Nmision3 : 0, Ntropas : [1,0,0]};



const puntosedificios = {recursos : 10, tienda : 50, cuartel : 30, 
muro : 25, granja : 30, ayuntamiento : 60, coliseo : 120, academia : 150};

const pmme = [300,100,100,20]
let produccion = [1,1,1,1];
let reduccion =(50 - habilidades.Nayuntamiento) / 50;
console.log(reduccion);


const intervalEdificios = setInterval(actualizarNiveles, 1000);
const Actualizar = setInterval(actualizar, 100);
const intervalRecursos = setInterval(producirRecursos, 5000);

let tropas = 
{
a1 : 0, b1 : 0, c1 : 0, d1 : 0, e1 : 0, f1 : 0,
a2 : 0, b2 : 0, c2 : 0, d2 : 0, e2 : 0, f2 : 0, 
a3 : 0, b3 : 0, c3 : 0, d3 : 0, e3 : 0, f3 : 0, 
};


function crearA1(){
tropas.a1++;
document.querySelector("#a1").childNodes[1].childNodes[5].innerHTML = "Cantidad " + tropas.a1;
addhistoryT("A1",tropas.a1,  100 + " maderas");
let a1 = document.querySelector("#a1");
tropasciudad.appendChild(a1);
console.log(tropas);
}










function StringLevel(nivel){
if (nivel <= 0) return "nivel  0";
return "nivel  " + nivel;
}
function StringCoste(coste){
if (coste <= 0) return "coste:  0";
return "coste:  " + Math.floor(coste);
}

function actualizar(){
recursospmme.childNodes[0].innerHTML = " piedra:<br>" + Math.floor(pmme[0]);
recursospmme.childNodes[1].innerHTML = " madera:<br>" + Math.floor(pmme[1]);
recursospmme.childNodes[2].innerHTML = " monedas:<br>" + Math.floor(pmme[2]);
recursospmme.childNodes[3].innerHTML = " energia:<br>" + Math.floor(pmme[3]);
}

function producirRecursos(){
for (let i = 0; i < produccion.length; i++){
produccion[i] = habilidades.Nrecursos;
pmme[i] += produccion[i];
}
}

function actualizarNiveles(){
recursos.childNodes[5].innerHTML = StringLevel(habilidades.Nrecursos);
ayuntamiento.childNodes[5].innerHTML = StringLevel(habilidades.Nayuntamiento);
cuartel.childNodes[5].innerHTML = StringLevel(habilidades.Ncuartel);
coliseo.childNodes[5].innerHTML = StringLevel(habilidades.Ncoliseo);
tienda.childNodes[5].innerHTML = StringLevel(habilidades.Ntienda);
academia.childNodes[5].innerHTML = StringLevel(habilidades.Nacademia);
muro.childNodes[5].innerHTML = StringLevel(habilidades.Nmuro);
granja.childNodes[5].innerHTML = StringLevel(habilidades.Ngranja);
mision1.childNodes[5].innerHTML = StringLevel(habilidades.Nmision1);
mision2.childNodes[5].innerHTML = StringLevel(habilidades.Nmision2);
mision3.childNodes[5].innerHTML = StringLevel(habilidades.Nmision3);

subirayuntamiento.childNodes[1].childNodes[5].innerHTML = StringLevel(habilidades.Nayuntamiento);
subirrecursos.childNodes[1].childNodes[5].innerHTML = StringLevel(habilidades.Nrecursos);
subircuartel.childNodes[1].childNodes[5].innerHTML = StringLevel(habilidades.Ncuartel);
subircoliseo.childNodes[1].childNodes[5].innerHTML = StringLevel(habilidades.Ncoliseo);
subirtienda.childNodes[1].childNodes[5].innerHTML = StringLevel(habilidades.Ntienda);
subiracademia.childNodes[1].childNodes[5].innerHTML = StringLevel(habilidades.Nacademia);
subirmuro.childNodes[1].childNodes[5].innerHTML = StringLevel(habilidades.Nmuro);
subirgranja.childNodes[1].childNodes[5].innerHTML = StringLevel(habilidades.Ngranja);


reduccion = (50 - habilidades.Nayuntamiento) / 50;

// PUNTOS //

let puntosCiudad = (habilidades.Nrecursos * puntosedificios.recursos) + 
(habilidades.Ntienda * puntosedificios.tienda) +
(habilidades.Ncuartel * puntosedificios.cuartel) +
(habilidades.Nmuro * puntosedificios.muro) +
(habilidades.Ngranja * puntosedificios.granja) +
(habilidades.Nayuntamiento * puntosedificios.ayuntamiento) +
(habilidades.Ncoliseo * puntosedificios.academia) +
(habilidades.Nacademia * puntosedificios.academia);
ciudad.childNodes[5].innerHTML = "Puntos " + puntosCiudad

// COSTES //
subirayuntamiento.childNodes[3].childNodes[3].innerHTML = StringCoste(puntosedificios.ayuntamiento * (habilidades.Nayuntamiento + 1) * reduccion);

subirrecursos.childNodes[3].childNodes[3].innerHTML = StringCoste(puntosedificios.recursos * (habilidades.Nrecursos + 1) * reduccion);

subircuartel.childNodes[3].childNodes[3].innerHTML = StringCoste(puntosedificios.cuartel * (habilidades.Ncuartel + 1) * reduccion);

subircoliseo.childNodes[3].childNodes[3].innerHTML = StringCoste(puntosedificios.coliseo * (habilidades.Ncoliseo + 1) * reduccion);

subirtienda.childNodes[3].childNodes[3].innerHTML = StringCoste(puntosedificios.tienda * (habilidades.Ntienda + 1) * reduccion);

subiracademia.childNodes[3].childNodes[3].innerHTML = StringCoste(puntosedificios.academia * (habilidades.Nacademia + 1) * reduccion);

subirmuro.childNodes[3].childNodes[3].innerHTML = StringCoste(puntosedificios.muro * (habilidades.Nmuro + 1) * reduccion);

subirgranja.childNodes[3].childNodes[3].innerHTML = StringCoste(puntosedificios.granja * (habilidades.Ngranja + 1) * reduccion);
}

//  Inicio  //


recursos.style.display = "none";
cuartel.style.display = "none";
tienda.style.display = "none";
coliseo.style.display = "none";
ayuntamiento.style.display = "none";
academia.style.display = "none";
muro.style.display = "none";
granja.style.display = "none";
tropasciudad.style.display = "none";
mostrarmapa();
actualizarNiveles();
mision2.style.display = "none";
mision3.style.display = "none";
mostrarsubirniveles("none");
tropasN1.style.display = "none";
tropasN2.style.display = "none";
tropasN3.style.display = "none";




function mostrarsubirniveles(variable){
subirtienda.style.display = variable;
subircuartel.style.display = variable;
subircoliseo.style.display = variable;
subirayuntamiento.style.display = variable;
subirrecursos.style.display = variable;
subiracademia.style.display = variable;
subirmuro.style.display = variable;
subirgranja.style.display = variable;

}






function showmisions(variable){
if (habilidades.Nmision1 > 0)
mision1.style.display = variable;
if (habilidades.Nmision2 > 0)
mision2.style.display = variable;
if (habilidades.Nmision3 > 0)
mision3.style.display = variable;
}

function showedificios(variable){
if (habilidades.Nrecursos > 0)
	recursos.style.display = variable;
if (habilidades.Ncuartel > 0)
	cuartel.style.display = variable;
if (habilidades.Ntienda > 0)
	tienda.style.display = variable;
if (habilidades.Ncoliseo > 0)
	coliseo.style.display = variable;
if (habilidades.Nayuntamiento > 0)
	ayuntamiento.style.display = variable;
if (habilidades.Nacademia > 0)
	academia.style.display = variable;
if (habilidades.Nmuro > 0)
	muro.style.display = variable;
if (habilidades.Ngranja > 0)
	granja.style.display = variable;

}

function showcuartel(variable){
if(habilidades.Ntropas[0] == 1)
	tropasN1.style.display = variable;
if(habilidades.Ntropas[1] == 1)
	tropasN2.style.display = variable;
if(habilidades.Ntropas[2] == 1)
	tropasN3.style.display = variable;

}
function mostrarmapa(){
actual.innerHTML = "MAPA";
ciudad.style.display = "block";
mapa.style.display = "none";
cartas.style.display = "block";
showmisions("block");
showedificios("none");
tropasciudad.style.display = "none";
}


function enterciudad(){
actual.innerHTML = "CIUDAD";
ciudad.style.display = "none";
cartas.style.display = "none";
mapa.style.display = "block";
recursos.style.display = "block";
showedificios("block")
showmisions("none");
mostrarsubirniveles("none");
showcuartel("none");
tropasciudad.style.display = "none";
}

function enterAyuntamiento(){
actual.innerHTML = "AYUNTAMIENTO";
mostrarsubirniveles("block");
mapa.style.display = "none";
cartas.style.display = "none";
showedificios("none")
ciudad.style.display = "block";
showcuartel("none");
tropasciudad.style.display = "none";
}

function enterCuartel(){
actual.innerHTML = "CUARTEL";
mostrarsubirniveles("none");
mapa.style.display = "none";
cartas.style.display = "block";
showedificios("none")
ciudad.style.display = "block";
showcuartel("flex");
tropasciudad.style.display = "none";

}

function enterCartas(){
actual.innerHTML = "TROPAS CIUDAD";
ciudad.style.display = "block";
cartas.style.display = "none";
mapa.style.display = "block";
mostrarsubirniveles("none");
tropasciudad.style.display = "flex";
showedificios("none");
showmisions("none");


}



function salirAyuntamiento(){
mostrarsubirniveles("none");
mapa.style.display = "block";
cartas.style.display = "block";
ayuntamiento.style.display = "block";
ciudad.style.display = "none";

}






function subirMuro(){
let costeactual = puntosedificios.muro * (habilidades.Nmuro + 1) * reduccion;
if (pmme[0] >= costeactual){
	habilidades.Nmuro++;
	pmme[0] -= costeactual;
addhistory("muro",habilidades.Nmuro,  costeactual + " piedras");
}
}


function subirAyuntamiento(){
let costeactual = Math.floor(puntosedificios.ayuntamiento * (habilidades.Nayuntamiento + 1) * reduccion);
if (pmme[0] >= costeactual){
	habilidades.Nayuntamiento++;
	pmme[0] -= costeactual;
addhistory("ayuntamiento", habilidades.Nayuntamiento, costeactual + " piedras");
}
}
function subirCuartel(){
let costeactual = Math.floor(puntosedificios.cuartel * (habilidades.Ncuartel + 1) * reduccion);
if (pmme[0] >= costeactual){
	habilidades.Ncuartel++;
	pmme[0] -= costeactual;
addhistory("cuartel", habilidades.Ncuartel, costeactual + " piedras");
}
}
function subirTienda(){
let costeactual = Math.floor(puntosedificios.tienda * (habilidades.Ntienda + 1) * reduccion);
if (pmme[0] >= costeactual){
	habilidades.Ntienda++;
	pmme[0] -= costeactual;
addhistory("tienda", habilidades.Ntienda, costeactual + " piedras");
}
}
function subirColiseo(){
let costeactual = Math.floor(puntosedificios.coliseo * (habilidades.Ncoliseo + 1) * reduccion);
if (pmme[0] >= costeactual){
	habilidades.Ncoliseo++;
	pmme[0] -= costeactual;
addhistory("coliseo", habilidades.Ncoliseo, costeactual + " piedras");
}
}
function subirAcademia(){
let costeactual = Math.floor(puntosedificios.academia * (habilidades.Nacademia + 1) * reduccion);
if (pmme[0] >= costeactual){
	habilidades.Nacademia++;
	pmme[0] -= costeactual;
addhistory("academia", habilidades.Nacademia, costeactual + " piedras");
}
}
function subirGranja(){
let costeactual = Math.floor(puntosedificios.granja * (habilidades.Ngranja + 1) * reduccion);
if (pmme[0] >= costeactual){
	habilidades.Ngranja++;
	pmme[0] -= costeactual;
addhistory("granja", habilidades.Ngranja, costeactual + " piedras");
}
}
function subirRecursos(){
let costeactual = Math.floor(puntosedificios.recursos * (habilidades.Nrecursos + 1) * reduccion);
if (pmme[0] >= costeactual){
	habilidades.Nrecursos++;
	pmme[0] -= costeactual;
addhistory("recursos", habilidades.Nrecursos, costeactual + " piedras");
}
}



