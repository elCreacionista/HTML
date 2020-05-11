const dom = document.querySelectorAll("#tropas>td");
const domedi = document.querySelectorAll("#edificios>td");
const domrec = document.querySelectorAll("#recursos>td");
const dom2 = document.querySelectorAll("#tropas2>td");

const Arraytropas = [new hondero(), new lancero(), new hoplita(), new monje(), new arquero(), new escudero()]

const Arrayedificios = [new minapiedra(), new minamadera(), new minaplata(), new templo(), new almacen(), new cuartel(), new astillero(), new muro(), new academia(), new ayuntamiento()]

const ciudad = new Ciudad(new tropas(0,0,0,0,0,0), new edificios(1,1,1,0,1,0,0,1,0,1))
const ciudad2 = new Ciudad(new tropas(0,0,0,100,10,0))
console.log(ciudad)
console.log(ciudad.edificios)
console.log(Arrayedificios)

let domActualize = setInterval(actualize, 100)
function actualize(){
	let i = 0;
	while (i < ciudad.tropas.length){
		dom[i].innerHTML = ciudad.tropas[i];
		dom2[i].innerHTML = ciudad2.tropas[i];
		i++;
	}
	dom[i].innerHTML = "<b>" + dmgcuartel(ciudad.tropas) + "<b>";
	dom2[i].innerHTML = "<b>" + dmgcuartel(ciudad2.tropas) + "<b>";
	i++;
	dom[i].innerHTML = "<b>" + defcuartel(ciudad.tropas) + "<b>";
	dom2[i].innerHTML = "<b>" + defcuartel(ciudad2.tropas) + "<b>";
	

	
	
	

	for (let k = 0 ; k < ciudad.recursos.length ; k++)
		domrec[k].innerHTML = ciudad.recursos[k];

	for (let k = 0 ; k < ciudad.edificios.length ; k++)
		domedi[k].innerHTML = ciudad.edificios[k];
}

const generadorpiedra = setInterval(generarpiedra, ciudad.generar[0]);
const generadormadera = setInterval(generarmadera, ciudad.generar[1]);
const generadorplata =  setInterval(generarplata,  ciudad.generar[2]);
const generadorfavor =  setInterval(generarfavor,  ciudad.generar[3]);

function generarpiedra(){ 
	ciudad.recursos[0] += ciudad.edificios[0];
	if (ciudad.recursos[0] > ciudad.almacenamiento * ciudad.edificios[4])
		ciudad.recursos[0] = ciudad.almacenamiento * ciudad.edificios[4]}
function generarmadera(){ ciudad.recursos[1] += ciudad.edificios[1];
	if (ciudad.recursos[1] > ciudad.almacenamiento * ciudad.edificios[4])
		ciudad.recursos[1] = ciudad.almacenamiento * ciudad.edificios[4]}
function generarplata(){  ciudad.recursos[2] += ciudad.edificios[2];
	if (ciudad.recursos[2] > ciudad.almacenamiento * ciudad.edificios[4])
		ciudad.recursos[2] = ciudad.almacenamiento * ciudad.edificios[4]}
function generarfavor(){  ciudad.recursos[3] += ciudad.edificios[3];
	if (ciudad.recursos[3] > 100)
		ciudad.recursos[3] = 100;}



function atacar(tropas, ciudad){

let ataque = dmgcuartel(tropas);
let def = defcuartel(ciudad.tropas);
	if (ataque >= def){
		let citydef = ataque - def;
		while (citydef < ataque){
			let x = Math.floor(Math.random()*tropas.length)
			if (tropas[x] >= 1){
				tropas[x] -= 1
				ataque = dmgcuartel(tropas);
			}
		}
		for (let i = 0; i < ciudad.tropas.length; i++) ciudad.tropas[i] = 0;
		return;
	}
	else if (def > ataque){
		let tropasdmg = def - ataque;
		while (tropasdmg < def){
			let x = Math.floor(Math.random()*tropas.length)
			if (ciudad.tropas[x] >= 1){
				ciudad.tropas[x] -= 1
				def = defcuartel(ciudad.tropas);
			}
		}
		for (let i = 0; i < tropas.length; i++) tropas[i] = 0;
	}
}


function sumtropas(ciudad,tropas){
	console.log(ciudad.tropas);
	for (let i = 0; i < ciudad.tropas.length; i++)
		ciudad.tropas[i] += tropas[i];
	console.log(ciudad.tropas);
}

