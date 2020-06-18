let queryString = window.location.search

let objetoQuery = new URLSearchParams(queryString)

let albumId = objetoQuery.get('id')

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + albumId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

     
        let albums = datos.data
        console.log(datos)
        let artist = datos.artist
        let album = datos.album
        
        document.querySelector('#Nombre-p').innerHTML += `<h1>`+datos.title+`</h1>` ;
            
        document.querySelector('#Foto').innerHTML += `<img src="`+album.cover+`" alt="Imagen del album" class="tamaño">` ;

        document.querySelector('#N-de-temas').innerHTML += `Album: `+album.title+``
        
        document.querySelector('#Artistas').innerHTML += `De: <a href="detalle-artista.html?id=`+artist.id+`">`+artist.name+`</a>`

        document.querySelector('#Duracion').innerHTML += `Duración: `+datos.duration+` segundos`

        document.querySelector('#Track').innerHTML += `<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=`+datos.id+`&app_id=1" width="100%" height="89"></iframe>`





    })