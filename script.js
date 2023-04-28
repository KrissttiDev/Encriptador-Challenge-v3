var btnEncrip=document.querySelector(".btn_encript");
var btnDesencrip=document.querySelector(".btn_desencript");
var contnmnco=document.querySelector(".cont_mnco");
var contTxt=document.querySelector(".cont_msg");
var contResult=document.querySelector(".txt_result");

btnEncrip.onclick=encriptar;
btnDesencrip.onclick=desencriptar;

function encriptar (){
    //hide_txt();
    contResult.textContent=enCript();
}

function desencriptar (){
    hide_txt();
    contResult.textContent=desenCript();
}


function hide_txt(){
    contnmnco.classList.add("ocultar");
    contTxt.classList.add("ocultar");
}






function enCript(){
    var mytxt=document.querySelector(".txt_box");
    var frase =mytxt.value
    var c=detectMayusTil(frase);
    if(c!=true)
        {console.log("minusculas");
        hide_txt();
        var txtEncriptado=frase.replace(/e/img,"enter");
        var txtEncriptado=txtEncriptado.replace(/o/img,"orbe");
        var txtEncriptado=txtEncriptado.replace(/i/img,"imes");
        var txtEncriptado=txtEncriptado.replace(/a/img,"ai");
        var txtEncriptado=txtEncriptado.replace(/u/img,"ufat");
        return txtEncriptado;
        }
    else {window.alert("Solo letras minúsculas y sin acentos");}
}


function desenCript(){
    var mytxt=document.querySelector(".txt_box");
    var frase =mytxt.value
    var c=detectMayusTil(frase);
    if(c!=true)
        {console.log("minusculas");
        hide_txt();
        var txtEncriptado=frase.replace(/enter/img,"e");
        var txtEncriptado=txtEncriptado.replace(/orbe/img,"o");
        var txtEncriptado=txtEncriptado.replace(/imes/img,"i");
        var txtEncriptado=txtEncriptado.replace(/ai/img,"a");
        var txtEncriptado=txtEncriptado.replace(/ufat/img,"u");
        return txtEncriptado;
        }
    else {window.alert("Solo letras minúsculas y sin acentos");}
}

function detectMayusTil(frase){
    
    let patron=/^[A-ZÁÉÍÓÚáéíóú]/;
    return patron.test(frase)
    
}


const btnCopyTxt=document.querySelector(".btn_copy")
    btnCopyTxt.addEventListener("click", copy=()=>{
        var txtcont=document.querySelector(".txt_result").textContent;
        navigator.clipboard.writeText(txtcont);
        console.log("copiado");
    })