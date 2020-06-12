let queryString = window.location.search

let objetoQuery = new URLSearchParams(queryString)

let generoId = objetoQuery.get('id')

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + generoId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

     
        let generos = datos.data
        console.log(datos)
        
        document.querySelector('#Nombre-p').innerHTML += `<h1>`+datos.name+`</h1>` ;
            
        document.querySelector('#Foto').innerHTML += `<img src="`+datos.picture+`" alt="Imagen del genero">` ;
        


    })

