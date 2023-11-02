const local = localStorage.getItem("informacionArray")
const data= JSON.parse(local)
const albumesContainer = document.querySelector(".albumes-container");

const estrellas= document.getElementsByClassName("favAlbumSonando")
for (const album of data) {
    if (album.imagen.startsWith('../')) {
        album.imagen = './' + album.imagen.substring(3);
      }
    const albumContainer = document.createElement("div");
    albumContainer.classList.add("albumes-container_container");
  
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("imgContainer");
  
    const albumLink = document.createElement("a");
    albumLink.href = `./views/musicaSonando1.html?id=${album.id}`;
  
    const albumImg = document.createElement("img");
    albumImg.src = album.imagen;
    albumImg.alt = "";
    albumImg.classList.add("imgAlbumes");
  
    albumLink.appendChild(albumImg);
  
    const favImg = document.createElement("img");
    favImg.src = "assets/estrella1.png";
    favImg.alt = "";
    favImg.classList.add("favAlbumSonando");
    favImg.setAttribute("id", album.id)
    imgContainer.appendChild(albumLink);
    imgContainer.appendChild(favImg);
  
    albumContainer.appendChild(imgContainer);
  
    albumesContainer.appendChild(albumContainer);
  }
  
  
  for(let i =0; i<estrellas.length;i++){
    const datosStorage = JSON.parse(localStorage.getItem("albumFavorito"))
    const estrellaPrendida=datosStorage.find(el=>el.id === parseInt(estrellas[i].id))
    if(estrellaPrendida){
      estrellas[i].src ="assets/estrellaAmarilla.png";
    }

    estrellas[i].addEventListener("click",()=>{
      const estrellaPrendida=datosStorage.find(el=>el.id === parseInt(estrellas[i].id))

      if(estrellaPrendida){
        const local=datosStorage.filter(el=>el.id !== parseInt(estrellas[i].id))
       localStorage.setItem("albumFavorito", JSON.stringify(local))
       estrellas[i].src ="assets/estrella1.png";
      }else{
        const nuevoDato=data.find(el=>el.id===parseInt(estrellas[i].id))
        nuevoDato.imagen="." + nuevoDato.imagen
        datosStorage.push(nuevoDato)
        localStorage.setItem("albumFavorito", JSON.stringify(datosStorage))
        estrellas[i].src ="assets/estrellaAmarilla.png";
      }
    })
}
