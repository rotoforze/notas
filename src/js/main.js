const botonAbrirNuevaNota = document.querySelector(".btn-nueva-nota");
const post = document.querySelector(".post");
const cerrar = document.querySelector(".cerrar");
const addNota = document.querySelector(".addNota");
const nota = document.querySelector(".nuevaNota");
const esp = document.querySelector(".esp");
const eng = document.querySelector(".eng");

function abrirMenu() {
    post.setAttribute("style", "display: flex;");
}

function cerrarMenu() {
    nota.value = "";
    post.setAttribute("style", "display: none;");
}

import { mandarAlFeed, pintarTodo } from "./gestorNotas.js";

function enviarNota() {
    mandarAlFeed();
    cerrarMenu();
    console.log(localStorage)
}

cerrarMenu();
pintarTodo();

function comprobarTeclado(event) {
    switch (event.key) {
        case 'Enter':
            enviarNota();
            break;
        case 'Escape':
            cerrarMenu();
        default:
            break;
    }
    
}

import { cambiarIdioma } from "./gestorIdiomas.js";

if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "es");
}

cambiarIdioma(localStorage.getItem("lang"));
esp.addEventListener("click", () => {cambiarIdioma("es")});
eng.addEventListener("click", () => {cambiarIdioma("en")});

cerrar.addEventListener("click", cerrarMenu, true);
botonAbrirNuevaNota.addEventListener("click", abrirMenu, true);
addNota.addEventListener("click", enviarNota, true);
nota.addEventListener("keydown", () => {comprobarTeclado(event);});