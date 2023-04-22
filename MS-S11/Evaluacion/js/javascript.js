//consumiendo datos con fetch api
//declaracion para que se ejecute el javascript luego de que este cargado el documento
$(document).ready(function(){

    //agregar accion o evento click
    document.getElementById("formulario").addEventListener('submit', function(evento) { //()=> es abreviatura a function(), es una arrow function
        evento.preventDefault() //evitando que se ejecute algun evento existente, mientras realizamos la consulta
        
        //obtener el valor del input mediante el id
        var busqueda = document.getElementById("ingreso").value

        //validar si el elemento tiene datos o valores y si no asignar una pelicula por default
        if(busqueda.trim() === "" || busqueda == null){
            busqueda = "Castle in the sky"
        }   
    });
        //fetch api
});


