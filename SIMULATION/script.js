
class Arbol {

	constructor(generacion, numero){
		mapa.innerHTML += '<div id = "arbol' + numero + '" class = "arbol"><div class = "tronco"></div><div class = "hojas"></div><p>' + generacion + '</p></div>';

		this.generacion = generacion;
		this.numero = numero;
		this.DOM = document.querySelector("#arbol" + numero);
		this.posicionx = Math.random()*500;
		this.posiciony = Math.random()*500;
		this.vida = Math.random()*300;
		this.interval = setInterval(this.moverArbol, 200);

		console.log(numero, generacion)
		console.log(this.DOM);
	}
	moverArbol(){

		this.posicionx += ((Math.random()*20) - 10);
		this.posiciony += ((Math.random()*20) - 10);


		if (this.posicionx < 1) this.posicionx = 1;
		if (this.posicionx > 450) this.posicionx = 450;
		if (this.posiciony < 1) this.posiciony = 1;
		if (this.posiciony > 450) this.posiciony = 450;	

		this.DOM.style.top = posicionx + "px";
		this.DOM.style.left = posiciony + "px";

		this.vida--;
		if (vida < 0) morir();
	}
	morir(){
		clearInterval(this.interval);
		mapa.removeChild(this.DOM);
	}
}


const mapa = document.querySelector("#suelo");


let arboles = 40;
const arbol = [];






for (let i = 0; i < arboles; i++){
arbol[i] = new Arbol(1,i);
}

function reproducir(numero){


}

function stop(){

clearInterval(interval);
}

