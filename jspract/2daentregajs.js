
let nombreUser = prompt(" Hola somos Limite Rugby, ingrese su nombre");

let edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18){
    alert("Puede acceder a la tienda de Limite Rugby");
}else { 
    alert("edad no valida para entrar a la tienda");
}

const productos = [
    { nombre: "Remera", precio: 8000},
    { nombre: "Short", precio: 5000},
    { nombre: "Medias", precio: 3500},
    { nombre: "Buzo", precio: 8500},
    { nombre: "Botines", precio: 15000},
    { nombre: "Casco", precio: 4000},
];

let carrito = [];

let seguir = prompt(`Hola ${nombreUser} desea comprar alguna prenda? (Escriba Si o No)`)

while(seguir != "si" && seguir != "no"){
    alert("Ingresa si o no")
    seguir = prompt("Desea comprar alguna prenda? (Escriba si o no)")
}

if(seguir == "si"){
    let productosMuestra = productos.map(
    (productos) => productos.nombre + " " + "$" + productos.precio
    );
    alert(productosMuestra.join(" - "))
}   else if (seguir == "no"){
    alert("gracias por su compra en Limite Rugby,");
}

while(seguir != "no"){
    let producto = prompt("escribe el nombre de la prenda que quieras comprar");
    let precio = 0;

    if(producto == "Remera" || producto == "Short" || producto == "Medias" || producto == "Buzo" || producto == "Botines" || producto == "Casco"){
        switch (producto) {
            case "Remera":
                precio = 8000;
            break
            case "Short":
                precio = 5000;
            break
            case "Medias":
                precio = 3500;
            break
            case "Buzo":
                precio = 8500;
            break
            case "Botines":
                precio = 15000;
            break
            case "Casco":
                precio = 4000;
            break
            default:
            break;
        }

    let unidades = parseInt(prompt("Escribe las unidades que llevaras de este producto"));
    carrito.push({producto, unidades, precio});
    console.log(carrito);
    } 

    seguir = prompt("quieres seguir con la compra?")

    while(seguir === "no"){
        alert("Gracias, este es el monto final")
        carrito.forEach((carritoFinal) => {
            console.log(`productos: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},total a pagar  ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.unidades, 0)
alert(`${nombreUser} el monto final de su compra es: ${total}.`)
