// Solicitar dos números al usuario
const num1 = prompt("Introduce el primer número:");
const num2 = prompt("Introduce el segundo número:");

// Definir la función dividir
function dividir(a, b, callback) {
    const numero1 = parseFloat(a);
    const numero2 = parseFloat(b);

    if (isNaN(numero1) || isNaN(numero2)) {
        callback("Error: Ambos parámetros deben ser números.");
        return;
    }

    if (numero2 === 0) {
        callback("Error: No se puede dividir por cero.");
        return;
    }

    const resultado = numero1 / numero2;
    callback(null, resultado);
}

// Función de retorno (callback) para manejar el resultado o el error
function manejarResultado(error, resultado) {
    const resultadoDiv = document.getElementById("mensaje");
    if (error) {
        alert(error);
        resultadoDiv.textContent = error;
    } else {
        resultadoDiv.textContent = `El resultado de la división es: ${resultado}`;
    }
}

// Llamar a la función dividir
dividir(num1, num2, manejarResultado);


const mensajeFinal = "El resultado de las operaciones es "+resultadoMenosDiez;
console.log(mensajeSuma);
console.log(mensajeFinal);

/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");

/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = mensajeFinal;


