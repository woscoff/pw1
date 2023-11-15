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
        if (resultado && resultado !== null) {
            imgContainer[0].children[1].src = albumSonando[0].src.replace("estrella1", "estrellaAmarilla");
        }else{
            imgContainer[0].children[1].src = albumSonando[0].src.replace("estrellaAmarilla", "estrella1");
        }
    } else {
        imgContainer[0].children[1].src = albumSonando[0].src.replace("estrellaAmarilla", "estrella1");
    }
}

function manejarClickEnEstrella() {
    let localCancionesFav = JSON.parse(localStorage.getItem("cancionesFavoritas")) || [];
    let datos = JSON.parse(localStorage.getItem("reproduciendo"));
    const resultado = localCancionesFav.find(el => parseInt(el.id) === datos.id && el.idAlbum === datos.idAlbum);

    if (resultado) {
        if (localCancionesFav.length > 1) {
            const actualizacion = [...localCancionesFav.filter(el => (parseInt(el.id) !== datos.id || el.idAlbum !== datos.idAlbum))];

            localStorage.setItem("cancionesFavoritas", JSON.stringify(actualizacion));
            imgContainer[0].children[1].src = imgContainer[0].children[1].src.replace("estrellaAmarilla", "estrella1");
        } else {
            localCancionesFav.splice(localCancionesFav.indexOf(resultado), 1);
            localStorage.setItem("cancionesFavoritas", JSON.stringify(localCancionesFav));
            imgContainer[0].children[1].src = imgContainer[0].children[1].src.replace("estrellaAmarilla", "estrella1");
        }
    } else {
        // La canción no está en la lista, agregarla y cambiar la estrella a estrellaAmarilla
        localCancionesFav.push({ ...datos });
        localStorage.setItem("cancionesFavoritas", JSON.stringify(localCancionesFav));
        imgContainer[0].children[1].src = imgContainer[0].children[1].src.replace("estrella1", "estrellaAmarilla");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    actualizarImagenReproduciendo();
    actualizarEstrellaAlbumSonando();

    imgContainer[0].addEventListener("click", () => {
        manejarClickEnEstrella();
    });
});
