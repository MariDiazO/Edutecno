//establecer variables con elementos id=tabla , id=contenido
let tabla= document.getElementById("tabla");
let contenido= document.getElementById("contenido");
let carta = document.getElementById("carta");
//consumir API con fetch
fetch('https://digimon-api.vercel.app/api/digimon')
.then(response => response.json())
.then(data=>{
    console.log(data);
    mostrarTabla(data);
}).catch(error => console.log(error))

//funcion obtener datos digimon y mostrarlo en id=Tabla id=Contenido
function mostrarTabla(response){
    
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
        //ocultar id ="tabla" y "body" 
        document.getElementById("tabla").style.display = "none";
        document.getElementById("contenido").style.display = "none";
    
    //limpiar el elemento con id contenido
    tabla.innerHTML = "";
    contenido.innerHTML = "";
    carta.innerHTML = "";
    //recorrer datos digimon de la api
    for(let temp of params){
        carta.innerHTML += 
        `<div class="card col-sm-12 col-md-6 mx-auto" style="width: 18rem;">
            <img src="${temp.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${temp.name}</h5>
            <p class="card-text">Nivel: ${temp.level}</p>
            </div>
        </div>`
         
        }
    }