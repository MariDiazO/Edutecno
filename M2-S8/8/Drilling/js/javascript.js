//menú de cajero automático

alert("Bienvenido a Banco Estado")
//Los clientes cuentan con un nombre, un identificador,clave y saldo de su cuenta.
class Cliente{ 
    constructor(nombre,identificador,clave,saldo){
        this.nombre = nombre
        this.identificador = identificador
        this.clave = clave
        this.saldo = saldo
    }
}
//pedir validación de identidad (identificador y clave)
var rutCliente = prompt("Ingrese su rut sin guión, ejemplo: 17034456k")
var claveCliente = prompt("Ingrese su clave")


var cliente = new Cliente("Flor Flores","18919818k","0007",40000)
var cliente = new Cliente("Pedro Piedra","178187178","2020",500000)
var cliente = new Cliente("Juan Juárez","198189198","4321",100000)

//los indices en programacion parten desde 0 (0,1,2)
var listaClientes ={ cliente1,cliente2,cliente3}

//pedir ingreso de datos
//ingrese el identificador y la clave
alert("Bienvenido a Banco Estado")
var rutCliente = prompt("Ingrese su rut sin guión, Ejemplo: 20212313K")
var claveCliente = prompt("Ingrese su clave")

//Si los datos no coinciden se mostrara un mensaje de error
var permiso = false
for (let index = 0; index < listaClientes.lenght; index++){
    if (listaClientes[index].rut == rutCliente && listaClientes[indice].clave == claveCliente) {
    permiso = true  
    alert("Hola, bienvenido"+listaClientes[indice].nombre) 
    cliente = listaClientes[indice]
    menu(cliente)
    break; 
    }
}

function menu(cliente){ //funcion menu que se repite internamente
    let opcion = ""
    do {
        let opcion = prompt("Seleccione una opción\n"+
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
                alert("Tu saldo final es" result);
        }
            break;
            case "3"://realizar depósito

            break;
            case "4"://Salir
            
            break;
            default: //no se cumple ningun caso, mensaje por default

            break;  
        }       
    } while (option != "4");//mientras opcion sea diferente de 4
}
