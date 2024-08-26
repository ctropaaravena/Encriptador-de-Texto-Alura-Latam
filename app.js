var btn_copiar = document.querySelector('#btn-copiar');
var boton1 = document.querySelector("#btn-encriptar");
var boton2 = document.querySelector("#btn-desencriptar"); 


function encriptar (){
  if(document.getElementById("input-texto").value===""){
    document.getElementById('boton-copiar').style.display = 'none'
    document.getElementById('input-mensaje').style.display = 'none'
    document.getElementById('mensaje').style.display = 'block'
    document.getElementById('imagen-derecha').style.display = 'block'
    document.getElementById("input-texto").value="";
  }else{
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
    document.getElementById('boton-copiar').style.display = 'block'
    document.getElementById('input-mensaje').style.display = 'block'
    document.getElementById('mensaje').style.display = 'none'
    document.getElementById('imagen-derecha').style.display = 'none'
    document.getElementById("input-texto").value="";
  }
  }
function desencriptar (){ 
  if( document.getElementById("input-texto").value===""){
    document.getElementById('boton-copiar').style.display = 'none'
    document.getElementById('input-mensaje').style.display = 'none'
    document.getElementById('mensaje').style.display = 'block'
    document.getElementById('imagen-derecha').style.display = 'block'
    document.getElementById("input-texto").value="";
  }else{
    var texto = document.querySelector("#input-texto").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector("#text-input-salida").value = textoCifrado; 
    document.querySelector("#input-texto").value;
    document.getElementById('boton-copiar').style.display = 'block'
    document.getElementById('input-mensaje').style.display = 'block'
    document.getElementById('mensaje').style.display = 'none'
    document.getElementById('imagen-derecha').style.display = 'none'
    document.getElementById("input-texto").value="";
  }
}

function CopiarTexto (){
    var copiado = document.querySelector('#text-input-salida');
     copiado.select();

  try {
    var retorno = document.execCommand('copy');
    var mensagem = retorno ? 'Texto Copiado!' : 'Ops, algo paso!';
    alert(mensagem);
  } catch (err) {
    alert('Ups, occurrio un error');
  }
}
