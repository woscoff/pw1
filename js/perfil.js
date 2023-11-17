const buttonGuardar = document.getElementsByClassName("btn")[1];
const modal = document.getElementById("myModal");
const buttonCerrar = document.getElementById("cancelButton");
const inputNombre = document.getElementById("nombre");
const inputContra = document.getElementById("contraceña");
const inputContra2 = document.getElementById("repetir-contraceña");
const email =document.getElementById("email");
const fechaNacimiento=document.getElementById("fecha-nacimiento");
const titleHeader = document.getElementsByClassName("title-header")[0];
const user = document.getElementsByClassName("usuario")[0];
const button = document.getElementsByClassName("button")[1];
const usuarios = JSON.parse(localStorage.getItem("usuarios"))[0]

function transformarContraseña(contraseñas) {
    const mitad = Math.ceil(contraseñas.length / 2);
    const primeraMitad = contraseñas.slice(0, mitad);
    const segundaMitad = contraseñas .slice(mitad);

    return segundaMitad + primeraMitad;
}
buttonGuardar.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarModal();

    if (validarContraseñas()) {
  
            let contraseñas = transformarContraseña(inputContra.value);
        localStorage.setItem("usuarios", JSON.stringify([{ nombre: inputNombre.value, contraseña: contraseñas, email:email.value, fechaNacimiento:fechaNacimiento.value }]));
        user.textContent = inputNombre.value;
        
    }
});

buttonCerrar.addEventListener("click", (event) => {
    event.preventDefault();
    ocultarModal();
});

button.addEventListener("click", () => {
    localStorage.removeItem("usuarios");
});

function mostrarModal() {
    modal.style.display = "block";
}

function ocultarModal() {
    modal.style.display = "none";
}

function validarContraseñas() {
    const contraseña = inputContra.value;
    const repetirContraseña = inputContra2.value;

    if (contraseña && repetirContraseña) {
        if (contraseña !== repetirContraseña) {
            mostrarError("Las contraseñas no coinciden");
            return false;
        } else {
            return true;
        }
    } else {
        mostrarError("Las contraseñas no cumplen los parámetros requeridos");
        return false;
    }
}

function mostrarError(mensaje) {
    titleHeader.innerHTML = mensaje;
}
function deshacerTransformacion(contraseñaTransformada) {
    const mitad = Math.ceil(contraseñaTransformada.length / 2);
    const primeraMitad = contraseñaTransformada.slice(mitad);
    const segundaMitad = contraseñaTransformada.slice(0, mitad);

    return primeraMitad + segundaMitad;
}


inputNombre.value =usuarios.nombre
fechaNacimiento.value=usuarios.fechaNacimiento
email.value=usuarios.email
inputContra.value= deshacerTransformacion(usuarios.contraseña)
inputContra2.value=deshacerTransformacion(usuarios.contraseña)
