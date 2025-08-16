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
        console.log(amigos);
    }
}

// Limpia el campo del nombre
function limpiarCampoNombre(){
    document.getElementById("amigo").value = "";
}



