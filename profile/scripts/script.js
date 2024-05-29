const misDatosFisicos = {
    nombre: "Juan",
    edad: 30,
    dirección: {
        calle: "Calle Principal",
        número: 123,
        ciudad: "Ciudad de México"
    },
    altura: 175,
    peso: 75,
    hobby: "jugar al fútbol"
};

// Acceder al contenedor div con id "perfil"
const perfilContainer = document.getElementById('perfil');

// Crear una variable para almacenar el contenido del perfil usando template strings
const contenidoPerfil = `
    <h2>Datos personales</h2>
    <p><strong>Nombre:</strong> ${misDatosFisicos.nombre}</p>
    <p><strong>Edad:</strong> ${misDatosFisicos.edad}</p>
    <p><strong>Dirección:</strong> ${misDatosFisicos.dirección ? `${misDatosFisicos.dirección.calle} ${misDatosFisicos.dirección.número}, ${misDatosFisicos.dirección.ciudad}` : 'No especificada'}</p>
    <p><strong>Altura:</strong> ${misDatosFisicos.altura || 'No especificada'}</p>
    <p><strong>Peso:</strong> ${misDatosFisicos.peso || 'No especificado'}</p>
    <p><strong>Hobby:</strong> ${misDatosFisicos.hobby || 'No especificado'}</p>
`;

// Asignar el HTML generado al innerHTML del contenedor perfil
perfilContainer.innerHTML = contenidoPerfil;

function imprimirTemplate(id = "pre3") {
    const container = document.getElementById(id);
    if (!container) {
        console.error(`No se encontró ningún elemento con el id "${id}".`);
        return;
    }

    // Generar el template
    const template = `
        <h2>Datos personales</h2>
        <p><strong>Nombre:</strong> ${misDatosFisicos.nombre}</p>
        <p><strong>Edad:</strong> ${misDatosFisicos.edad}</p>
        <p><strong>Dirección:</strong> ${misDatosFisicos.dirección ? `${misDatosFisicos.dirección.calle} ${misDatosFisicos.dirección.número}, ${misDatosFisicos.dirección.ciudad}` : 'No especificada'}</p>
        <p><strong>Altura:</strong> ${misDatosFisicos.altura || 'No especificada'}</p>
        <p><strong>Peso:</strong> ${misDatosFisicos.peso || 'No especificado'}</p>
        <p><strong>Hobby:</strong> ${misDatosFisicos.hobby || 'No especificado'}</p>
    `;

    // Imprimir el template en el lugar especificado
    container.innerHTML = template;
}

imprimirTemplate();