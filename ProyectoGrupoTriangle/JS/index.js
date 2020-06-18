fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let artistas = datos.data

    document.querySelector('#artistas-recomendados').innerHTML += `<a href="detalle-artista.html?id=`+datos.id+`" id="a">
    <div id="Contenedor-Artistas"><div id="Contenedor-Imagen"><img src="`+datos.picture+`" alt="artista" id="Imagen-Artista"></div>
    <div id="Nombre-Artista" align="center">`+datos.name+`</div>
    </div></a>`
        
       
        


    })

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/13')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let artistas = datos.data

    document.querySelector('#artistas-recomendados').innerHTML += `<a href="detalle-artista.html?id=`+datos.id+`" id="a">
    <div id="Contenedor-Artistas"><div id="Contenedor-Imagen"><img src="`+datos.picture+`" alt="artista" id="Imagen-Artista"></div>
    <div id="Nombre-Artista" align="center">`+datos.name+`</div>
    </div></a>`
        
       
        


    })
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/860')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let artistas = datos.data

    document.querySelector('#artistas-recomendados').innerHTML += `<a href="detalle-artista.html?id=`+datos.id+`" id="a">
    <div id="Contenedor-Artistas"><div id="Contenedor-Imagen"><img src="`+datos.picture+`" alt="artista" id="Imagen-Artista"></div>
    <div id="Nombre-Artista" align="center">`+datos.name+`</div>
    </div></a>`
        
       
        


    })
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/1')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let artistas = datos.data

    document.querySelector('#artistas-recomendados').innerHTML += `<a href="detalle-artista.html?id=`+datos.id+`" id="a">
    <div id="Contenedor-Artistas"><div id="Contenedor-Imagen"><img src="`+datos.picture+`" alt="artista" id="Imagen-Artista"></div>
    <div id="Nombre-Artista" align="center">`+datos.name+`</div>
    </div></a>`
        
       
        


    })
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/7961888')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let artistas = datos.data

    document.querySelector('#artistas-recomendados').innerHTML += `<a href="detalle-artista.html?id=`+datos.id+`" id="a">
    <div id="Contenedor-Artistas"><div id="Contenedor-Imagen"><img src="`+datos.picture+`" alt="artista" id="Imagen-Artista"></div>
    <div id="Nombre-Artista" align="center">`+datos.name+`</div>
    </div></a>`
        
       
        


    })
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/663')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let artistas = datos.data

    document.querySelector('#artistas-recomendados').innerHTML += `<a href="detalle-artista.html?id=`+datos.id+`" id="a">
    <div id="Contenedor-Artistas"><div id="Contenedor-Imagen"><img src="`+datos.picture+`" alt="artista" id="Imagen-Artista"></div>
    <div id="Nombre-Artista" align="center">`+datos.name+`</div>
    </div></a>`
        
       
        


    })





    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

        console.log(datos.data)
        let generos = datos.data

        for (let index = 1; index < 7; index++) {
            document.querySelector('#generos-recomendados').innerHTML += `<a href="ProyectoIdetallegenero.html?id=` +generos[index].id+ `">
            <div id="Contenedor-Generos"><div id="Contenedor-Imagen"><img src="`+generos[index].picture+`" alt="genero" id="Imagen-Genero"></div>
            <div id="Nombre-Genero" align="center">`+generos[index].name+`</div>
            </div></a>` ;
            
        }
        


    })



    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/66644212')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

        console.log(datos)
        let albums = datos.data


        document.querySelector('#albums-recomendados').innerHTML += `<a href="ProyectoIdetallealbum.html?id=`+datos.id+`" id="a">
        <div id="Contenedor-Artistas"><div id="Contenedor-Imagen"><img src="`+datos.cover+`" alt="album" id="Imagen-Artista"></div>
        <div id="Nombre-Artista" align="center">`+datos.title+`</div>
        </div></a>`


    })



    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/12114240')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

        console.log(datos)
        let albums = datos.data


        document.querySelector('#albums-recomendados').innerHTML += `<a href="ProyectoIdetallealbum.html?id=`+datos.id+`" id="a">
        <div id="Contenedor-Artistas"><div id="Contenedor-Imagen"><img src="`+datos.cover+`" alt="album" id="Imagen-Artista"></div>
        <div id="Nombre-Artista" align="center">`+datos.title+`</div>
        </div></a>`


    })



    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/3602971')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

        console.log(datos)
        let albums = datos.data


        document.querySelector('#albums-recomendados').innerHTML += `<a href="ProyectoIdetallealbum.html?id=`+datos.id+`" id="a">
        <div id="Contenedor-Artistas"><div id="Contenedor-Imagen"><img src="`+datos.cover+`" alt="album" id="Imagen-Artista"></div>
        <div id="Nombre-Artista" align="center">`+datos.title+`</div>
        </div></a>`


    })


    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/137297152')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

        console.log(datos)
        let albums = datos.data


        document.querySelector('#albums-recomendados').innerHTML += `<a href="ProyectoIdetallealbum.html?id=`+datos.id+`" id="a">
        <div id="Contenedor-Artistas"><div id="Contenedor-Imagen"><img src="`+datos.cover+`" alt="album" id="Imagen-Artista"></div>
        <div id="Nombre-Artista" align="center">`+datos.title+`</div>
        </div></a>`


    })


    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/103248')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

        console.log(datos)
        let albums = datos.data


        document.querySelector('#albums-recomendados').innerHTML += `<a href="ProyectoIdetallealbum.html?id=`+datos.id+`" id="a">
        <div id="Contenedor-Artistas"><div id="Contenedor-Imagen"><img src="`+datos.cover+`" alt="album" id="Imagen-Artista"></div>
        <div id="Nombre-Artista" align="center">`+datos.title+`</div>
        </div></a>`


    })


    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/8674559')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

        console.log(datos)
        let albums = datos.data


        document.querySelector('#albums-recomendados').innerHTML += `<a href="ProyectoIdetallealbum.html?id=`+datos.id+`" id="a">
        <div id="Contenedor-Artistas"><div id="Contenedor-Imagen"><img src="`+datos.cover+`" alt="album" id="Imagen-Artista"></div>
        <div id="Nombre-Artista" align="center">`+datos.title+`</div>
        </div></a>`


    })

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/9997018')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let tracks = datos.data
        let album = datos.album

    document.querySelector('#tracks-recomendados').innerHTML += `<a href="ProyectoIdetalletrack.html?id=`+datos.id+`" id="a">
    <div id="Contenedor-Generos"><div id="Contenedor-Imagen"><img src="`+album.cover+`" alt="track" id="Imagen-Genero"></div>
    <div id="Nombre-Genero" align="center">`+datos.title+`</div>
    </div></a>`
        
       
        


    })


    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/4603408')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let tracks = datos.data
        let album = datos.album

    document.querySelector('#tracks-recomendados').innerHTML += `<a href="ProyectoIdetalletrack.html?id=`+datos.id+`" id="a">
    <div id="Contenedor-Generos"><div id="Contenedor-Imagen"><img src="`+album.cover+`" alt="track" id="Imagen-Genero"></div>
    <div id="Nombre-Genero" align="center">`+datos.title+`</div>
    </div></a>`
        
       
        


    })


    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/116914122')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let tracks = datos.data
        let album = datos.album

    document.querySelector('#tracks-recomendados').innerHTML += `<a href="ProyectoIdetalletrack.html?id=`+datos.id+`" id="a">
    <div id="Contenedor-Generos"><div id="Contenedor-Imagen"><img src="`+album.cover+`" alt="track" id="Imagen-Genero"></div>
    <div id="Nombre-Genero" align="center">`+datos.title+`</div>
    </div></a>`
        
       
        


    })


    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/2267042')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let tracks = datos.data
        let album = datos.album

    document.querySelector('#tracks-recomendados').innerHTML += `<a href="ProyectoIdetalletrack.html?id=`+datos.id+`" id="a">
    <div id="Contenedor-Generos"><div id="Contenedor-Imagen"><img src="`+album.cover+`" alt="track" id="Imagen-Genero"></div>
    <div id="Nombre-Genero" align="center">`+datos.title+`</div>
    </div></a>`
        
       
        


    })


    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/724785222')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let tracks = datos.data
        let album = datos.album

    document.querySelector('#tracks-recomendados').innerHTML += `<a href="ProyectoIdetalletrack.html?id=`+datos.id+`" id="a">
    <div id="Contenedor-Generos"><div id="Contenedor-Imagen"><img src="`+album.cover+`" alt="track" id="Imagen-Genero"></div>
    <div id="Nombre-Genero" align="center">`+datos.title+`</div>
    </div></a>`
        
       
        


    })


    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/683998942')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        console.log(datos)
        let tracks = datos.data
        let album = datos.album

    document.querySelector('#tracks-recomendados').innerHTML += `<a href="ProyectoIdetalletrack.html?id=`+datos.id+`" id="a">
    <div id="Contenedor-Generos"><div id="Contenedor-Imagen"><img src="`+album.cover+`" alt="track" id="Imagen-Genero"></div>
    <div id="Nombre-Genero" align="center">`+datos.title+`</div>
    </div></a>`
        
       
        


    })