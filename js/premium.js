const avanzarButton = document.getElementById("avanzarButton");

avanzarButton.addEventListener("click", function (event) {
    event.preventDefault()
    const selectedPlan = document.querySelector('input[name="plan"]:checked');
    if (selectedPlan) {
     
        const planValue = selectedPlan.value;
        const newURL = `../views/pagarSinLogin.html?selectedPlan=${planValue}`;
        window.location.href = newURL;
    } else {
        alert("Por favor, seleccione un plan antes de avanzar.");
    }
});
