const local = localStorage.getItem("informacionArray");
const data = JSON.parse(local);
const albumesContainer = document.querySelector(".albumes-container");

if (data && data.length > 0) {
  const estrellas = document.getElementsByClassName("favAlbumSonando");

  for (let i = 0; i < data.length; i++) {
    const album = data[i];
    const albumContainer = document.createElement("div");
    albumContainer.classList.add("albumes-container_container");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("imgContainer");

    const albumLink = document.createElement("a");
    albumLink.href = `../views/musicaSonando1.html?id=${album.id}`;

    const albumImg = document.createElement("img");
    albumImg.src = album.imagen;
    albumImg.alt = "";
    albumImg.classList.add("imgAlbumes");

    albumLink.appendChild(albumImg);

    const favImg = document.createElement("img");
    favImg.src = "../assets/estrella1.png";
    favImg.alt = "";
    favImg.classList.add("favAlbumSonando");
    favImg.setAttribute("id", album.id);
    imgContainer.appendChild(albumLink);
    imgContainer.appendChild(favImg);

    albumContainer.appendChild(imgContainer);
    albumesContainer.appendChild(albumContainer);


    const datosStorage = JSON.parse(localStorage.getItem("albumFavorito")) || [];
    const estrellaPrendida = datosStorage.find((el) => el.id === parseInt(estrellas[i].id));


    estrellas[i].addEventListener("click", () => {
      manejarClicEstrella(favImg, album, datosStorage);
    });

  
    if (estrellaPrendida) {
      favImg.src = "../assets/estrellaAmarilla.png";
    }
  }

  function manejarClicEstrella(estrella, album, datosStorage) {
    const estrellaPrendida = datosStorage.find((el) => el.id === parseInt(estrella.id));

    if (estrellaPrendida) {
      const local = datosStorage.filter((el) => el.id !== parseInt(estrella.id));
      localStorage.setItem("albumFavorito", JSON.stringify(local));
      estrella.src = "../assets/estrella1.png";
    } else {
     datosStorage.push(album);
      localStorage.setItem("albumFavorito", JSON.stringify(datosStorage));
      estrella.src = "../assets/estrellaAmarilla.png";
    }
  }
}
