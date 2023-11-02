const local = JSON.parse(localStorage.getItem("albumFavorito")) || [];

const albumesContainer = document.querySelector(".albumes-container");
const estrellas =document.getElementsByClassName("favAlbumSonando")

for (const album of local) {

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
  
    const favImg = document.createElement("img");
    favImg.src = "../assets/estrellaAmarilla.png";
    favImg.alt = "";
    favImg.classList.add("favAlbumSonando");
    favImg.setAttribute("id", album.id);
    imgContainer.appendChild(albumLink);
    imgContainer.appendChild(favImg);
  
    albumContainer.appendChild(imgContainer);
  
    albumesContainer.appendChild(albumContainer);
  }

for(let i =0; i<estrellas.length;i++){
    estrellas[i].addEventListener("click",()=>{
        let datos = local.filter(el=>el.id!== parseInt(estrellas[i].id))
        localStorage.setItem("albumFavorito", JSON.stringify(datos))
        estrellas[i].src="../assets/estrella1.png";
    })
}