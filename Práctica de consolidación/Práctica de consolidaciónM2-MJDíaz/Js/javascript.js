//establecer variables con elementos id=tabla , id=contenido
let tabla= document.getElementById("tabla");
let contenido= document.getElementById("contenido");
let carta = document.getElementById("carta");
let digicards = document.getElementById("digicards");

//consumir API con fetch
fetch('https://digimon-api.vercel.app/api/digimon')
.then(response => response.json())
.then(data=>{
    console.log(data);
    mostrarTabla(data);
}).catch(error => console.log(error))

//funcion obtener datos digimon y mostrarlo en id=Tabla id=Contenido
function mostrarTabla(response){
    document.getElementById("carta").style.display = "none";
    document.getElementById("digicards").style.display = "none";
    //limpiar el elemento con id contenido
    contenido.innerHTML = "";
    //recorrer datos digimon de la api
    for(let temp of response){
        contenido.innerHTML += // ` esta comilla francesa indica que html lea los datos temporales
        `<td>${temp.name}</td>
        <td>${temp.level}</td> 
        <td><img src="${temp.img}" alt"" width ="60px" heigth="60px"></td>
        `
        }
}

//Funcion para obtener los datos del digimon y mostrar el div = carta
//Utilizar fetch y el id busqueda en el input para obtener los datos en la carta
function mostrarCarta(){
    tabla = document.getElementById("tabla")
    contenido = document.getElementById("contenido")
    carta = document.getElementById("carta")
    digicards = document.getElementById("digicards")

    if(carta != null && tabla !=null && contenido !=null && digicards !=null){
    tabla.style.display = "none";
    contenido.style.display = "none";
    carta.style.display = "block";
    digicards.style.display = "none";
    }

    let busqueda=document.getElementById("busqueda").value.toLowerCase();
    //Funcion api con fetch
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${busqueda}`)
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            construirCarta(data); // invocando la funcion construirCarta(data)
        }).catch(error => console.log(error))
}
   //funcion para crear la carta del digimon dinamicamente
    function construirCarta(params) {
    //limpiar el elemento con id contenido
    carta.innerHTML = "";
    //tabla.innerHTML = "";
    //contenido.innerHTML = "";
    //digicards.innerHTML = "";
    //recorrer datos digimon de la api
    for(let temp of params){
        carta.innerHTML += 
        `<div class="card col-sm-12 col-md-6 mx-auto" style="width: 18rem;">
        <img class="card-img-top" src="${temp.img}" alt="Imagen" style="width:100%">
        <div class="card-body">
        <div class="card-title"><h4><b>${temp.name}</b></h4></div>
        <div class="card-text"><p>Nivel: ${temp.level}</p></div>
        </div>`
        }
    }
    //Mostrar todas las cartas
    function mostrarCartas(){
        tabla = document.getElementById("tabla")
        contenido = document.getElementById("contenido")
        carta = document.getElementById("carta")
        digicards = document.getElementById("digicards")
    
        if(carta != null && tabla !=null && contenido !=null && digicards !=null){
        tabla.style.display = "none";
        contenido.style.display = "none";
        carta.style.display = "none";
        digicards.style.display = "block";
        }
    
        //Funcion api con fetch
        fetch(`https://digimon-api.vercel.app/api/digimon`)
            .then(response => response.json())
            .then(data=>{
                console.log(data);
                construirCartas(data); // invocando la funcion construirCarta(data)
            }).catch(error => console.log(error))
    }
       //funcion para crear la carta del digimon dinamicamente
        function construirCartas(params) {
        //limpiar el elemento con id contenido
        digicards.innerHTML = "";
        //recorrer datos digimon de la api
        for(let temp of params){
            digicards.innerHTML += 
            `<div class="card col-sm-12 col-md-6 mx-auto" style="width: 18rem;">
            <img class="card-img-top" src="${temp.img}" alt="Imagen" style="width:100%">
            <div class="card-body">
            <div class="card-title"><h4><b>${temp.name}</b></h4></div>
            <div class="card-text"><p>Nivel: ${temp.level}</p></div>
            </div>`
            }
        }
