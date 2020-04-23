

//           RELOJ
var myVar = setInterval(myTimer, 1000);

function myTimer() {
	var d = new Date();
	document.getElementById("reloj_tiempo").innerHTML = d.toLocaleTimeString();
}

//          CRONOMETRO

var time = setInterval(startTimer, 1000);

var mins = 0;
var hours = 0;
var segs = 0;

var started = false;

function start_timer(){
	started = true;
}

function startTimer(){
	if (started){
		segs ++;
	}
		document.getElementById("crono_tiempo").innerHTML = HMS();
}
function resetTimer(){
	segs = 0;
	mins = 0;
	hours = 0;
}
function stopTimer(){
	started = false;
}

function HMS(){
	if (segs >= 60){
		mins ++;
		segs = 0;
	}
	if (mins >= 60){
		hours ++;
		mins = 0;
	}
return (hours + ":" + mins + ":" + segs);
}

//          TEMPORIZADOR




var crono = setInterval(Timer, 1000);
var cronoon = false;
function Timer() {
	if (cronoon && tempo > 0){
		tempo --;
		document.getElementById("tiempo_tiempo").innerHTML = tempo;
	}
}

var tempo;
var text;
function cuentaAtras() {

  tempo = document.getElementById("tiempo_t").value;

  if (isNaN(tempo) || tempo <= 0 || tempo == null) {
    text = "Inseta un numero valido";
	cronoon = false;
  } else {
    cronoon = true;
  }
  document.getElementById("tiempo_tiempo").innerHTML = text;
}







