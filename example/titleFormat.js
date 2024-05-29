//Reciba como parámetro una cadena de texto
const cadena = "CADENA DE TEXTO";

//Corte la cadena en: primera letra y resto del título (método charAt y slice)
console.log("CHARAT: "+cadena.charAt(0));
console.log("SLICE: "+cadena.slice(0,1));

//La primera letra la convierta en mayúsculas (método toUpperCase)
const minusculas = cadena.charAt(0).toUpperCase();
console.log("Mayusculas: "+minusculas);

//El resto en minúsculas  (método toLowerCase)
const mayusculas = cadena.slice(1,cadena.length).toLocaleLowerCase();
console.log("Minusculas: "+mayusculas);

//Concatene ambas partes (con +)
console.log("Unión de ambas partes: "+minusculas + mayusculas);

//Retorne la longitud de la cadena
console.log("Longitud de cadena: "+cadena.length);