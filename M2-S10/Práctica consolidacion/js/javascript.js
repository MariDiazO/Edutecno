//consumiendo datos con fetch api

//obtener el elemento por id boton
var boton = document.getElementById("boton")

//agregar accion o evento click
boton.addEventListener('click',()=>{
    //Fetch api o peticion para obtener las frases
    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then(response => response.json())//se obtiene el json de la respuesta
    .then(data =>{// a esos datos se le llama con una variable data
        console.log(data)//impresion en consola para verificacion
        var texto = document.getElementById("texto")
        //inyectar el valor o texto al elemento obtenido con innerHTML
        texto.innerHTML = data.joke

    }).catch(error-log(error))//capturar un error y verlo en la consola
});