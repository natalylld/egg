const numero1 = Number(prompt("Ingrese primer número"));
const numero2 = Number(prompt("Ingrese segundo número"));
const suma =numero1 +numero2;
const mensajeSuma = "El resultado de la suma es "+suma;

const promedio = suma / 2;
const triple = promedio * 3;
const resultadoMenosDiez = triple - 10;

const mensajeFinal = "El resultado de las operaciones es "+resultadoMenosDiez;
console.log(mensajeSuma);
console.log(mensajeFinal);

/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");

/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = mensajeFinal;