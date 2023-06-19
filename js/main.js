/* let bienvenido = prompt("Bienvenido! Ingrese: \n" + "1- Agregar stock")

if (bienvenido == 1) { 
    class stock {
        constructor(productos, cantidad){
            this.productos = productos
            this.cantidad = cantidad 
        }
        agregarStock(){
            const queCantidad = [prompt("Cuantos productos desea agregar: ")]
            for (let index1 = 0; index1 < queCantidad; index1++) {
            productos.push(prompt("Ingrese el producto que desee agregar al stock: ").toUpperCase())
            cantidad.push(parseInt(prompt("Ingrese la cantidad del mismo: ")))
            }
        }
    }
    this.productos = []
    this.cantidad = []
    
    
    const cliente1 = new stock().agregarStock()
    
    let salida = ""
    
    for (let index = 0; index < cantidad.length; index++) {
        salida += "Stock del producto " + productos[index] + ": " + cantidad[index] + "\n"; 
    }
    
    
    cantidad.forEach(function a (cantidad, i){
        salida += "Stock del producto " + this.productos[i] + ": " + cantidad + " unidades" + "\n";
    })
    
    alert(salida) 
    
    
} else if (bienvenido == null){
    alert("Gracias por ingresar!")
}else{
    alert("Ingrese una de las opciones validas!")
}   */   


function renderizarProducto(producto) {
    let lista = document.querySelector('#listadoProductos')
    let divProducto = document.createElement("div")
    divProducto.classList.add("producto")
    divProducto.innerHTML = `<li>${producto}</li>`
    lista.append(divProducto)
}

var numeros="0123456789";

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

function mostrarInput() {

    let inputProducto = document.getElementById("1").value
    let alerta =  document.getElementById("alerta")
    if(tiene_numeros(inputProducto)){
        alerta.innerHTML = "<p class='alertaTexto'> SOLO SE PUEDEN INGRESAR LETRAS </p>"
        return
    } else {
        alerta.innerHTML = ''
        productos.push(inputProducto)
        localStorage.setItem("productos", JSON.stringify(productos))
        renderizarProducto(inputProducto)
    }
}

if(productos.length > 0){
    for (const producto of productos) {
        renderizarProducto(producto)
    }
} 

function vaciarProductos () {
    let lista = document.getElementById('listadoProductos')
    lista.innerHTML = ''
    for (let index = 0; index < productos.length; index++) {
        productos.pop()
    }
    localStorage.clear()
}


