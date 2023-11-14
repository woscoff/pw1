document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form.login');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.querySelector('input[name="nombre"]').value;
        let contraseña = document.querySelector('input[name="contraseña"]').value;
        const repetirContraseña = document.querySelector('input[name="repetirContraseña"]').value;
        let email = document.querySelector('input[name="email"]').value;
        let fechaNacimiento= document.querySelector('input[name="fechaNacimiento"]').value;
        if (nombre && contraseña && repetirContraseña) {
            if (contraseña === repetirContraseña) {
                contraseña = transformarContraseña(contraseña);

                const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

                const usuarioExistente = usuariosRegistrados.find(usuario => usuario.nombre === nombre);

                if (!usuarioExistente) {
                    const nuevoUsuario = {
                        nombre: nombre,
                        contraseña: contraseña,
                        email:email,
                        fechaNacimiento:fechaNacimiento
                    };

                    usuariosRegistrados.push(nuevoUsuario);
                    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

                    alert('Registro exitoso');
                    window.location.href = '../views/home.html'; 
                } else {
                    alert('Este usuario ya existe');
                }
            } else {
                alert('Las contraseñas no coinciden');
            }
        } else {
            alert('Por favor, completa todos los campos');
        }
    });


    function transformarContraseña(contraseña) {
        const mitad = Math.ceil(contraseña.length / 2);
        const primeraMitad = contraseña.slice(0, mitad);
        const segundaMitad = contraseña.slice(mitad);

        return segundaMitad + primeraMitad;
    }
});
