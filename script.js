//alert("Hola este es mi Javascript");

//VARIABLES
/*
let nombre="Alex";
nombre="Maria";
var nombre1="Martha1";
const nombre2="Martha2";
nombre2 = "Maria2";
console.log(nombre);
console.log(nombre1);
console.log(nombre2);
*/

// SELECCIONAR ELEMENTOS
/*
let contenidoTitulo = "Nombre";
const titulo = document.querySelector(".logo .fuente-acento");
titulo.innerHTML = contenidoTitulo;
*/

//CONDICIONALES
/*
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Nombre2"){
    titulo.innerHTML = "Otro";
}else{
    console.log("no se cumnple");  
}
*/
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});