// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let amigos = [];

// Implementa una función para agregar amigos
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if(amigo == ""){
        alert("El capo esta vacio, debe agregar un nombre.");
    }else{
        amigos.push(amigo);
        limpiarCampoNombre();
        mostrarAmigos();
        console.log(amigos);//BORRAR
    }
}

// limpia el campo del nombre
function limpiarCampoNombre(){
    document.getElementById("amigo").value = "";
}

// Crea elemento <li> en <ul> y muestra la lista de los nombres
function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        let elementoLi = document.createElement("li");
        elementoLi.textContent = amigos[i];
        lista.appendChild(elementoLi);
    }
}


