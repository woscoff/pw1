const usuarioParseado = localStorage.getItem("usuarios");

if (usuarioParseado) {
  const usuarioDesparseado = JSON.parse(usuarioParseado);
  const usuarioNombre = usuarioDesparseado[0].nombre;

  const usuario = document.getElementsByClassName("usuario");
  if (usuario.length > 0) {
    usuario[0].innerHTML = usuarioNombre;
  }
} else {
  Alert("No se encontró ningún valor en el localStorage con el nombre 'usuarios'.");
}

const cerrarSesion= document.getElementsByClassName("cerar-sesion")[0];
cerrarSesion.addEventListener('click',function () {
    localStorage.removeItem('usuario');

})
