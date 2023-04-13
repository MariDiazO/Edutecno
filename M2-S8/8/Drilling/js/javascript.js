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


var cliente = new Cliente("Flor Flores","18656892k","0007",40000)
var cliente = new Cliente("Pedro Piedra","165436547","2020",500000)
var cliente = new Cliente("Juan Juárez","154342349","4321",100000)

//los indices en programacion parten desde 0 (0,1,2)
var listaClientes ={ cliente1,cliente2,cliente3}

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

//funcion menu que se repite internamente
function menu(cliente){
    let opcion = ""
    do {
        let opcion = prompt("Seleccione una opción\n"+
            "1.- Ver saldo\n"+
            "2.- Realizar giro\n"+
            "3.- Realizar depósitos\n"+
            "4,- Salir")
        switch (opcion) {
            case "1"://ver saldo
                alert("Su saldo actual es:"+cliente.saldo)
                break;
            case "2"://realizar giro
        
            break;
            case "3"://realizar deposito

            break;
            case "3"://salir
            
            break;
            default: //no se cumple ningun caso, mensaje por default

            break;  
        }       
    } while (condition);
}
//Luego podrá ver su saldo,...
//...realizar giros o...
//...depósitos
//si realiza giros su saldo se modificará