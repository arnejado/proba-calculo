// Obtener los divs de la pantalla
var resultado = document.querySelector(".resultado");
var divCifra1 = document.querySelector(".cifra1");
var divCifra2 = document.querySelector(".cifra2");


// Crear una variable para almacenar un número
var numero = 0;

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

  //botón de borrar

  var botonBorrar = document.querySelector(".botonCE");

  console.log(botonBorrar);

  botonBorrar.addEventListener("click", borrar);
  
  function borrar () {
    console.log(numero *2)
    numero = 0
    resultado.textContent = numero;
    console.log(typeof numero);
    console.log ("borrando...");
  }
