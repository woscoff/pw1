 const datos = JSON.parse(localStorage.getItem("reproduciendo"));
 let imagenReproduciendo=document.getElementsByClassName("albumSonando")[0]
 imagenReproduciendo.src=datos[0].imgCancion
 let albumReproduciendo= document.getElementsByClassName("albumText")[0]
 albumReproduciendo.innerHTML=datos[0].descripcion