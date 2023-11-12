const url = new URL(window.location.href);

const selectedPlan = url.searchParams.get("selectedPlan");

const buttonContinuar= document.getElementById("cancelButton")
if (selectedPlan !== null) {
    const titulo = document.getElementsByClassName("titulo")[0]
    titulo.textContent="Tipo de plan seleccionado: " + selectedPlan
}

const pagar = document.getElementById("pagar");
pagar.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.querySelectorAll("input");
    let error = false;

    function createErrorMessage(target, message) {
        const existingError = target.querySelector(".parrafo-error");
        if (!existingError) {
            const errorMessage = document.createElement("p");
            errorMessage.textContent = message;
            errorMessage.setAttribute("class", "parrafo-error");
            target.appendChild(errorMessage);
            error = true;
        }
    }

    for (let i = 0; i < input.length; i++) {
        if (i === 0 && input[i].value.length !== 16) {
            createErrorMessage(input[i].parentElement, "El valor debe tener exactamente 16 caracteres.");
        } else if (i === 2 && (input[i].value.length !== 3 || input[i].value === "0")) {
            createErrorMessage(input[i].parentElement.parentElement.children[1], "El valor debe tener 3 dígitos.");
        }
    }

    if (!error) {
        const modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
});

buttonContinuar.addEventListener("click", ()=>{
    const data =localStorage.getItem("usuarios")
    const variable= JSON.parse(data)
    
    variable ? window.location.href = `../index.html`: window.location.href = `../views/home.html`
   
})