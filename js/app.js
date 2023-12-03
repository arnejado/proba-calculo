// Obtener los divs de la pantalla
var resultado = document.querySelector(".resultado");
var divCifra1 = document.querySelector(".cifra1");
var divCifra2 = document.querySelector(".cifra2");

// obtener los divs de los puntos de progreso
var dots = document.getElementsByClassName("dot");


//botón de borrar
var botonBorrar = document.querySelector(".botonCE");
var botonIntro = document.querySelector(".botonIntro");

// Declarar variables globlaes
var cifra1 = 0;
var cifra2 = 0;
var resultadoCorrecto = 0;
var numero = 0;
var acertar = true;
var ojeadorPuntos = 0;


//Crear el objeto donde va el historico
var historico = {};


// Escuchar los botones con el id igual al número
var botones = document.querySelectorAll(".boton");
// Escuchar boton borrar
botonBorrar.addEventListener("click", borrar);
// Escuchar boton Aceptar
botonIntro.addEventListener("click", aceptar);


console.log(dots);

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

rellenar();


function rellenar () {

  if (ojeadorPuntos === 10) {
    fin ();
  } else {
    // ponemos el resultado a 0
    numero = 0;
    resultado.textContent = numero;

    // Crear cifras aletorias
    cifra1 = Math.floor(Math.random() * 11);
    cifra2 = Math.floor(Math.random() * 11);  
    
    //poner cifras aleatorias en la pantalla
    divCifra1.textContent = cifra1
    divCifra2.textContent = cifra2
  }
}

function borrar () {
  console.log(numero *2)
  numero = 0
  resultado.textContent = numero;
  console.log(typeof numero);
  console.log ("borrando...");
}

function rellenarProgueso() {
  console.log(acertar);
  console.log(cifra1);
  console.log(cifra2);
  console.log(resultadoCorrecto);
  console.log(ojeadorPuntos);
  if (acertar === true) {
    dots[ojeadorPuntos].className = "dot correcto";
    console.log ("acertó")
  } else {
    console.log ("falló")
    dots[ojeadorPuntos].className = "dot incorrecto";
  }
  
  ojeadorPuntos++
}

function aceptar() {
  console.log("entrado en acpetar");
  console.log(resultadoCorrecto);
  console.log(cifra1);
  resultadoCorrecto = cifra1*cifra2;
  console.log(resultadoCorrecto);

  if (numero === (resultadoCorrecto)) {
    resultado.textContent ="ok";
    acertar = true
    rellenarProgueso();
  } else {
    resultado.textContent ="error";
    acertar = false
    rellenarProgueso()
  }
setTimeout(() => {
  rellenar ();
}, 1500);
}

function fin () {
  console.log ("llegamos al final");
}

