

  const datos = JSON.parse(localStorage.getItem("reproduciendo"));
  const localCancionesFav = JSON.parse(localStorage.getItem("cancionesFavoritas"));
  
  let imagenReproduciendo = document.querySelector(".albumSonando");
  let albumReproduciendo = document.querySelector(".albumText");
  
  const imgContainer = document.querySelector(".imgContainerSonando");
  const albumSonando = document.querySelector(".favAlbumSonando");
  
  if (imagenReproduciendo && albumReproduciendo) {
    if (localCancionesFav) {
      let resultado = localCancionesFav.find((el) => parseInt(el.id) === datos.id && el.idAlbum === datos.idAlbum);
      imagenReproduciendo.src = datos.imgCancion ? datos.imgCancion : datos.imagen;
      albumReproduciendo.innerHTML = datos.descripcionCancion;
      imagenReproduciendo.src = datos.imgCancion.replace("../","./")
      albumReproduciendo.innerHTML = datos.descripcionCancion;
      if (!resultado) {
        albumSonando.src = albumSonando.src.replace("estrellaAmarilla", "estrella1");
      } else {
        albumSonando.src = albumSonando.src.replace("estrella1", "estrellaAmarilla");
      }
    }
  }
  
  imgContainer.addEventListener("click", () => {
    let localCancionesFav = JSON.parse(localStorage.getItem("cancionesFavoritas"));
    if (localCancionesFav && localCancionesFav.length !==0) {
    
      let resultado = localCancionesFav.filter((el) => parseInt(el.id) === datos.id && el.idAlbum === datos.idAlbum);
      if (resultado) {
        const actualizacion = localCancionesFav.filter(
          (el) => parseInt(el.id) !== datos.id || el.idAlbum !== datos.idAlbum
        );
        localStorage.setItem("cancionesFavoritas", JSON.stringify(actualizacion));
        albumSonando.src = albumSonando.src.replace("estrellaAmarilla", "estrella1");
      } else {
        localStorage.setItem("cancionesFavoritas", JSON.stringify([{ ...datos }]));
        albumSonando.src = albumSonando.src.replace("estrella1", "estrellaAmarilla");
      }
    } else {
      localStorage.setItem("cancionesFavoritas", JSON.stringify([{ ...datos }]));
      albumSonando.src = albumSonando.src.replace("estrella1", "estrellaAmarilla");
    }
  });
  
  
