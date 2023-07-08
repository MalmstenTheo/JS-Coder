
//VALIDACION DE NUMEROS

let numeros="0123456789";

function tiene_numeros(texto){
    for(i=0; i<texto.length; i++){
        if (numeros.indexOf(texto.charAt(i),0)!=-1){
            return true;
        }
    }
    return false;
}

const productos = JSON.parse(localStorage.getItem('productos')) || []

let error

if(productos.length > 0){
    for (const producto of productos) {
        renderizarProducto(producto)
    }
} 

//CONSUMIR API

let contenedor = document.getElementById("contenedorDos")
let salida = ""

fetch("https://jsonplaceholder.typicode.com/users")
.then(respuesta => respuesta.json())
.then(datos => {
    datos.forEach(persona => {
        salida += `<div> ${persona.name} | ${persona.phone} | ${persona.website} </div> <br> `
        contenedor.innerHTML = salida
    });
})   


