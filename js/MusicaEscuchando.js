const datos = JSON.parse(localStorage.getItem("reproduciendo"));

  let imagenReproduciendo = document.querySelector(".albumSonando");
  let albumReproduciendo = document.querySelector(".albumText");

  if (imagenReproduciendo && albumReproduciendo) {
    imagenReproduciendo.src = datos.imgCancion;
    albumReproduciendo.innerHTML = datos.descripcionCancion;
  }

