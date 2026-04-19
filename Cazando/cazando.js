let canvas=document.getElementById("juego");
let ctx=canvas.getContext("2d");

let btnarriba=document.getElementById("btnarriba");
let btnabajo=document.getElementById("btnabajo");
let btnderecha=document.getElementById("btnderecha");
let btnizquierda=document.getElementById("btnizquierda");

const   VELOCIDAD=15

let gatox=0;
let gatoy=0;
let ratonx=0;
let ratony=0;

const ALTO_GATO=50;
const ANCHO_GATO=50;
const ALTO_RATON=30;
const ANCHO_RATON=30;

function graficar(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}

function graficarGato(){
    graficar(gatox,gatoy,ANCHO_GATO,ALTO_GATO,"#6428f0")
}

function graficarRaton(){
    graficar(ratonx,ratony,ANCHO_RATON,ALTO_RATON,"rgba(23, 77, 18, 0.27)")
}


function iniciarJuego(){
    gatox=(canvas.width/2)-(ANCHO_GATO)
    gatoy=(canvas.height/2)-(ALTO_GATO)

    ratonx=(canvas.width-100)-(ANCHO_RATON)
    ratony=(canvas.height-100)-(ALTO_RATON)

    graficarGato();
    graficarRaton();
}
iniciarJuego();

function mover(direccion){
    if(direccion==="arriba"){
        gatoy -=VELOCIDAD}
if(direccion==="abajo"){
        gatoy +=VELOCIDAD}
if(direccion==="izquierda"){
    gatox-=VELOCIDAD}
if(direccion==="derecha"){
    gatox+=VELOCIDAD}
graficarGato();
}

document.getElementById("btnarriba").onclick=()=> mover("arriba");
document.getElementById("btnabajo").onclick = () =>mover("abajo");
document.getElementById("btnizquierda").onclick = () => mover("izquierda");
document.getElementById("btnderecha").onclick = () => mover("derecha");


