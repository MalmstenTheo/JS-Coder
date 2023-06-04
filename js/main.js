
const bienvenido = prompt("Bienvenido! Que accion desea realizar? \n" + "1- Agregar stock \n" + "2- Quitar stock") 

if (bienvenido == 1) {
    const queCantidad = [prompt("Cuantos productos desea agregar: ")]
    class stock {
        constructor(productos){
            this.productos = productos
        }
        agregarStock(){
            for (let index = 0; index < queCantidad; index++) {
            productos.push(prompt("Ingrese el producto que desee agregar al stock: "))
            productos.push(prompt("Ingrese la cantidad del mismo: "))
            }
        }
    }
    this.productos = []
    
    const cliente1 = new stock().agregarStock()
    
    const productosLista = productos.join(" - ")
    alert("Usted sumara al stock: \n" + productosLista)
    
}else if(bienvenido == 2){
    alert("En proceso!")
} else if (bienvenido == null){
    alert("Gracias por ingresar!")
}else{
    alert("Ingrese una de las opciones validas!")
}  

