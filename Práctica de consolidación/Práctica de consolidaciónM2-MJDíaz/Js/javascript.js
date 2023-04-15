
//establecer variables con elementos id=tabla , id=contenido
var tabla= document.getElementById("tabla");
var contenido= document.getElementById("contenido");
console.log(tabla);//mostrar en consola con console.log
console.log(contenido);

//consumir API con fetch
fetch('https://digimon-api.vercel.app/api/digimon')
.then(response => response.json())
.then(data=>{
    console.log(data);
    mostrartabla(response);
}).catch(error => console.log(error))

//funcion obtener datos digimon y mostrarlo en id=Tabla id=Contenido
function mostrartabla(response){

//limpiar el elemento con id contenido
contenido.innerHTML = "";

//recorrer datos digimon de la api
for(let temp of response){
    contenido.innerHTML += // ` esta comilla francesa indica que html lea los datos temporales
    `<td>${temp.name}</td>
    <td>${temp.level}</td> 
    <td><img src="${temp.img}" alt"" width ="50px" heigth="50px"></td>
    `
    }

}