// Definimos los clientes y sus datos
var cliente1 = { nombre: "Flor Flores", rut: "18919818k", clave: "ff11", saldo: 40000 };
var cliente2 = { nombre: "Pedro Piedra", rut: "178187178", clave: "pp22", saldo: 500000 };
var cliente3 = { nombre: "Juan Juárez", rut: "198189198", clave: "jj33", saldo: 100000 };

// Función para validar la identidad del cliente
function validarIdentidad() {
  alert("Bienvenido a Banco Estado")
  var rutIngresado = prompt("Ingrese su RUT");
  var claveIngresada = prompt("Ingrese su clave");
  for (var i = 1; i <= 3; i++) {
    var cliente = eval("cliente" + i);
    if (cliente.rut === rutIngresado && cliente.clave === claveIngresada) {
      return cliente;
    }
  }
  
  alert("Los datos ingresados no son correctos, intente nuevamente");
  return validarIdentidad();
}

// Función para mostrar el menú
function menu(cliente) {
  var opcion;
  do {
    opcion = prompt("Seleccione una opción\n1. Ver saldo\n2. Realizar giro\n3. Realizar depósito\n4. Salir");
    switch (opcion) {
      case "1":
        alert("Su saldo es: $" + cliente.saldo);
        break;
      case "2":
        var montoGiro = prompt("Ingrese el monto a girar");
        if (montoGiro <= cliente.saldo) {
          cliente.saldo -= montoGiro;
          alert("Se ha girado $" + montoGiro + "\nSu nuevo saldo es: $" + cliente.saldo);
        } else {
          alert("No tiene suficiente saldo para realizar el giro");
        }
        break;
      case "3":
        var montoDeposito = prompt("Ingrese el monto a depositar");
        cliente.saldo += parseInt(montoDeposito);
        alert("Se ha depositado $" + montoDeposito + "\nSu nuevo saldo es: $" + cliente.saldo);
        break;
      case "4":
        alert("Gracias por preferirnos");
        break;
      default:
        alert("Opción no válida");
    }
  } while (opcion !== "4");
}

// Ejecutar el programa
var clienteIngresado = validarIdentidad();
menu(clienteIngresado);
