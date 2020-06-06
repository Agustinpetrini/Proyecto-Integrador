
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

        console.log(datos.data)
        let generos = datos.data

        for (let index = 1; index < 27; index++) {
            document.querySelector('#Lista-Generos').innerHTML += `<a href="detallegeneros.html?id=` +generos[index].id+ `"> <div id="Conjunto-GeneroyTitulo">
            <div id="Generos"><img src="` + generos[index].picture + `" alt="" id="Fotos" ></div>
            <div id="Nombre-Genero" align="center">` + generos[index].name + `</div>
            </div></a>` ;
            
        }
        


    })