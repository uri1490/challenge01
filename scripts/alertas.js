let mensaje="";
function modificaAlerta(tipo){
switch(parseInt(tipo)){
case 1: mensaje = "¡No hay texto que encriptar!";
break;
case 2: mensaje = "¡No hay texto que desencriptar!";
break;
case 3: mensaje = "¡No hay texto que copiar!";
break;
}
document.querySelector(".alertas").style.display="flex";
document.querySelector('.mensaje_Alerta').innerText= mensaje;
document.querySelector('.mensaje_Alerta').style.color="#00FFF5";

}


document.querySelector(".cerrar").addEventListener("click",()=>{
    document.querySelector(".alertas").style.display="none";
});