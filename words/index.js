const frase = prompt("Ingrese una palabra o frase");

const cantidad = frase.length;

let mensajeCantidad = `La cantidad de caracteres es: ${cantidad}`;

alert(mensajeCantidad);

const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();

let minMay = `La frase en minuscula es ${fraseMinusculas} y mayúscula es ${fraseMayusculas}`;

alert(minMay);
