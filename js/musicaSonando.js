const url = new URL(window.location.href);
const id = url.searchParams.get("id");
const local = localStorage.getItem("informacionArray")
const data= JSON.parse(local)

const objetoLocal    = data.find(el=>el.id===parseInt(id))
const contenedorDatos1 = document.querySelector('.columnas.columna1 .contenedor-datos');
const contenedorDatos2 = document.querySelector('.columnas.columna2 .contenedor-datos');
const contenedorDatos3 = document.querySelector('.columnas.columna3 .contenedor-datos');
const contenedorDatos4 = document.querySelector('.columnas.columna4 .contenedor-datos');
const contenedorDatos5 = document.querySelector('.columnas.columna5 .contenedor-datos');



for (let i = 0; i < objetoLocal.canciones.length; i++) {
    // Columna 1
    const iconoCasilla = document.createElement('div');
    iconoCasilla.classList.add('icono', 'casilla');

    const imgReproducir = document.createElement('img');
    imgReproducir.classList.add('img-reproducir');
    imgReproducir.setAttribute('src', '../assets/play.png');
    imgReproducir.setAttribute('alt', '');
    imgReproducir.setAttribute('id', objetoLocal.canciones[i].id);
    iconoCasilla.appendChild(imgReproducir);
    contenedorDatos1.appendChild(iconoCasilla);

    // Columna 2
    const divNombreCancion = document.createElement('div');
    divNombreCancion.classList.add('nombre-cancion', 'casilla');

    const imgEstrellaAmarilla = document.createElement('img');
    imgEstrellaAmarilla.classList.add('estrellaAmarilla');
    imgEstrellaAmarilla.classList.add('estrellaCanciones');
    imgEstrellaAmarilla.setAttribute('src', '../assets/estrella1.png');
    imgEstrellaAmarilla.setAttribute('alt', '');
    imgEstrellaAmarilla.setAttribute("id",objetoLocal.canciones[i].id)
    const divNombreCancionNombre = document.createElement('div');
    divNombreCancionNombre.textContent = objetoLocal.canciones[i].nombreCancion;

    divNombreCancion.appendChild(imgEstrellaAmarilla);
    divNombreCancion.appendChild(divNombreCancionNombre);
    contenedorDatos2.appendChild(divNombreCancion);

    // Columna 3
    const divNombreAlbum = document.createElement('div');
    divNombreAlbum.classList.add('nombre-album', 'casilla');
    divNombreAlbum.setAttribute('data-nombreAlbum', objetoLocal.nombreAlbum);

    const imgEstrellaAmarillaAlbum = document.createElement('img');
    imgEstrellaAmarillaAlbum.classList.add('estrellaAmarilla');
    imgEstrellaAmarillaAlbum.classList.add('estrellaCancionesAlbum');
    imgEstrellaAmarillaAlbum.setAttribute('src', '../assets/estrella1.png');
    imgEstrellaAmarillaAlbum.setAttribute('alt', '');
    imgEstrellaAmarillaAlbum.setAttribute("id",objetoLocal.id)

    const divNombreAlbumNombre = document.createElement('div');
    divNombreAlbumNombre.textContent = objetoLocal.nombreAlbum;

    divNombreAlbum.appendChild(imgEstrellaAmarillaAlbum);
    divNombreAlbum.appendChild(divNombreAlbumNombre);
    contenedorDatos3.appendChild(divNombreAlbum);

    // Columna 4
    const divDuracion = document.createElement('div');
    divDuracion.classList.add('tiempo-duracion', 'casilla');
    divDuracion.textContent = objetoLocal.canciones[i].duracion;
    contenedorDatos4.appendChild(divDuracion);

    // Columna 5
    const divReproducciones = document.createElement('div');
    divReproducciones.classList.add('cantidad-reproducciones', 'casilla');
    divReproducciones.textContent = objetoLocal.canciones[i].vistas;
    contenedorDatos5.appendChild(divReproducciones);
}

const reproduccion = document.getElementsByClassName("img-reproducir")
for (let i = 0; i < reproduccion.length; i++) {

    reproduccion[i].addEventListener('click', function () {
      const local2 = JSON.parse(localStorage.getItem("cancionesFavoritas")) || [];
        let objeto = data.find(el=>el.id=== parseInt(id))
        const info = objeto.canciones.find(el=>el.id === parseInt(reproduccion[i].id))
        info.imgCancion=objeto.imagen
        info.idAlbum=objeto.id
        localStorage.setItem("reproduciendo", JSON.stringify(info));
        let imagenReproduciendo=document.getElementsByClassName("albumSonando")[0]
        imagenReproduciendo.src=objeto.imagen
        let albumReproduciendo= document.getElementsByClassName("albumText")[0]
        albumReproduciendo.innerHTML=info.descripcionCancion
        let estrella = document.getElementsByClassName("favAlbumSonando")[0]
        const datos = local2.find(el=>el.id === parseInt(cancionesFav[i].id) && el.idAlbum === parseInt(albumFav[1].id) )
        if(datos){
          estrella.src = '../assets/estrellaAmarilla.png'
        }else{
          estrella.src = '../assets/estrella1.png'
        }
    });
  }
  const cancionesFav = document.getElementsByClassName("estrellaCanciones");
  const albumFav = document.getElementsByClassName("estrellaCancionesAlbum");
  const local2 = JSON.parse(localStorage.getItem("cancionesFavoritas")) || [];
  for (let i = 0; i < cancionesFav.length; i++) {
    const datos = local2.find(el=>el.id === parseInt(cancionesFav[i].id) && el.idAlbum === parseInt(albumFav[1].id) )
    if(datos){
        cancionesFav[i].src = '../assets/estrellaAmarilla.png'
    }

    cancionesFav[i].addEventListener('click', function () {
      const local = JSON.parse(localStorage.getItem("cancionesFavoritas")) || [];
      const cancion = objetoLocal.canciones.find(el => el.id === parseInt(cancionesFav[i].id));
  
      cancion.idAlbum=objetoLocal.id
      const cancionExistente = local.find(item => parseInt(item.idAlbum) === objetoLocal.id && item.id === cancion.id);

      if (!cancionExistente) {
        local.push({ idAlbum: objetoLocal.id, ...cancion });
        localStorage.setItem("cancionesFavoritas", JSON.stringify(local));
        cancionesFav[i].src='../assets/estrellaAmarilla.png'
      } else {
        let data = local.filter(el=>el.id === cancion.id && el.idAlbum === objetoLocal.id)
        localStorage.setItem("cancionesFavoritas", JSON.stringify(data));
        cancionesFav[i].src='../assets/estrella1.png'
      }
    });
  }

  for (let i = 0; i < albumFav.length; i++) {
    let local = JSON.parse(localStorage.getItem("albumFavorito")) || [];
    let datos = local.find(el => el.id === parseInt(albumFav[i].id))
  
    if (datos) {
      albumFav[i].src = '../assets/estrellaAmarilla.png';
    }
  
    albumFav[i].addEventListener('click', function () {
      let local = JSON.parse(localStorage.getItem("albumFavorito")) || [];
      const cancionExistente = local.find(item => item.id === parseInt(albumFav[i].id));
  
      if (!cancionExistente) {
        local.push({ ...objetoLocal });
        albumFav[i].src = '../assets/estrellaAmarilla.png';
      } else {
        let data = local.filter(el => el.id !== objetoLocal.id);
        albumFav[i].src = '../assets/estrella1.png';
        local = data;
      }
  
      localStorage.setItem("albumFavorito", JSON.stringify(local));
    });

  
  }
  