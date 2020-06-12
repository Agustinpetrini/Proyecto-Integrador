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

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + generoId + '/artists')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

     
        let almacen = datos.data
        console.log(almacen)
        
        for (let index = 1; index < 10; index++) {
            document.querySelector('#artistas-recomendados').innerHTML += `<a href="detalle-artista.html?id=`+almacen[index].id+`"><div class="artistas">
            <img src="`+almacen[index].picture+`" alt="artista" height="264" width="264">
            <div class="show-more">`+almacen[index].name+`</div>
            </div></a>` ;
            
        }



        


    })
  


