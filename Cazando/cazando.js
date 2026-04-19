let canvas = document.getElementById("juego");
let ctx = canvas.getContext("2d");

let btnarriba = document.getElementById("btnarriba");
let btnabajo = document.getElementById("btnabajo");
let btnderecha = document.getElementById("btnderecha");
let btnizquierda = document.getElementById("btnizquierda");

const VELOCIDAD = 15;

let gatox = 0;
let gatoy = 0;
let comidax = 0; 
let comiday = 0;  

const ALTO_GATO = 50;
const ANCHO_GATO = 50;
const ALTO_COMIDA = 30; 
const ANCHO_COMIDA = 30;

function graficar(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarGato() {
    graficar(gatox, gatoy, ANCHO_GATO, ALTO_GATO, "#6428f0");
}

function graficarComida() { // Cambiado de graficarRaton
    graficar(comidax, comiday, ANCHO_COMIDA, ALTO_COMIDA, "rgba(23, 77, 18, 0.27)");
}

function limpiarPantalla() {
    // Limpiamos el canvas para evitar que se vea el rastro del movimiento
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    graficarComida();
    graficarGato();
}

function iniciarJuego() {
    gatox = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoy = (canvas.height / 2) - (ALTO_GATO / 2);

    comidax = (canvas.width - 100) - (ANCHO_COMIDA);
    comiday = (canvas.height - 100) - (ALTO_COMIDA);

    limpiarPantalla();
}

function mover(direccion) {
    if (direccion === "arriba") {
        gatoy -= VELOCIDAD; 
    }
    if (direccion === "abajo") {
        gatoy += VELOCIDAD; 
    }
    if (direccion === "izquierda") {
        gatox -= VELOCIDAD;
    }
    if (direccion === "derecha") {
        gatox += VELOCIDAD;
    }
    limpiarPantalla();
}

document.getElementById("btnarriba").onclick = () => mover("arriba");
document.getElementById("btnabajo").onclick = () => mover("abajo");
document.getElementById("btnizquierda").onclick = () => mover("izquierda");
document.getElementById("btnderecha").onclick = () => mover("derecha");

iniciarJuego();


