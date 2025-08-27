// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto 
//y añadirlo a la lista de amigos creada anteriormente.

let amigos = []

function agregarAmigo(Elemento, texto) {
    let nombre = String(document.getElementById('amigo').value);
    
    console.log(nombre);

    if (nombre == ''){

alert("Por favor, inserte un nombre.")
        return;
}
function mostrarLista() {
    let lista = document.querySelector("# listaAmigos");
    lista.innerHTML = "";


}
    amigos.push(nombre);
    
    console.log(amigos);

    



 
 
 };
    
    


