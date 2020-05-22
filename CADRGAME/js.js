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
const subircuartel = document.querySelector("#subircuartel");
const subircoliseo = document.querySelector("#subircoliseo");
const subirtienda = document.querySelector("#subirtienda");
const subiracademia = document.querySelector("#subiracademia");
const subirmuro = document.querySelector("#subirmuro");
const subirgranja = document.querySelector("#subirgranja");

const interval = setInterval(actualizarNiveles, 1000);

function StringLevel(nivel){
if (nivel == 0) return "nivel  0";
return "nivel  " + nivel;
}

let habilidades = {Nrecursos : 14, Ncoliseo : 0, Ntienda : 0,
 Ncuartel : 0, Nmuro : 0, Ngranja : 0, Nayuntamiento : 1, Nacademia : 0,
Nmision1 : 1, Nmision2 : 0, Nmision3 : 0};


//  Inicio  //

mostrarmapa();
mostrarsubirniveles("none")
mision1.style.display = "none";
mision2.style.display = "none";
mision3.style.display = "none";


actualizarNiveles();


function mostrarsubirniveles(variable){

subirtienda.style.display = variable;
subircuartel.style.display = variable;
subircoliseo.style.display = variable;
subirayuntamiento.style.display = variable;
subiracademia.style.display = variable;
subirmuro.style.display = variable;
subirgranja.style.display = variable;

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
}

function showmisions(variable){
if (habilidades.Nmision1 > 0)
mision1.style.display = variable;
if (habilidades.Nmision2 > 0)
mision2.style.display = variable;
if (habilidades.Nmision3 > 0)
mision3.style.display = variable;
}

function enterciudad(){
actual.innerHTML = "CIUDAD";
ciudad.style.display = "none";
mapa.style.display = "block";
recursos.style.display = "block";
if (habilidades.Ncuartel > 0)
	cuartel.style.display = "block";
if (habilidades.Ncoliseo > 0)
	coliseo.style.display = "block";
if (habilidades.Nayuntamiento > 0)
	ayuntamiento.style.display = "block";
if (habilidades.Nacademia > 0)
	academia.style.display = "block";
if (habilidades.Nmuro > 0)
	muro.style.display = "block";
if (habilidades.Ngranja > 0)
	granja.style.display = "block";
showmisions("none");
mostrarsubirniveles("none");
}

function enterAyuntamiento(){
mostrarsubirniveles("block");
mapa.style.display = "none";
cartas.style.display = "none";
ayuntamiento.style.display = "none";
ciudad.style.display = "block";
}



function mostrarmapa(){
actual.innerHTML = "MAPA";
ciudad.style.display = "block";
showmisions("block");

tienda.style.display = "none";
recursos.style.display = "none";
mapa.style.display = "none";
cuartel.style.display = "none";
coliseo.style.display = "none";
ayuntamiento.style.display = "none";
academia.style.display = "none";
muro.style.display = "none";
granja.style.display = "none";
}

