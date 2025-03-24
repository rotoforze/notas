const botonAbrirNuevaNota = document.querySelector(".btn-nueva-nota");
const post = document.querySelector(".post");
const cerrar = document.querySelector(".cerrar");



function abrirMenu() {
    post.setAttribute("style", "display: flex;");
}

function cerrarMenu() {
    post.setAttribute("style", "display: none;");
}

cerrarMenu();

cerrar.addEventListener("click", cerrarMenu, true);
botonAbrirNuevaNota.addEventListener("click", abrirMenu, true);