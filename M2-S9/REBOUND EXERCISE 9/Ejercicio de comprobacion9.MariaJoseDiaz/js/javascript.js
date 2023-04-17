//Al pasar el mouse por el primer <div>
//"text1" se mostrará en el segundo "text2"...
//...al salir de él, se ocultará nuevamente.

function mostrar(){

}
//nombrar o modificar un elemento por id
document.getElementById("text1").style.display = "block";

function ocultar(){
    document.getElementById("text2").style.display = "none"
}
//Al hacer click en el <div> id= "caja2"
//La imagen deberá agrandarse un 100%...
//al salir debe volver a su tamaño original
function zoomInOut() {
    var imagen = document.getElementById("img");
        if (imagen.style.width === "100%") {
        imagen.style.width = "20%"; // achica la imagen
        } else {
        imagen.style.width = "100%"; // agranda la imagen
        }
    }