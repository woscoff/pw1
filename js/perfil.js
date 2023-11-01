const buttonGuardar = document.getElementsByClassName("btn")[1];
var modal = document.getElementById("myModal");
const buttonCerrar= document.getElementById("cancelButton")
const inputNombre= document.getElementById("nombre")
const inputContra= document.getElementById("contraceña")
const inputContra2=document.getElementById("repetir-contraceña")
const titleHeader=document.getElementsByClassName("title-header")

buttonGuardar.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "block";
    if(inputContra.value && inputContra.value){
        if(inputContra.value !== inputContra2.value){
            titleHeader[0].innerHTML="Las contraseñas no coinciden"
        }else{
            localStorage.setItem("usuarios",JSON.stringify([{nombre:inputNombre.value, contraseña:inputContra.value}]))
            const user = document.getElementsByClassName("usuario")[0];
            user.textContent=inputNombre.value
        }
    }else{
        titleHeader[0].innerHTML="Las contraseñas no cumplen los parametros requeridos"
    }


});
buttonCerrar.addEventListener("click",(event)=>{
    event.preventDefault();
    modal.style.display="none"
})
const button = document.getElementsByClassName("button")[1]
button.addEventListener("click",()=>{
    localStorage.removeItem("usuarios")
})