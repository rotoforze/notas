const nuevaNotaCabecera = document.querySelector(".nueva-nota-cabecera");
const nota = document.querySelector(".nuevaNota");
const btnNuevaNota = document.querySelector(".addNota");

const titulo = document.querySelector(".navbar-brand");
const idioma = document.querySelector(".dropdown-center");

const vacia = document.querySelector(".textoLibretaVacia");

const btnAbrirMenu = document.querySelector(".btn-nueva-nota");

export function cambiarIdioma(idm) {
    switch(idm) {
        case 'es':
            nuevaNotaCabecera.innerHTML = 'Añadir nota';
            nota.setAttribute("placeholder", "Escribe tu nota...");
            btnNuevaNota.innerHTML = "Publicar";

            titulo.innerHTML = "Notas📓";
            idioma.innerHTML = 'Idioma 🌍';

            vacia.innerHTML = "Vaya... ¡Aún no hay notas! ¿Por qué no intentas escribir una?";

            btnAbrirMenu.innerHTML = "Nueva nota";
            break;
        case 'en':
            nuevaNotaCabecera.innerHTML = 'Adding a note';
            nota.setAttribute("placeholder", "Write something...");
            btnNuevaNota.innerHTML = "Post";

            titulo.innerHTML = "Notebook📓";
            idioma.textContent = 'Language 🌍';

            vacia.innerHTML = "There's no notes... Try writing one!";

            btnAbrirMenu.innerHTML = "New note";
            break;
    }
    localStorage.setItem("lang", idm);
}