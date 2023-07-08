
let cantidad = [1]

function renderizarProducto(producto) {
    let lista = document.querySelector('#listadoProductos')
    let divProducto = document.createElement("div")
    divProducto.classList.add("producto")
    divProducto.innerHTML = `
    <li>${producto}</li> <div class="botonesLi">
    <li class="cantidad">Cantidad: ${cantidad}</li> 
    <button class="aumentar" onclick="sumar()">+</button>
    <button class="disminuir" onclick="restar()">-</button> 
</div> `
    lista.append(divProducto)
}

function mostrarInput() {
    let inputProducto = document.getElementById("1").value
    let alerta =  document.getElementById("alerta")
    if(tiene_numeros(inputProducto)){
        alerta.innerHTML = "<p class='alertaTexto'> SOLO SE PUEDEN INGRESAR LETRAS </p>"
        return
    }else if (inputProducto === "") {
        alerta.innerHTML = "<p class='alertaTexto'> DEBE INGRESAR TEXTO EN EL CAMPO </p>"
        return
    } else {
        alerta.innerHTML = '' //Desaparece alerta
        productos.push(inputProducto)
        localStorage.setItem("productos", JSON.stringify(productos))
        renderizarProducto(inputProducto)

        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1200,
            timerProgressBar: true,
        })
        
        Toast.fire({
            icon: 'success',
            title: 'Producto cargado correctamente'
        })
        document.getElementById("1").value = ""
    }
}

function vaciarProductos () {
    Swal.fire({
        title: 'Estas seguro que deseas eliminar el stock actual?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
        position: 'center',
        allowOutsideClick: false,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            let lista = document.getElementById('listadoProductos')
            lista.innerHTML = ''
            for (let index = 0; index < productos.length; index++) {
                productos.pop()
            }
            localStorage.clear()
        } else if (result.isDenied) {
            Swal.fire({
                icon: 'success',
                title: 'Productos no retirados del stock',
            })
        }
    })
}

//Enviar datos apretando enter

document.getElementById("1").addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        mostrarInput() 
    }
});
















/* function vaciarProductos () {
    let lista = document.getElementById('listadoProductos')
    lista.innerHTML = ''
    for (let index = 0; index < productos.length; index++) {
        productos.pop()
    }
    localStorage.clear()
} */
