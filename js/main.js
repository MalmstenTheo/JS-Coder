let bienvenido = prompt("Bienvenido! Ingrese: \n" + "1- Agregar stock")

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
    
    /* for (let index = 0; index < cantidad.length; index++) {
        salida += "Stock del producto " + productos[index] + ": " + cantidad[index] + "\n"; 
    }*/
    
    
    cantidad.forEach(function a (cantidad, i){
        salida += "Stock del producto " + this.productos[i] + ": " + cantidad + " unidades" + "\n";
    })
    
    alert(salida) 
    
    
} else if (bienvenido == null){
    alert("Gracias por ingresar!")
}else{
    alert("Ingrese una de las opciones validas!")
}   

