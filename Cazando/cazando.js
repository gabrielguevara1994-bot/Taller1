let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");


const VELOCIDAD = 10; 
let gatox = 0;
let gatoy = 0;
let comidax = 0; 
let comiday = 0;  

const ALTO_GATO = 50;
const ANCHO_GATO = 50;
const ALTO_COMIDA = 30; 
const ANCHO_COMIDA = 30;

const LIMITE_X = canvas.width - ANCHO_GATO;
const LIMITE_Y = canvas.height - ALTO_GATO;


let puntos = 0;
let tiempo = 20;
let intervaloTiempo;


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


function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    graficarComida();
    graficarGato();
}


function iniciarJuego() {
    puntos = 0;
    tiempo = 20;
    document.getElementById("puntos").innerText = puntos;
    document.getElementById("tiempo").innerText = tiempo;
    document.getElementById("mensaje").innerText = "";

   
    gatox = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoy = (canvas.height / 2) - (ALTO_GATO / 2);

    
    posicionarComidaAleatoria();

    limpiarCanva();
    
   
    clearInterval(intervaloTiempo);
    intervaloTiempo = setInterval(restarTiempo, 1000);
}


function moverIzquierda() {
    if (gatox > 0 && tiempo > 0 && puntos < 6) {
        gatox -= 10;
        procesarMovimiento();
    }
}

function moverDerecha() {
    if (gatox < LIMITE_X && tiempo > 0 && puntos < 6) {
        gatox += 10;
        procesarMovimiento();
    }
}

function moverArriba() {
    if (gatoy > 0 && tiempo > 0 && puntos < 6) {
        gatoy -= 10;
        procesarMovimiento();
    }
}

function moverAbajo() {
    if (gatoy < LIMITE_Y && tiempo > 0 && puntos < 6) {
        gatoy += 10;
        procesarMovimiento();
    }
}


function procesarMovimiento() {
    limpiarCanva();
    detectarColision();
}


function detectarColision() {
    
    if (gatox < comidax + ANCHO_COMIDA &&
        gatox + ANCHO_GATO > comidax &&
        gatoy < comiday + ALTO_COMIDA &&
        gatoy + ALTO_GATO > comiday) {
        
        puntos++;
        document.getElementById("puntos").innerText = puntos;
        
        if (puntos >= 6) {
            finalizarJuego("¡Ganaste! 🏆");
        } else {
            posicionarComidaAleatoria();
            limpiarCanva();
        }
    }
}

function posicionarComidaAleatoria() {
   
    comidax = Math.floor(Math.random() * (canvas.width - ANCHO_COMIDA));
    comiday = Math.floor(Math.random() * (canvas.height - ALTO_COMIDA));
}




document.getElementById("btnarriba").onclick = () => moverArriba();
document.getElementById("btnabajo").onclick = () => moverAbajo();
document.getElementById("btnizquierda").onclick = () => moverIzquierda();
document.getElementById("btnderecha").onclick = () => moverDerecha();





