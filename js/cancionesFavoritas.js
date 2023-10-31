const getLocalStorage = localStorage.getItem("listaFavorita");
const objetoLocal = JSON.parse(getLocalStorage);


if (objetoLocal.length > 0) {
    const contenedorDatos1 = document.querySelector('.columnas.columna1 .contenedor-datos');
    const contenedorDatos2 = document.querySelector('.columnas.columna2 .contenedor-datos');
    const contenedorDatos3 = document.querySelector('.columnas.columna3 .contenedor-datos');
    const contenedorDatos4 = document.querySelector('.columnas.columna4 .contenedor-datos');
    const contenedorDatos5 = document.querySelector('.columnas.columna5 .contenedor-datos');

    for (let i = 0; i < objetoLocal.length; i++) {
        // Columna 1
        const iconoCasilla = document.createElement('div');
        iconoCasilla.classList.add('icono', 'casilla');

        const imgReproducir = document.createElement('img');
        imgReproducir.classList.add('img-reproducir');
        imgReproducir.setAttribute('src', '../assets/play.png');
        imgReproducir.setAttribute('alt', '');

        iconoCasilla.appendChild(imgReproducir);
        contenedorDatos1.appendChild(iconoCasilla);

        // Columna 2
        const divNombreCancion = document.createElement('div');
        divNombreCancion.classList.add('nombre-cancion', 'casilla');

        const imgEstrellaAmarilla = document.createElement('img');
        imgEstrellaAmarilla.classList.add('estrellaAmarilla');
        imgEstrellaAmarilla.setAttribute('src', '../assets/estrellaAmarilla.png');
        imgEstrellaAmarilla.setAttribute('alt', '');

        const divNombreCancionNombre = document.createElement('div');
        divNombreCancionNombre.textContent = objetoLocal[i].nombreCancion;

        divNombreCancion.appendChild(imgEstrellaAmarilla);
        divNombreCancion.appendChild(divNombreCancionNombre);
        contenedorDatos2.appendChild(divNombreCancion);

        // Columna 3
        const divNombreAlbum = document.createElement('div');
        divNombreAlbum.classList.add('nombre-album', 'casilla');
        divNombreAlbum.setAttribute('data-nombreAlbum', objetoLocal[i].nombreAlbum);

        const imgEstrellaAmarillaAlbum = document.createElement('img');
        imgEstrellaAmarillaAlbum.classList.add('estrellaAmarilla');
        imgEstrellaAmarillaAlbum.setAttribute('src', '../assets/estrellaAmarilla.png');
        imgEstrellaAmarillaAlbum.setAttribute('alt', '');

        const divNombreAlbumNombre = document.createElement('div');
        divNombreAlbumNombre.textContent = objetoLocal[i].nombreAlbum;

        divNombreAlbum.appendChild(imgEstrellaAmarillaAlbum);
        divNombreAlbum.appendChild(divNombreAlbumNombre);
        contenedorDatos3.appendChild(divNombreAlbum);

        // Columna 4
        const divDuracion = document.createElement('div');
        divDuracion.classList.add('tiempo-duracion', 'casilla');
        divDuracion.textContent = objetoLocal[i].duracion;
        contenedorDatos4.appendChild(divDuracion);

        // Columna 5
        const divReproducciones = document.createElement('div');
        divReproducciones.classList.add('cantidad-reproducciones', 'casilla');
        divReproducciones.textContent = objetoLocal[i].vistas;
        contenedorDatos5.appendChild(divReproducciones);
    }
}


const reproduccion = document.getElementsByClassName("img-reproducir")
for (let i = 0; i < reproduccion.length; i++) {

    reproduccion[i].addEventListener('click', function () {
        const divPadre=reproduccion[i].parentElement.parentElement.parentElement.parentElement
        const nombreCancion= divPadre.children[1].children[1].children[i].children[1].textContent
        const imgCancion =objetoLocal[i].imgCancion
        const albumCancion= divPadre.children[2].children[1].children[i].children[1].textContent
        const infoLocalStorage=[{cancion:nombreCancion, album:albumCancion,imgCancion:imgCancion}]
        localStorage.setItem("reproduciendo", JSON.stringify(infoLocalStorage));
        let imagenReproduciendo=document.getElementsByClassName("albumSonando")[0]
        imagenReproduciendo.src=imgCancion
        let albumReproduciendo= document.getElementsByClassName("albumText")[0]
        albumReproduciendo.innerHTML=objetoLocal[i].descripcion
    });
  }
  const cancionesFav = document.getElementsByClassName("estrellaAmarilla");
  for (let i = 0; i < cancionesFav.length; i++) {
      cancionesFav[i].addEventListener("click" ,function () {
          const divPadre = cancionesFav[i].parentElement?.parentElement?.parentElement?.parentElement;
          if (!divPadre) {
              return; 
          }
            let nomber = divPadre.children[1].children[1].children[i].children[1].textContent
          const elementosAEliminar = [
              divPadre.children[0].children[1].children[i], 
              divPadre.children[1].children[1].children[i], 
              divPadre.children[1].children[1].children[i], 
              divPadre.children[2].children[1].children[i], 
              divPadre.children[2].children[1].children[i], 
              divPadre.children[3].children[1].children[i], 
              divPadre.children[4].children[1].children[i],      
          ];
          const nuevoArray=objetoLocal.filter(el=>el.nombreCancion!==elementosAEliminar[1].children[1].textContent)
          localStorage.setItem("listaFavorita", JSON.stringify(nuevoArray))

          elementosAEliminar.forEach((elemento) => {
              if (elemento) {
                  elemento.remove();
         
              }
            });
            alert(`Se ha eliminado la cancion ${nomber}`)
      });}