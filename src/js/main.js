const botonAbrirNuevaNota = document.querySelector(".btn-nueva-nota");
const post = document.querySelector(".post");
const cerrar = document.querySelector(".cerrar");
const addNota = document.querySelector(".addNota");


function abrirMenu() {
    post.setAttribute("style", "display: flex;");
}

function cerrarMenu() {
    post.setAttribute("style", "display: none;");
}

import { mandarAlFeed, pintarTodo } from "./gestorNotas.js";

function enviarNota() {
    mandarAlFeed();
    cerrarMenu();
}

cerrarMenu();
pintarTodo();

cerrar.addEventListener("click", cerrarMenu, true);
botonAbrirNuevaNota.addEventListener("click", abrirMenu, true);
addNota.addEventListener("click", enviarNota, true);