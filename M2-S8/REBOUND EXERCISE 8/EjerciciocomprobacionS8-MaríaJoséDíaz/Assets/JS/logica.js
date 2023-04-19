//Operaciones matemáticas
//Establecer variables
var opcion, num1, num2;

//Función DO WHILE
do {
    opcion = prompt("Seleccione que desea hacer: \n"+
            "1.- Calcular cual número es mayor\n"+
            "2.- Sumar\n"+
            "3.- Restar\n"+
            "4.- Multiplicar\n"+
            "5.- Dividir\n"+
            "6.- Mostar los números ingresados\n"+
            "7.- Salir");

    //Función IF (Si el usuario ingresa una opcion del 1 al 6, solicitará el ingreso de dos números)
    if(opcion != 7 && opcion >= 1 && opcion < 7){
        num1 = parseInt(prompt("Ingrese el primer número")) //Parsear los numeros a tipo int(?)
        num2 = parseInt(prompt("Ingrese el segundo número"))
    }
    //Funcion SWITCH CASE (Evaluar la acción a tomar segun el ingreso, en cada caso)
    switch (opcion) {
        case "1": //Calcular cual número es mayor
            mayor(num1,num2); // mayor(parametros, parametros)
            break;
        case "2"://suma
            suma(num1,num2)
            break;
        case "3"://restar
            restar(num1,num2)
            break;
        case "4"://multiplicar
            multiplicar(num1,num2)
            break;
        case "5"://dividir
            var resultado = dividir(num1,num2);
            alert("La división de los números es: "+resultado);
            break;
        case "6"://mostrar numeros
            //las funciones, pueden recibir los valores directamente retornados de otra funcion
            alert(mostrar(num1,num2))
            break;
        case "7"://salir
            alert("Gracias por participar")
            break;
        default://opcion por default
            alert("Elección incorrecta. Intente nuevamente")
            break;
        }
} while (opcion != "7"); //Desplegar el menu mientras la opcion no sea = 7

// funcion para evaluar cual numero es mayor
function mayor(numero1,numero2) {
    if(numero1 > numero2){ //si la condicion se cumple, numero1 es mayor a numero2
        alert(numero1 + " es mayor que " + numero2)
    }else if(numero1 === numero2){// si no, es estrictamente igual?, con ===
        alert("Los números son iguales")
    }else{ //no sucede lo anterior?, se ejecuta las reglas del else
        alert(numero2 + " es mayor que " + numero1)
    }
}
// funcion para sumar
function suma(numero1,numero2) {
    var resultado = numero1 + numero2
    //alert(suma)
    alert("La suma de los números es: "+resultado);
}

// funcion para restar
function restar(a, b) {
    var resultado = a - b;
    alert("La resta de los números es: "+resultado)
}

//funcion para multiplicar
function multiplicar(num1,num2){
    var multiplicar = num1 * num2;
    alert("La multiplicación de los números es: "+num1*num2)
}

//funcion para dividir
function dividir(variable1, variable2) {
    var condicion = true    
    do {
        if (variable1!=0 && variable2 != 0) {
            condicion = false
        return variable1 / variable2;// declarando un retorno para la funcion
    } else {
        alert("No es posible dividir por 0. Ingrese otro número.")
        variable1 = parseInt(prompt("Ingrese el primer número"))
        variable2 = parseInt(prompt("Ingrese el segundo número")) }
    } while (condicion); //mientras la condicion sea verdadera, se ejecuta la funcion
} 
//funcion para mostrar los números en un mensaje
function mostrar(ingreso1, ingreso2){
    return "Los números ingresados son "+ingreso1 + " y " +ingreso2;

}