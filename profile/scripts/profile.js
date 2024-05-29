// Definir variables de datos personales
const nombre = "Nataly";
const edad = 26;
const profesion = "Ingeniera de sistemas";
const ubicacion = "Lima";
const hobby = "futbol";
let isOnline = false;

 // Preguntar al usuario si está conectado utilizando prompt
const respuesta = prompt("¿Estás conectado? (Responde SI o NO)");

// Convertir la respuesta a mayúsculas para evitar problemas de mayúsculas y minúsculas
const respuestaMayusculas = respuesta.toUpperCase();

// Verificar la respuesta del usuario y actualizar el estado de isOnline si es necesario
if (respuestaMayusculas === "SI" && !isOnline) {
    isOnline = true;
}

// Mostrar mensaje en la consola dependiendo del estado de isOnline
if (isOnline) {
    // Generar template string para redactar un texto con las variables
    const texto = `
    ¡Hola! Mi nombre es ${nombre}, tengo ${edad} años y soy ${profesion}.
    Actualmente resido en ${ubicacion} y uno de mis hobbies es ${hobby}.
    El usuario se encuentra conectado.
    `;
    // Imprimir el texto generado
    console.log(texto);

    // Seleccionar el elemento donde se mostrará el texto
    const perfilContainer = document.getElementById('parrafo');

    // Establecer el texto generado en el elemento seleccionado
    perfilContainer.innerHTML = texto;
    // Aquí mostrarías el "template" ya que el usuario está conectado
} else {
    // Aquí ocultarías el "template" ya que el usuario no está conectado
    // Generar template string para redactar un texto con las variables
    const texto = `
    ¡Hola! Mi nombre es ${nombre}, tengo ${edad} años y soy ${profesion}.
    Actualmente resido en ${ubicacion} y uno de mis hobbies es ${hobby}.
    Es un placer conocerte.
    `;
    // Imprimir el texto generado
    console.log(texto);

    // Seleccionar el elemento donde se mostrará el texto
    const perfilContainer = document.getElementById('parrafo');

    // Establecer el texto generado en el elemento seleccionado
    perfilContainer.innerHTML = texto;
}
