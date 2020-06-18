let queryString = window.location.search

let objetoQuery = new URLSearchParams(queryString)

let albumId = objetoQuery.get('id')

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/' + albumId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

     
        let albums = datos.data
        console.log(datos)
        let artist = datos.artist
        
        document.querySelector('#Nombre-p').innerHTML += `<h1>`+datos.title+`</h1>` ;
            
        document.querySelector('#Foto').innerHTML += `<img src="`+datos.cover+`" alt="Imagen del album" class="tamaño">` ;

        document.querySelector('#N-de-temas').innerHTML += `Número de canciones: `+datos.nb_tracks+``
        
        document.querySelector('#Artista').innerHTML += `De: <a href="detalle-artista.html?id=`+artist.id+`">`+artist.name+`</a>`

        document.querySelector('#Fecha').innerHTML += `Fecha de salida: `+datos.release_date+``

        document.querySelector('#Duracion').innerHTML += `Duración: `+datos.duration+` segundos`





    })


    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/' + albumId + '/tracks')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

        let track = datos.data
        console.log(track)

        for(const dat of track){


           document.querySelector('#Contenedor-Tracks').innerHTML += `<div id="Tracks"><div class="flex cancion"><a href="ProyectoIdetalletrack.html?id=`+dat.id+`"><i class="fas fa-play"></i></a>  <div id="Nombre-Track">`+dat.title+`</div> <i class="far fa-thumbs-up"></i><i class="far fa-thumbs-down"></i> `+dat.duration+` <i class="fas fa-ellipsis-v"></i></div></div>` ;


        }
        






    })