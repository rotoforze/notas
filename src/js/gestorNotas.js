const feed = document.querySelector(".feed");
const nota = document.querySelector(".nuevaNota");

export function mandarAlFeed() {
    const texto = nota.value;
    
    if (texto == "") {
        // no pintamos una nota vacía
        return null;
    }
    if (localStorage.clickCount == undefined) localStorage.clickCount = 0;

    // creamos el elemento que será la caja que contenga la nota.
    const nuevoContenedorNota = document.createElement("div");
    nuevoContenedorNota.setAttribute("class", "contenedor-nota");

    const nuevaNota = document.createElement("span");
    nuevaNota.setAttribute("class", "nota text-wrap text-break");
    nuevaNota.innerHTML = texto;
    nuevoContenedorNota.appendChild(nuevaNota);
    
    const separador = document.createElement("div");
    separador.setAttribute("class", "separador");
    nuevoContenedorNota.appendChild(separador);

    const datos = document.createElement("div");
    datos.setAttribute("class", "datos");
    
    const autor = document.createElement("span");
    autor.setAttribute("class", "autor blockquote-footer");
    autor.innerHTML = "Usted";
    datos.appendChild(autor);

    const fecha = document.createElement("span");
    fecha.setAttribute("class", "fecha blockquote-footer");
    const fechaActual = new Date();
    fecha.innerHTML = fechaActual.toLocaleDateString() + " " + (fechaActual.getHours()) +":"+ (fechaActual.getMinutes());
    datos.appendChild(fecha);

    nuevoContenedorNota.appendChild(datos);

    // aumentamos el id de la nota y añadimos la nota
    console.log(nuevoContenedorNota)
    aniadirALocalStorage(nuevoContenedorNota.outerHTML);
    localStorage.clickCount++;

    feed.innerHTML = nuevoContenedorNota.outerHTML + feed.innerHTML;
    nota.value = "";

}

function aniadirALocalStorage(nota) {
    localStorage.setItem("nota"+localStorage.clickCount, nota);
}

export function pintarTodo() {
    let flag = localStorage.clickCount;
    while (flag >= 0) {

        if (localStorage.getItem("nota"+flag)){
            console.log(localStorage.clickCount)
            console.log(localStorage.getItem("nota"+flag))
            feed.innerHTML += localStorage.getItem("nota"+flag);
        }
        flag--;

    }
    
    // no hay notas
    return false; 
}

function comprobarNota(nota) {

    let flag = 0;
    while (flag <= localStorage.clickCount) {

        if (localStorage.getItem("nota"+flag) == nota){
            return true;
        }

    }
    
    // no se encontró nada
    return false;

}