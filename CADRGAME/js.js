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

function addhistory(edificio, coste){
let string = "<b>" + edificio + "</b> coste: " + coste;
historial.innerHTML += "<br>" + string;
}

const historial = document.querySelector("#historial div");


let habilidades = {Nrecursos : 1, Ncoliseo : 0, Ntienda : 0,
 Ncuartel : 0, Nmuro : 0, Ngranja : 0, Nayuntamiento : 1, Nacademia : 0,
Nmision1 : 1, Nmision2 : 0, Nmision3 : 0};

const puntosedificios = {recursos : 20, coliseo : 50, tienda : 30,
 cuartel : 50, muro : 25, granja : 30, ayuntamiento : 60, academia : 75};

const pmme = [10000,0,0,0]
let produccion = [1,1,1,1];
let reduccion =(50 - habilidades.Nayuntamiento) / 50;
console.log(reduccion);


const intervalEdificios = setInterval(actualizarNiveles, 1000);
const Actualizar = setInterval(actualizar, 100);
const intervalRecursos = setInterval(producirRecursos, 5000);


function StringLevel(nivel){
if (nivel <= 0) return "nivel  0";
return "nivel  " + nivel;
}
function StringCoste(coste){
if (coste <= 0) return "coste:  0";
return "coste:  " + coste;
}

function actualizar(){
recursospmme.childNodes[0].innerHTML = " piedra: " + Math.floor(pmme[0]);
recursospmme.childNodes[1].innerHTML = " madera: " + Math.floor(pmme[1]);
recursospmme.childNodes[2].innerHTML = " monedas: " + Math.floor(pmme[2]);
recursospmme.childNodes[3].innerHTML = " energia: " + Math.floor(pmme[3]);
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
mostrarmapa();
actualizarNiveles();
mision1.style.display = "none";
mision2.style.display = "none";
mision3.style.display = "none";
mostrarsubirniveles("none");




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
function enterciudad(){
actual.innerHTML = "CIUDAD";
ciudad.style.display = "none";
cartas.style.display = "none";
mapa.style.display = "block";
recursos.style.display = "block";
showedificios("block")
showmisions("none");
mostrarsubirniveles("none");
}

function enterAyuntamiento(){
actual.innerHTML = "AYUNTAMIENTO";
mostrarsubirniveles("block");
mapa.style.display = "none";
cartas.style.display = "none";
showedificios("none")
ciudad.style.display = "block";
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
addhistory("muro",  costeactual + " piedras");
}
}


function subirAyuntamiento(){
let costeactual = puntosedificios.ayuntamiento * (habilidades.Nayuntamiento + 1) * reduccion;
if (pmme[0] >= costeactual){
	habilidades.Nayuntamiento++;
	pmme[0] -= costeactual;
addhistory("ayuntamiento", costeactual + " piedras");
}
}
function subirCuartel(){
let costeactual = puntosedificios.cuartel * (habilidades.Ncuartel + 1) * reduccion;
if (pmme[0] >= costeactual){
	habilidades.Ncuartel++;
	pmme[0] -= costeactual;
addhistory("cuartel", costeactual + " piedras");
}
}
function subirTienda(){
let costeactual = puntosedificios.tienda * (habilidades.Ntienda + 1) * reduccion;
if (pmme[0] >= costeactual){
	habilidades.Ntienda++;
	pmme[0] -= costeactual;
addhistory("tienda", costeactual + " piedras");
}
}
function subirColiseo(){
let costeactual = puntosedificios.coliseo * (habilidades.Ncoliseo + 1) * reduccion;
if (pmme[0] >= costeactual){
	habilidades.Ncoliseo++;
	pmme[0] -= costeactual;
addhistory("coliseo", costeactual + " piedras");
}
}
function subirAcademia(){
let costeactual = puntosedificios.academia * (habilidades.Nacademia + 1) * reduccion;
if (pmme[0] >= costeactual){
	habilidades.Nacademia++;
	pmme[0] -= costeactual;
addhistory("academia", costeactual + " piedras");
}
}
function subirGranja(){
let costeactual = puntosedificios.granja * (habilidades.Ngranja + 1) * reduccion;
if (pmme[0] >= costeactual){
	habilidades.Ngranja++;
	pmme[0] -= costeactual;
addhistory("granja", costeactual + " piedras");
}
}
function subirRecursos(){
let costeactual = puntosedificios.recursos * (habilidades.Nrecursos + 1) * reduccion;
if (pmme[0] >= costeactual){
	habilidades.Nrecursos++;
	pmme[0] -= costeactual;
addhistory("recursos", costeactual + " piedras");
}
}


function mostrarmapa(){
actual.innerHTML = "MAPA";
ciudad.style.display = "block";
mapa.style.display = "none";
cartas.style.display = "block";
showmisions("block");

showedificios("none")
}

