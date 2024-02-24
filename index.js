function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let sherlock = document.getElementById("sherlock");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      sherlock.src = "./img/encriptado.jpg"
    } else {
      sherlock.src = "./img/sherlock.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa en el area de texto lo que deseas encritar o desencriptar";
      swal("Ooops!", "ingresa un texto por favor", "warning");
    }                     
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let sherlock = document.getElementById("sherlock");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        sherlock.src = "./img/desencriptado.jpg";
      } else {
        sherlock.src = "./img/sherlock.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa en el area de texto lo que deseas encritar o desencriptar";
        swal("Ooops!", "ingresa un texto por favor", "warning");
      }
}
function myFunction() {
  
  let copyText = document.getElementById("texto");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("texto-copiado: " + copyText.value);
}
