// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto 
//y añadirlo a la lista de amigos creada anteriormente.
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);

    if (nombre == ''){
        alert('Por favor, inserte un nombre.');
    }
        else {
            amigos.push(nombre); 
            console.log(amigos);
      
      
        }
        limpiarCaja();
return;
function limpiarCaja() {
    let valorCaja = document.getElementById("amigo");
    valorCaja.value = "";
    
}

}




