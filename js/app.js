// Crear una variable para almacenar un número
var numero = "";

// Obtener el div con la clase "panel"
var panel = document.querySelector(".panel");

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
      panel.textContent = numero;
    });
  }

  //botón de borrar

  var botonBorrar = document.querySelector(".botonCE");

  console.log(botonBorrar);

  botonBorrar.addEventListener("click", borrar);
  
  function borrar () {
    numero = 0
    panel.textContent = numero;
    console.log ("borrando...");
  }