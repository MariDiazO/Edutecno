//Botón
var boton = document.getElementById("boton")

//Evento click
boton.addEventListener('click',()=>{ //()=> es abreviatura a function(), es una arrow function
    //Fetch api
    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then(response => response.json())//se obtiene el json de la respuesta
    .then(data =>{// a esos datos se le llama con una variable data
        console.log(data)//impresion en consola para verificacion
        //se obtiene el elemento con el id texto, donde se inyectara la data obtenida
        var texto = document.getElementById("texto")
        //inyectar el valor o texto al elemento obtenido con innerHTML
        texto.innerHTML = data.joke //asi se muestra en el navegador
    }).catch(error => console.log(error)) //pillar errores
});
