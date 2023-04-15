//menú de cajero automático
//Los clientes cuentan con un nombre, un identificador,clave y saldo de su cuenta.
class Cliente{ 
    constructor(nombre,identificador,clave,saldo){
        this.nombre = nombre
        this.identificador = identificador
        this.clave = clave
        this.saldo = saldo
    }
}
//establecer variantes
var cliente1 = new Cliente("Flor Flores","18919818k","ff11",40000)
var cliente2 = new Cliente("Pedro Piedra","178187178","pp22",500000)
var cliente3 = new Cliente("Juan Juárez","198189198","jj33",100000)

//los indices en programacion parten desde 0 (0,1,2)
var listaClientes =[cliente1,cliente2,cliente3]

//pedir ingreso de datos
//ingrese el identificador y la clave
alert("Bienvenido a Banco Estado")
var rutCliente = prompt("Ingrese su rut sin guión, Ejemplo: 20212313K")
var claveCliente = prompt("Ingrese su clave")

//Si los datos no coinciden se mostrara un mensaje de error
var permiso = false
var cliente
for (let indice = 0; indice < listaClientes.length; indice++) {
    if(listaClientes[indice].rut == rutCliente && listaClientes[indice].clave == claveCliente){
        permiso = true
        alert("Hola, bienvenido "+listaClientes[indice].nombre)
        cliente = listaClientes[indice]
        menu(cliente)
        break;
    }else{
        alert("No ha podido ingresar, datos incorrectos") 
    }
}
//un menú en el cual el usuario podrá decidir 
//que desea hacer (deposito, giro, ver su saldo o salir). 
//El menú se repite hasta que el usuario elija salir.
function menu(cliente) { //funcion menu que se repite internamente
    let opcion = ""
    do {
        opcion = prompt("Seleccione una opción\n"+
            "1.- Ver saldo\n"+
            "2.- Realizar giro\n"+
            "3.- Realizar depósitos\n"+
            "4,- Salir")
        switch (opcion) {
            case "1"://ver saldo
                alert("Su saldo actual es:"+cliente.saldo) //Luego podrá ver su saldo,...
                break;
            case "2"://realizar giros (el saldo se modificará)
                var a = document.getElementById("txtA").value;
                var b = document.getElementById("txtB").value;
                var result = parseInt(a) - parseInt(b);
                alert("Tu saldo final es"+result);
                 break;
            case "3"://realizar depósito

                break;
            case "4"://Salir
            
                break;
            default: //no se cumple ningun caso, mensaje por default

                break;  
        }
    }  while (option != "4");//mientras opcion sea diferente de 4
}

//for in es para recorrer objetos
// var object = { //objeto de tipo JSON
//     a: 1,// key:value
//     b: 2,
//     c: 3
// }
// for (const key in object) {
//     alert(object[key])
// }
