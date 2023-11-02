const local = localStorage.getItem("informacionArray")
const data= JSON.parse(local)
    const albumesContainer = document.querySelector(".albumes-container");
const input = document.querySelector("input");
let elementosCreados = false;

input.addEventListener("change", (e) => {
  const inputText = e.target.value.toLowerCase();

  const encontrar = data.filter(item => item.nombreAlbum.toLowerCase().includes(inputText));

  albumesContainer.innerHTML = "";

  if (encontrar.length > 0) {
    elementosCreados = true;

    for (const album of encontrar) {
      const albumContainer = document.createElement("div");
      albumContainer.classList.add("albumes-container_container");

      const imgContainer = document.createElement("div");
      imgContainer.classList.add("imgContainer");

      const albumLink = document.createElement("a");
      albumLink.href = `./musicaSonando1.html?id=${album.id}`;

      const albumImg = document.createElement("img");
      albumImg.src = album.imagen;
      albumImg.alt = "";
      albumImg.classList.add("imgAlbumes");

      albumLink.appendChild(albumImg);
      imgContainer.appendChild(albumLink);
      albumContainer.appendChild(imgContainer);
      albumesContainer.appendChild(albumContainer);
    }
  } else if (elementosCreados) {
    for (const album of data) {
      const albumContainer = document.createElement("div");
      albumContainer.classList.add("albumes-container_container");

      const imgContainer = document.createElement("div");
      imgContainer.classList.add("imgContainer");

      const albumLink = document.createElement("a");
      albumLink.href = `./musicaSonando1.html?id=${album.id}`;

      const albumImg = document.createElement("img");
      albumImg.src = album.imagen;
      albumImg.alt = "";
      albumImg.classList.add("imgAlbumes");

      albumLink.appendChild(albumImg);
      imgContainer.appendChild(albumLink);
      albumContainer.appendChild(imgContainer);
      albumesContainer.appendChild(albumContainer);
    }
  }
});

for (const album of data) {
    const albumContainer = document.createElement("div");
    albumContainer.classList.add("albumes-container_container");
  
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("imgContainer");
  
    const albumLink = document.createElement("a");
    albumLink.href = `./musicaSonando1.html?id=${album.id}`;
  
    const albumImg = document.createElement("img");
    albumImg.src = album.imagen;
    albumImg.alt = "";
    albumImg.classList.add("imgAlbumes");
  
    albumLink.appendChild(albumImg);
  
    imgContainer.appendChild(albumLink);
  
    albumContainer.appendChild(imgContainer);
  
    albumesContainer.appendChild(albumContainer);
  }