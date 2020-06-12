fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let artistas = datos.data

    document.querySelector('#artistas-recomendados').innerHTML += `<a href="detalle-artista.html?id=`+datos.id+`"><div class="artistas">
    <img src="`+datos.picture+`" alt="artista" height="264" width="264">
    <div class="show-more">`+datos.name+`</div>
    </div></a>`
        
       
        


    })

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/13')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let artistas = datos.data

    document.querySelector('#artistas-recomendados').innerHTML += `<a href="detalle-artista.html?id=`+datos.id+`"><div class="artistas">
    <img src="`+datos.picture+`" alt="artista" height="264" width="264">
    <div class="show-more">`+datos.name+`</div>
    </div></a>`
        
       
        


    })
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/860')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let artistas = datos.data

    document.querySelector('#artistas-recomendados').innerHTML += `<a href="detalle-artista.html?id=`+datos.id+`"><div class="artistas">
    <img src="`+datos.picture+`" alt="artista" height="264" width="264">
    <div class="show-more">`+datos.name+`</div>
    </div></a>`
        
       
        


    })
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/1')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let artistas = datos.data

    document.querySelector('#artistas-recomendados').innerHTML += `<a href="detalle-artista.html?id=`+datos.id+`"><div class="artistas">
    <img src="`+datos.picture+`" alt="artista" height="264" width="264">
    <div class="show-more">`+datos.name+`</div>
    </div></a>`
        
       
        


    })
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/7961888')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let artistas = datos.data

    document.querySelector('#artistas-recomendados').innerHTML += `<a href="detalle-artista.html?id=`+datos.id+`"><div class="artistas">
    <img src="`+datos.picture+`" alt="artista" height="264" width="264">
    <div class="show-more">`+datos.name+`</div>
    </div></a>`
        
       
        


    })


    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

        console.log(datos.data)
        let generos = datos.data

        for (let index = 1; index < 5; index++) {
            document.querySelector('#generos-recomendados').innerHTML += `<a href="ProyectoIdetallegenero.html?id=` +generos[index].id+ `"> <div class="generos">
            <img src="`+generos[index].picture+`" alt="genero" height="264" width="264">
            <div class="show-more">`+generos[index].name+`</div class="show-more">
            </div></a>` ;
            
        }
        


    })