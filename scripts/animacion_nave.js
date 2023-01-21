const reg = [/ai/g,/enter/g,/imes/g,/ober/g,/ufat/g];
let textoEncriptado = document.getElementById("resultado_Sinmensaje").innerText;
let text = ""; 
let arreglo = "";
let result ="";
let vocales=["a","e","i","o","u"];
let codigo=["ai","enter","imes","ober","ufat"];
let resTexto="";

document.querySelector("#btn-encriptar").addEventListener("click",()=>{
    text = document.querySelector("#input-texto").value;
    if(text.length != 0 && /^\s+$/.test(text) == false){        
        arreglo = text.split('');
        arreglo.forEach((elemento, index) =>{
            vocales.forEach((vocal, posicion) =>{
                arreglo[index]=(vocal==elemento)?codigo[posicion]:arreglo[index];
            })
            result+=arreglo[index];
        })
        resTexto=result;
        result=[];
        document.querySelector('#resultado_Sinmensaje').innerText = resTexto;
        document.querySelector('.imagen_resultado').style.display="none";
    }
    else{
        modificaAlerta("1");
    }
});
document.querySelector("#btn-desencriptar").addEventListener("click",()=>{
    if(document.querySelector("#input-texto").value.length!=0 && /^\s+$/.test(text) == false){
        resTexto = document.querySelector("#input-texto").value;
        reg.forEach((cod, index)=>{
            resTexto = resTexto.replace(cod, vocales[index]);    
        })
        document.querySelector('#resultado_Sinmensaje').innerText = resTexto;
        resTexto="";
    }
    else{
        modificaAlerta("2");
    }
    
});
document.querySelector("#btn-copiar").addEventListener("click",()=>{
    document.getElementById("resultado_Sinmensaje").value != ""?
    document.getElementById("input-texto").value = document.getElementById("resultado_Sinmensaje").value: 
    modificaAlerta("3");
});
