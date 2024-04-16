/*let suma = 0;
const hastaDondeSumar = prompt("Hasta que número quieres sumar?");

for (let i = 1; i <= hastaDondeSumar; i++) {
  suma = suma + i;
}

alert("El resultado de la suma es : " + suma);
*/

const cantidad = Number(prompt("¿Cuántos números desea sumar?"));

let sumatoria = 0;

for (let index = 1; index <= cantidad; index++) {
    const numeroAsumar = Number(prompt("Ingrese un número a sumar"));
    sumatoria = sumatoria + numeroAsumar;
  }

alert("La sumatoria de los números ingresados es: " + sumatoria);