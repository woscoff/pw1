const datos = JSON.parse(localStorage.getItem("reproduciendo"));
const localCancionesFav = JSON.parse(localStorage.getItem("cancionesFavoritas"));
const localStorages = JSON.parse(localStorage.getItem("informacionArray"));

let imagenReproduciendo = document.querySelector(".albumSonando");
let albumReproduciendo = document.querySelector(".albumText");

const imgContainer = document.getElementsByClassName("imgContainerSonando");
const albumSonando = document.getElementsByClassName("favAlbumSonando");

function actualizarImagenReproduciendo() {
    if (datos) {
        imagenReproduciendo.src = datos.imgCancion ? datos.imgCancion : datos.imagen;
        albumReproduciendo.innerHTML = datos.descripcionCancion;
    }
}

function actualizarEstrellaAlbumSonando() {
    if (localCancionesFav) {
        let resultado = localCancionesFav.find(el => parseInt(el.id) == datos.id && el.idAlbum == datos.idAlbum);
        if (resultado !== null && resultado) {
            imgContainer[0].children[1].src = albumSonando[0].src.replace("estrella1", "estrellaAmarilla");
        }
    } else {
        imgContainer[0].children[1].src = albumSonando[0].src.replace("estrellaAmarilla", "estrella1");
    }
}

function manejarClickEnEstrella() {
    if (localCancionesFav) {
        let resultado = localCancionesFav.find(el => parseInt(el.id) == datos.id && el.idAlbum == datos.idAlbum) || [];

        if (resultado !== null || resultado) {
            const actualizacion = localCancionesFav.filter(el => parseInt(el.id) !== datos.id && el.idAlbum !== datos.idAlbum);
            localStorage.setItem("cancionesFavoritas", JSON.stringify(actualizacion));
            imgContainer[0].children[1].src = imgContainer[0].children[1].src.replace("estrellaAmarilla", "estrella1");
        } else {
            localCancionesFav.push({ ...datos });
            localStorage.setItem("cancionesFavoritas", JSON.stringify(localCancionesFav));
            imgContainer[0].children[1].src = imgContainer[0].children[1].src.replace("estrella1", "estrellaAmarilla");
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarImagenReproduciendo();
    actualizarEstrellaAlbumSonando();

    imgContainer[0].addEventListener("click", () => {
        manejarClickEnEstrella();
    });
});
