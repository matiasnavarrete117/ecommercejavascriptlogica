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
        this.productos.push(producto)
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

    switch (key) {
        case 1:
            bandera
            break;
    
        default:
            break;
    }
}