let queryString = window.location.search

let objetoQuery = new URLSearchParams(queryString)

let artistaId = objetoQuery.get('id')

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + artistaId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

     
        let artista = datos.data
        console.log(datos)

        document.querySelector('#Contenedor-Foto').innerHTML += `<div id="Foto"><img src="`+datos.picture+`" id="Imagen" alt="artista"></div></div>`

        document.querySelector('#Contenedor-Nombre-Seguidores').innerHTML += `<div id="Nombre-Seguidores" align="center">
        <div id="Nombre">`+datos.name+`</div>
        <div id="Punto">-</div>
        <div id="Seguidores">`+datos.nb_fan+` seguidores</div>`
        
    
        


    })

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' +artistaId+ '/top')
.then(function(respuesta){
    return respuesta.json();
})
.then(function(datos){

 
    let temas = datos.data
    console.log(datos)

   
   for(const dat of temas){document.querySelector('#Lista').innerHTML += `<li><a href="ProyectoIdetalletrack.html?id=`+dat.id+`">`+dat.title+`</a></li>` ;}

    

})
