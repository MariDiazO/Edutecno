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
        
        //Fetch api
        fetch(`https://studio-ghibli-films-api.herokuapp.com/films`)
            .then(response => response.json())//se obtiene el json de la respuesta
            .then(data => {
                console.log(data);
                if (data.length > 0) {
                    tarjeta(data[0]);
                } else {
                    console.log("No se encontró ninguna película con ese título.");
                }
             }).catch(error => console.log(error));

             //funcion para inyectar datos en la tarjeta
             function tarjeta(pelicula) {
            var img = document.createElement("img")
            img.classList.add("card-img-top")
            img.src = pelicula.image
            divCard.appendChild(img)
            var titulo = document.createElement("h5")
            titulo.classList.add("card-title")
            titulo.textContent = pelicula.title
            divCardBody.appendChild(titulo)
            var descripcion = document.createElement("p")
            descripcion.classList.add("card-text")
            descripcion.textContent = pelicula.description
            divCardBody.appendChild(descripcion)
            var fechaLanzamiento = document.createElement("p")
            fechaLanzamiento.classList.add("card-text")
            fechaLanzamiento.innerHTML = "<strong>Fecha de lanzamiento:</strong> " + pelicula.release_date
            divCardBody.appendChild(fechaLanzamiento)
            var director = document.createElement("p")
            director.classList.add("card-text")
            director.innerHTML = "<strong>Director:</strong> " + pelicula.director
            divCardBody.appendChild(director)
            }
    });

});