function addtropa(num, cant){
	let posible = true;
	let coste = [];
	for (let i = 0 ; i < ciudad.recursos.length; i++){
		coste[i] = Arraytropas[num].coste[i] * cant;
		if (coste[i] > ciudad.recursos[i])
			posible = false;
	}
	if (posible){

		ciudad.tropas[num] += cant
		for (let i = 0 ; i < ciudad.recursos.length; i++){
			ciudad.recursos[i] -= coste[i]
		}
	}


}

function canttropas(tropas){
	let sum = 0;
	for (let i = 0; i < tropas.length; i++)
		sum += tropas[i];
	return sum;

}


function Ciudad(tropas, edificios){
this.tropas = tropas;
this.edificios = edificios;
this.recursos = [100,100,100,0];
this.generar = [1000,1000,1000,10000];
this.almacenamiento = 333;
}

function subiredificio(numero){
	let posible = true;
	let coste = [];
	let shit = document.querySelector("#precio")
	shit.innerHTML = ""
	for (let i = 0 ; i < ciudad.recursos.length; i++){
		coste[i] = Math.ceil((Arrayedificios[numero].coste[i] * Arrayedificios[numero].puntos) * ciudad.edificios[numero]);
			shit.innerHTML += "coste -->" +  coste[i];
		if (coste[i] > ciudad.recursos[i])
			posible = false;
	}
	if (posible){
		ciudad.edificios[numero] ++;
		for (let i = 0 ; i < ciudad.recursos.length; i++){

			ciudad.recursos[i] -= coste[i]
		}
	}
}


function entrarayuntamiento(){
document.querySelector("#entrarayuntamiento").style.display = "block";
}
function salirayuntamiento(){
document.querySelector("#entrarayuntamiento").style.display = "none";
}

function entrarcuartel(){
document.querySelector("#entrarcuartel").style.display = "block";
}
function salircuartel(){
document.querySelector("#entrarcuartel").style.display = "none";
}


function edificios(mp,mm,mpl,t,al,c,a,m,ac,ay){
return [mp,mm,mpl,t,al,c,a,m,ac,ay];
}


function minapiedra(){  return new edificio(30,  1,   1.1, 1.1)}
function minamadera(){  return new edificio(30,  1.1, 1,   1.1)}
function minaplata(){   return new edificio(30,  1.1, 1.1, 1)}
function templo(){      return new edificio(100, 1.5, 1,   1.2)}
function almacen(){     return new edificio(50,  1,   1,   1)}
function cuartel(){     return new edificio(70,  1,   1.2, 1)}
function astillero(){   return new edificio(70,  1.5, 1.1, 1)}
function muro(){        return new edificio(80,  1.2, 1.1, 1)}
function academia(){    return new edificio(150, 1.5, 1.5, 1.5)}
function ayuntamiento(){return new edificio(120, 1.5, 1,   1.5)}

function edificio(puntos, piedra, madera, plata){
this.puntos = puntos;
this.coste = [piedra, madera, plata, 0];
}

function tropas(num1,num2,num3,num4,num5,num6){
return [num1,num2,num3,num4,num5,num6];
}


function hondero(){ return new tropa(4,0,2,1,1,0);}
function lancero(){ return new tropa(4,0,1,1,2,0);}
function hoplita(){ return new tropa(2,2,1,2,1,0);}
function monje(){ return new tropa(2,2,1,1,1,1);}
function arquero(){ return new tropa(0,4,2,1,1,0);}
function escudero(){ return new tropa(0,4,1,1,2,0);}

function catapulta(){ return new tropa(10,1,10,5,5,0);}
function ballesta(){ return new tropa(10,1,5,5,10,0);}
function ariete(){ return new tropa(10,10,5,10,5,0);}
function megaariete(){ return new tropa(15,15,10,10,10,0);}
function atalaya(){ return new tropa(1,10,10,5,5,0);}
function trampa(){ return new tropa(1,10,5,5,10,0);}

function tropa(atk,def,piedra,madera,plata,favor){
this.atk = atk;
this.def = def;
this.coste = [piedra, madera, plata, favor];
}

function dmgcuartel(tropas){
	let valor = 0;
	for (let i = 0; i < tropas.length; i++){
		valor += tropas[i] * Arraytropas[i].atk;
	}
	return valor;
}
function defcuartel(tropas){
	let valor = 0;
	for (let i = 0; i < tropas.length; i++){
		valor += tropas[i] * Arraytropas[i].def;
	}
	return valor;
}
