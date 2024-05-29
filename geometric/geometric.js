import { perimetro } from './perimeter.js';
import { area } from './area.js';
import { rectangulos } from './rectangleData.js';

/*/ Definición de los objetos que representan los rectángulos
const rectangulo1 = { altura: 10, ancho: 5 };
const rectangulo2 = { altura: 7, ancho: 3 };
const rectangulo3 = { altura: 12, ancho: 8 };*/

// Función para insertar los datos de los rectángulos en la tabla
function mostrarRectangulos() {
  const tabla = document
    .getElementById("tablaRectangulos")
    .getElementsByTagName("tbody")[0];
  //const rectangulos = [rectangulo1, rectangulo2, rectangulo3];

  rectangulos.forEach((rect, index) => {
    const fila = tabla.insertRow();
    fila.insertCell().textContent = `Rectángulo ${index + 1}`;
    fila.insertCell().textContent = rect.altura;
    fila.insertCell().textContent = rect.ancho;
    fila.insertCell().textContent = perimetro(rect);
    fila.insertCell().textContent = area(rect);
  });
}

// Llamar a la función al cargar la página
window.onload = mostrarRectangulos;
