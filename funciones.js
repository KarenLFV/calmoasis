 // Función para mostrar la sección correspondiente al hacer clic en un botón de la escala
 function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones primero
    const secciones = document.querySelectorAll('.hidden');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });

    // Mostrar la sección deseada
    const seccion = document.getElementById(seccionId);
    seccion.style.display = 'block';

    // Actualizar el valor seleccionado en el span
    const selectedRating = document.getElementById('selected-rating');
    selectedRating.textContent = seccionId;
}

        