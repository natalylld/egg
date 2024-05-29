let frutas = ["manzana", "banana", "naranja"];
let [fruta1, fruta2, fruta3] = frutas;
console.log(fruta1); // manzana
console.log(fruta2); // banana
console.log(fruta3); // naranja

const hobbies = {
  enPareja: [
    "Ver películas juntos",
    "Cocinar en equipo",
    "Viajar a nuevos lugares",
    "Hacer ejercicio juntos",
    "Ir a conciertos",
  ],
  conAmigos: [
    "Jugar videojuegos",
    "Hacer senderismo",
    "Organizar barbacoas",
    "Ir a eventos deportivos",
    "Salir a bailar",
  ],
  conFamilia: [
    "Hacer manualidades",
    "Jugar juegos de mesa",
    "Preparar comidas en familia",
    "Realizar excursiones",
    "Ver series de televisión",
  ],
};

console.log(hobbies);

// Acceder al tercer hobby de la lista "enPareja"
const tercerHobbyEnPareja = hobbies.enPareja[2];

// Acceder al cuarto hobby de la lista "conFamilia"
const cuartoHobbyConFamilia = hobbies.conFamilia[3];

console.log("Tercer hobby en pareja:", tercerHobbyEnPareja);
console.log("Cuarto hobby con familia:", cuartoHobbyConFamilia);

//const mensaje = `Mi hobby favorito para hacer en pareja es "${tercerHobbyEnPareja}", porque disfruto compartir momentos íntimos y de conexión con mi pareja. Y mi hobby favorito para hacer en familia es "${cuartoHobbyConFamilia}", ya que me encanta pasar tiempo de calidad y crear recuerdos especiales con mis seres queridos.`;

//console.log(mensaje);

// Función para colocar el mensaje dentro del div
function mostrarMensaje() {
    const mensaje = `Mi hobby favorito para hacer en pareja es "${tercerHobbyEnPareja}", porque disfruto compartir momentos íntimos y de conexión con mi pareja. Y mi hobby favorito para hacer en familia es "${cuartoHobbyConFamilia}", ya que me encanta pasar tiempo de calidad y crear recuerdos especiales con mis seres queridos.`;
    
    // Obtener el div donde queremos insertar el mensaje
    const divMensaje = document.getElementById('hobbies-seleccionados');
    
    // Insertar el mensaje dentro del div
    divMensaje.innerHTML = mensaje;
}

// Llamar a la función al cargar la página para asegurar que el mensaje se muestre
window.onload = mostrarMensaje;

const todos = {
    hobbies: [
      ...hobbies.enPareja,
      ...hobbies.conAmigos,
      ...hobbies.conFamilia
    ]
  };
  
console.log("todos: "+todos.hobbies);

const algunos = {
    hobbies: [
      hobbies.enPareja[1], // Segundo hobby individual enPareja
      ...hobbies.enPareja.slice(2, 4), // Tercer y cuarto hobby enPareja
      hobbies.conAmigos[0], // Primer hobby individual conAmigos
      hobbies.conFamilia[0] // Primer hobby individual conFamilia
    ]
  };
  
  console.log("algunos: "+algunos.hobbies);
  
  