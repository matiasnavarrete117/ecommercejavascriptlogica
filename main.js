const productosLibreria = [
{nombre: "Joyero Caja Verde", precio: 12000, id: 1 },
{nombre: "Anillo Corazón Plata 925", precio: 6000, id: 2 },
{nombre: "Colgante de San Expedito", precio: 7000, id: 3},
{nombre: "Pendientes de Ángel", precio: 9000, id: 4},
]

class Producto{
    constructor(nombre, precio, id){
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
}

function creadoraDeProductos(){
    let auxArray = []

   for (let i = 0; i < productosLibreria.length; i++) {
    let productoAPartirDeClase = new Producto(productosLibreria[i].nombre, productosLibreria[i].precio, 
    productosLibreria[i].id)

    auxArray.push(productoAPartirDeClase)
    
   }

    return auxArray
}

const productosLibreriaClase = creadoraDeProductos()

class Carrito {
    constructor(){
        this.productos = []
        this.productosID = []
    }
    agregarProducto(producto){
        this.productos.push(productosLibreriaClase[id - 1])
    }

    listaArrayID(){
        for (let i = 0; i < productos.length; i++) {
            this.productosID.push(productos[i].id)
            
        }
    }

quitarProducto(id){
this.listaArrayID()
let index = this.productosID.indexOf(id)

     if (index == -1){ 
    alert ("No esta ese producto en el carrito")
     }else{
      this.productos.splice(index, 1)
     }
  }
}

const carritoInstance = new Carrito()
function coder(){
    let bandera = true
    while(bandera){
        let opciones = "Bienvenidos a Anvara Joyas \n 1-Ver productos \n 2-Comprar a partir de id \n 3-Ver carrito \n 4-Quitar producto a partir de un id \n 5- Comprar"
    }

    switch (opciones) {
        case 0:
            bandera = false
            break

        case 1:
            bandera = confirm ("¿Desea seguir operando?")
            break;

         case 2:
            let idAgregar = Number(prompt("¿Puede usted enviar el id del producto?"))
            carritoInstance.agregarProducto(idAgregar)
            bandera = confirm("¿Quiere seguir operando?")

         case 3:
            let idEliminar = Number(prompt("¿Puede usted enviar el id del producto?"))
            carritoInstance.quitarProducto(idAgregar)
           bandera = confirm ("¿Desea seguir operando?")
           break;

         case 4:
           bandera = confirm ("¿Desea seguir operando?")
           break;

          case 5:
            bandera = confirm ("¿Desea seguir operando?")
            break;

         default:
            alert("Esa opción no está disponible")
            bandera = confirm("¿Desea Seguir Operando?")
            break
        
    
        
    }
}