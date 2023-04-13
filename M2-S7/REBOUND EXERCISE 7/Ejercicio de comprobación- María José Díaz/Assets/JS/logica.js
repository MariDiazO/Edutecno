//Establecer variables
var numero1 = prompt("Ingrese el primer número");
var numero2 = prompt("Ingrese el segundo número");
//Parsear los numeros a tipo int
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
//Función IF ELSE
if(numero1 > numero2){
    alert(numero1 + " es mayor que " + numero2)
}else if(numero1 === numero2){
    alert("Los números son iguales")
}else{
    alert(numero2 + " es mayor que " + numero1)
}
