const dom = document.querySelectorAll("#tropas>td");
const domrec = document.querySelectorAll("#recursos>td");
const dom2 = document.querySelectorAll("#tropas2>td");
const Arraytropas = [new hondero(), new lancero(), new hoplita(), new monje(), new arquero(), new escudero()]
const ciudad = new Ciudad(new tropas(0,0,0,0,0,0))
const ciudad2 = new Ciudad(new tropas(0,0,0,100,0,0))
console.log(ciudad)
console.log(ciudad.tropas)

let domActualize = setInterval(actualize, 100)
function actualize(){
	let i = 0;
	while (i < ciudad.tropas.length){
		dom[i].innerHTML = ciudad.tropas[i];
		i++;
	}
	dom[i].innerHTML = "<b>" + dmgcuartel(ciudad.tropas) + "<b>";
	i++;
	dom[i].innerHTML = "<b>" + defcuartel(ciudad.tropas) + "<b>";
	
	let j = 0;
	while (j < ciudad2.tropas.length){
		dom2[j].innerHTML = ciudad2.tropas[j];
		j++;
	}
	dom2[j].innerHTML = "<b>" + dmgcuartel(ciudad2.tropas) + "<b>";
	j++;
	dom2[j].innerHTML = "<b>" + defcuartel(ciudad2.tropas) + "<b>";

	for (let k = 0 ; k < ciudad.recursos.length ; k++)
		domrec[k].innerHTML = ciudad.recursos[k];
}



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
		if (coste > ciudad.recursos[i])
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


function Ciudad(tropas){
this.tropas = tropas;
this.recursos = [1000,1000,1000,100];
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