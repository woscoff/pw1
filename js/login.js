document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form.login');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const usuario = document.querySelector('input[name="usuario"]').value;
        const contraseña = document.querySelector('input[name="contraseña"]').value;

        const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

        const usuarioExistente = usuariosRegistrados.find(user => user.nombre === usuario && user.contraseña === contraseña);

        if (usuarioExistente) {
            alert('Inicio de sesión exitoso');
            window.location.href = '../index.html'; 
        } else {
            alert('Credenciales incorrectas. Por favor, verifica tu usuario y contraseña.');
        }
    });
});
