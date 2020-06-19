
{
    let botonesMeGusta = document.querySelectorAll('.botonbliblioteca');

for (const boton of botonesMeGusta){
    console.log(boton)
boton.onclick = function(){
alert('me hiciste click');
}
}
}

