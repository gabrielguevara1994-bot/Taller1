let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const VELOCIDAD = 15;

let gatox = 0;
let gatoy = 0;
let comidax = 0; 
let comiday = 0;  

const ALTO_GATO = 50;
const ANCHO_GATO = 50;
const ALTO_COMIDA = 30; 
const ANCHO_COMIDA = 30;

function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarGato() {
    graficarRectangulo(gatox, gatoy, ANCHO_GATO, ALTO_GATO, "#6428f0");
}

function graficarComida() { 
    graficarRectangulo(comidax, comiday, ANCHO_COMIDA, ALTO_COMIDA, "rgba(23, 77, 18, 0.27)");
}

function limpiarCanvas() {
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    graficarComida();
    graficarGato();
}

function iniciarJuego() {
    gatox = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoy = (canvas.height / 2) - (ALTO_GATO / 2);

    comidax = (canvas.width - 100) - (ANCHO_COMIDA);
    comiday = (canvas.height - 100) - (ALTO_COMIDA);

    limpiarCanvas();
}

const LIMITE_X=canvas.width-ANCHO_GATO;
const LIMITE_Y=canvas.height-ALTO_GATO;

function moverIzquierda(){
    if(gatox>0){
    gatox-=10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    }
}

function moverDerecha(){
    if(gatox<LIMITE_X){
    gatox+=10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
}
}

function moverArriba(){
    if(gatoy>0){
    gatoy-=10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    }
}

function moverAbajo(){
    if(gatoy<LIMITE_Y){
    gatoy+=10;
    limpiarCanvas();
    graficarGato();
    graficarComida();}
}

document.getElementById("btnarriba").onclick = () => moverArriba();
document.getElementById("btnabajo").onclick = () => moverAbajo();
document.getElementById("btnizquierda").onclick = () => moverIzquierda();
document.getElementById("btnderecha").onclick = () => moverDerecha();





