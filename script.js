var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var cajaTexto = document.querySelector(".cajatexto");
var resultado = document.querySelector(".texto-resultado");
var botonCopiar = document.querySelector(".btn-copiar");
var contenedorMuneico = document.querySelector(".contenedormuneico");
var contenedorParrafo = document.querySelector(".contenedor-parrafo");

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiarTexto);

function encriptar() {
  var texto = cajaTexto.value.toLowerCase();
  var textoEncriptado = encriptarTexto(texto);
  resultado.textContent = textoEncriptado;
 // Copiar el texto desencriptado a la caja de texto principal
 cajaTexto.value = textoEncriptado;

 // Eliminar la imagen muneico y el texto debajo
 contenedorMuneico.style.display = "none";
 contenedorParrafo.style.display = "none";

}

function desencriptar() {
  var textoEncriptado = cajaTexto.value.toLowerCase();
  var textoDesencriptado = desencriptarTexto(textoEncriptado);
  resultado.textContent = textoDesencriptado;

  // Copiar el texto desencriptado a la caja de texto principal
  cajaTexto.value = textoDesencriptado;

  // Eliminar la imagen muneico y el texto debajo
  contenedorMuneico.style.display = "none";
  contenedorParrafo.style.display = "none";
}

function copiarTexto() {
  resultado.select();
  document.execCommand("copy");
}

function encriptarTexto(texto) {
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");
  return texto;
}

function desencriptarTexto(textoEncriptado) {
  textoEncriptado = textoEncriptado.replace(/enter/g, "e");
  textoEncriptado = textoEncriptado.replace(/imes/g, "i");
  textoEncriptado = textoEncriptado.replace(/ai/g, "a");
  textoEncriptado = textoEncriptado.replace(/ober/g, "o");
  textoEncriptado = textoEncriptado.replace(/ufat/g, "u");
  return textoEncriptado;
}
