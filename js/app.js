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
var contadorAcertados = 0;
var contadorFallados = 0;

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


// -->  EMPIEZA EL PROGRAMA  <--

rellenar();


function rellenar () {

    // ponemos el resultado a 0
    numero = "";
    resultado.textContent = numero;

    // Crear cifras aletorias
    cifra1 = Math.floor(Math.random() * 11);
    cifra2 = Math.floor(Math.random() * 11);  
    
    //poner cifras aleatorias en la pantalla
    divCifra1.textContent = cifra1
    divCifra2.textContent = cifra2
  }


function borrar () {
  console.log(numero *2)
  numero = 0
  resultado.textContent = numero;
}

function rellenarProgueso() {

  if (acertar === true) {
    dots[ojeadorPuntos].className = "dot correcto";
    contadorAcertados++
  } else {
    dots[ojeadorPuntos].className = "dot incorrecto";
    contadorFallados++
  }
  ojeadorPuntos++
  console.log (ojeadorPuntos);

  if (ojeadorPuntos === 10 ) {
    fin()
  } else {
    rellenar()
  }
}

function aceptar() {
  resultadoCorrecto = cifra1*cifra2;
  
  if (numero === (resultadoCorrecto)) {
    acertar = true
    rellenarProgueso();
  } else {
    acertar = false
    rellenarProgueso()
  }

}

function fin () {
  let teclado = document.querySelector(".teclado");


  console.log("entramos en el fin");
  console.log(contadorAcertados);
  console.log(contadorFallados);
  // Eliminar todos los botones del teclado
  let botones = teclado.querySelectorAll("button");
  for (let i = 0; i < botones.length; i++) {
    teclado.removeChild(botones[i]);
  }
  // Crear un nuevo botón para volver a empezar
  let totalAcertados = document.createElement("div");
  totalAcertados.textContent = `Acertados: ${contadorAcertados}`;
  totalAcertados.className = "mostrarTotales acertados";
  let botonRecargar = document.createElement("button");
  botonRecargar.textContent = "Volver a empezar";
  botonRecargar.className = "botonRecargar botonEspecial";
  let totalFallados = document.createElement("div");
  totalFallados.textContent = `Fallados: ${contadorFallados}`;
  totalFallados.className = "mostrarTotales fallados";
  // Añadir el nuevo botón al teclado
  teclado.appendChild(totalAcertados);
  teclado.appendChild(botonRecargar);
  teclado.appendChild(totalFallados);
  // Añadir un evento de clic al nuevo botón que reinicie el juego

  //Añadir fuegos artificiales si tenemos pleno
  if (contadorAcertados === 10) {
    console.log("pleno");
    let firework1 = document.createElement("div");
    let firework2 = document.createElement("div");
    let firework3 = document.createElement("div");
    firework1.className = "firework"; 
    firework2.className = "firework"; 
    firework3.className = "firework"; 
    teclado.appendChild(firework1);
    teclado.appendChild(firework1);
    teclado.appendChild(firework1);
  }


  botonRecargar.addEventListener("click", function() {
    // Resetea las variables
    cifra1 = 0;
    cifra2 = 0;
    resultadoCorrecto = 0;
    numero = 0;
    acertar = true;
    ojeadorPuntos = 0;
    // Resetea los puntos de progreso
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = "dot";
    }
    // Llama a la función rellenar para empezar el juego
    window.location.reload();})
};

