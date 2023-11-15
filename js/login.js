document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form.login');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const usuario = document.querySelector('input[name="usuario"]').value;
        const contraseñaIngresada = document.querySelector('input[name="contraseña"]').value;

        const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

        const usuarioExistente = usuariosRegistrados.find(user => user.nombre === usuario);

        if (usuarioExistente) {
            const contraseñaOriginal = deshacerTransformacion(usuarioExistente.contraseña);

            if (contraseñaIngresada === contraseñaOriginal) {
                alert('Inicio de sesión exitoso');
                window.location.href = './views/home.html'; 
            } else {
                alert('Credenciales incorrectas. Por favor, verifica tu usuario y contraseña.');
            }
        } else {
            alert('Credenciales incorrectas. Por favor, verifica tu usuario y contraseña.');
        }
    });

    function deshacerTransformacion(contraseñaTransformada) {
        const mitad = Math.ceil(contraseñaTransformada.length / 2);
        const primeraMitad = contraseñaTransformada.slice(mitad);
        const segundaMitad = contraseñaTransformada.slice(0, mitad);

        return primeraMitad + segundaMitad;
    }
});
