// Obtener los divs de la pantalla
var resultado = document.querySelector(".resultado");
var divCifra1 = document.querySelector(".cifra1");
var divCifra2 = document.querySelector(".cifra2");

// obtener los divs de los puntos de progreso
var dots = document.getElementsByClassName("dot");


//botón de borrar
var botonBorrar = document.querySelector(".botonCE");
var botonIntro = document.querySelector(".botonIntro");

// Crear una variable para almacenar un número
var numero = 0;

//Crear el objeto donde va el historico
var historico = {};


// Crear cifras aletorias
let cifra1 = 0;
cifra1 = Math.floor(Math.random() * 11);
let cifra2 = 0;
cifra2 = Math.floor(Math.random() * 11);

//poner cifras aleatorias en la pantalla
divCifra1.textContent = cifra1
divCifra2.textContent = cifra2

// Escuchar los botones con el id igual al número
var botones = document.querySelectorAll(".boton");
// Escuchar boton borrar
botonBorrar.addEventListener("click", borrar);
// Escuchar boton Aceptar
botonIntro.addEventListener("click", aceptar);


console.log(botones);

// Recorrer los botones y añadir un evento de clic
for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function() {
      // Obtener el número del botón a través del id
      var numeroBoton = this.id.replace("boton", "");
      
      // Concatenar el número del botón a la variable
      numero += numeroBoton;
      
      // Mostrar el número en el div con la clase "panel"
      numero = Number(numero);
      resultado.textContent = numero;
    });
  }


  console.log(botonBorrar);

  
  
function borrar () {
  console.log(numero *2)
  numero = 0
  resultado.textContent = numero;
  console.log(typeof numero);
  console.log ("borrando...");
}


function aceptar() {

  var resultadoCorrecto = cifra1*cifra2;
  console.log(resultadoCorrecto);

  if (numero === (resultadoCorrecto)) {
    resultado.textContent ="ok";
    
  } else {
    resultado.textContent ="error";
  }
setTimeout(() => {
  location.reload ();
}, 2000);
}
