const feed = document.querySelector(".feed");
const nota = document.querySelector(".nuevaNota");
const sinNotas = document.querySelector(".sinNotas");

function getId(item) {
    let id = "";

    for (let i = item.className.length-1; i>item.className.length-4;i--) {
        if (item.className.charAt(i) == "n") {
            return id;
        }
        id = item.className.charAt(i)+id;
    }

    return null;
}

function avisoSinNotas(boolean) {
    if (boolean) {
        sinNotas.setAttribute("style", "display: flex;");
    }else if(!boolean) {
        sinNotas.setAttribute("style", "display: none;");
    }
}

function borrarFeed() {
    while (feed.childElementCount > 0) {
        feed.firstChild.remove();
    }
}

export function borrar() {
    const id = Number(getId(this));
    if (id <= Number(localStorage.clickCount)) {
        localStorage.removeItem("nota"+id);
        console.log("se borró");
        document.querySelector(".nota"+id).remove();
    }else {
        console.log("no se encontró la nota");
    }

    if (feed.firstElementChild.outerHTML === sinNotas.outerHTML || feed.childElementCount === 1) {
        console.log("in")
        avisoSinNotas(true);
    }
    
}

export function ponerEventoAlBoton(id) {
    // console.log(id);
    // console.log(typeof id);
    id = Number(id);
    const boton = document.querySelector(".btn"+id);
    // console.log(boton);
    boton.addEventListener("click", borrar, true);
}

export function mandarAlFeed() {
    const texto = nota.value;
    if (texto == "") {
        // no pintamos una nota vacía
        return null;
    }
    if (localStorage.clickCount == undefined){
        localStorage.clickCount = 0;
    } 
    if (feed.firstElementChild.outerHTML === sinNotas.outerHTML) {
        avisoSinNotas(false);
    }

    // creamos el elemento que será la caja que contenga la nota.
    const nuevoContenedorNota = document.createElement("div");
    nuevoContenedorNota.setAttribute("class", "contenedor-nota nota"+localStorage.clickCount);

    // ponemos la nota con el texto
    const nuevaNota = document.createElement("span");
    nuevaNota.setAttribute("class", "nota text-wrap text-break");
    nuevaNota.innerHTML = texto;
    nuevoContenedorNota.appendChild(nuevaNota);
    
    // la linea que separa
    const separador = document.createElement("div");
    separador.setAttribute("class", "separador");
    nuevoContenedorNota.appendChild(separador);


    // los datos, del creador y de la fecha
    const datos = document.createElement("div");
    datos.setAttribute("class", "datos");
    
    // creador
    const autor = document.createElement("span");
    autor.setAttribute("class", "autor blockquote-footer");
    autor.innerHTML = "Usted";
    datos.appendChild(autor);

    // fecha
    const elementoFecha = document.createElement("span");
    elementoFecha.setAttribute("class", "fecha blockquote-footer");
    const fechaActual = new Date();

    const hora = fechaActual.getHours() < 10 ? "0"+fechaActual.getHours() : fechaActual.getHours();
    const minutos = fechaActual.getMinutes() < 10 ? "0"+fechaActual.getMinutes() : fechaActual.getMinutes();
    
    elementoFecha.innerHTML = fechaActual.toLocaleDateString() + " " + hora +":"+ minutos;
    datos.appendChild(elementoFecha);

    nuevoContenedorNota.appendChild(datos);

    // botón borrar
    // no funciona?
    const contenedorBtnBorrar = document.createElement("div");
    contenedorBtnBorrar.setAttribute("class", "botonBorrar d-flex flex-row-reverse");

    const btnBorrar = document.createElement("button");
    btnBorrar.setAttribute("class", "borrarItem btn btn-danger "+"btn"+localStorage.clickCount);
    // console.log(btnBorrar.addEventListener("click", borrar, false));
    
    
    const icono = document.createElement("i");
    icono.setAttribute("class", "bi bi-trash-fill");
    btnBorrar.appendChild(icono);
    contenedorBtnBorrar.appendChild(btnBorrar);
    nuevoContenedorNota.appendChild(contenedorBtnBorrar);
    
    // aumentamos el id de la nota y añadimos la nota
    // console.log(nuevoContenedorNota)
    aniadirALocalStorage(nuevoContenedorNota.outerHTML);

    nota.value = "";
}

function aniadirALocalStorage(nota) {
    localStorage.setItem("nota"+localStorage.clickCount, nota);
    localStorage.clickCount++;
    borrarFeed();
    pintarTodo();
}

function ponerBotones() {
    let flag = localStorage.clickCount;
    // flag++;
    if (localStorage.length > 1) {
        while (flag >= 0) {
            if (localStorage.getItem("nota"+flag)){
                ponerEventoAlBoton(flag);
            }
            flag--;
    
        }
    }
}

export function pintarTodo() {
    let flag = localStorage.clickCount;
    flag++;
    if (localStorage.length > 2) {
        avisoSinNotas(false);
        while (flag >= 0) {
            if (localStorage.getItem("nota"+flag)){
                feed.innerHTML += localStorage.getItem("nota"+flag);
            }
            flag--;
    
        }
    }
    ponerBotones();
    // no hay notas o se terminó
    return false; 
}