// Definición de variables para datos personales y físicos
const nombre = 'Juan';
const apellido = 'Pérez';
const edad = 30;
const altura = 175; // en centímetros
const peso = 70; // en kilogramos
const correo = 'bnatalyld@gmail.com'

// Creación del objeto que contiene los datos personales y físicos
const persona = {
  nombre,
  apellido,
  edad,
  fisico: {
    altura,
    peso
  },
  correo
};

console.log(persona);
