const url = new URL(window.location.href);
const selectedPlan = url.searchParams.get("selectedPlan");
const buttonContinuar = document.getElementById("cancelButton");
const pagar = document.getElementById("pagar");

if (selectedPlan !== null) {
    const titulo = document.querySelector(".titulo");
    titulo.textContent = "Tipo de plan seleccionado: " + selectedPlan;
}

pagar.addEventListener("click", (event) => {
    event.preventDefault();
    validarFormulario();
});

buttonContinuar.addEventListener("click", () => {
    redirigirSegunUsuarios();
});

function mostrarModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function validarFormulario() {
    const input = document.querySelectorAll("input");
    let error = false;

    function createErrorMessage(target, message) {
        const existingError = target.querySelector(".parrafo-error");
        if (!existingError) {
            const errorMessage = document.createElement("p");
            errorMessage.textContent = message;
            errorMessage.classList.add("parrafo-error");
            target.appendChild(errorMessage);
            error = true;
        }
    }

    for (let i = 0; i < input.length; i++) {
        switch (i) {
            case 0:
                if (input[i].value.length !== 16 || !/^\d+$/.test(input[i].value)) {
                    createErrorMessage(input[i].parentElement, "El valor debe tener exactamente 16 dígitos numéricos.");
                }
                break;
            case 2:
                if (input[i].value.length !== 3 || !/^\d+$/.test(input[i].value) || input[i].value === "0") {
                    createErrorMessage(input[i].parentElement.parentElement.children[1], "El valor debe tener 3 dígitos numéricos.");
                }
                break;
        }
    }

    if (!error) {
        mostrarModal();
    }
}

function redirigirSegunUsuarios() {
    const data = localStorage.getItem("usuarios");
    const variable = JSON.parse(data);
    
    const destino = variable ? "../index.html" : "../views/home.html";
    window.location.href = destino;
}
