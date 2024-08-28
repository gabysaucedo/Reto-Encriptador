//Esta funcion asigna una frase dependiendo de la situacion
function asignarTextoElemento(elemento,salida){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=salida;
    return;
}

//Funcion para encriptar 
function encriptar() {
    var texto = document.getElementById("texto-input").value;
    texto = texto
        .replace(/a/gi, "bear")
        .replace(/e/gi, "owl")
        .replace(/i/gi, "rat")
        .replace(/o/gi, "cat")
        .replace(/u/gi, "dog");
    console.log(texto);
}
/*
//Funcion para validar que el texto no tenga mayusculas o caracteres especiales
function validarTexto (texto) {
    
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;    
    let vacio="";  
      
    if(texto.match(mayusculas)||texto.match(caracteres)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true; 
    }else if(texto==vacio){
       alert("Ingrese un mensaje para encriptar");
        return true;
   }else {
        return false;
    }
}
*/