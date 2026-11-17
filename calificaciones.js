document.getElementById('btnCalcular').addEventListener('click', evaluarCalificaciones);

function evaluarCalificaciones() {
    // Obtener valores de los campos del formulario
    const nombre = document.getElementById('nombreEstudiante').value.trim();
    const cal1Texto = document.getElementById('calificacion1').value.trim();
    const cal2Texto = document.getElementById('calificacion2').value.trim();
    const cal3Texto = document.getElementById('calificacion3').value.trim();
    const divResultado = document.getElementById('resultado');

    // A. Validación de información
    if (nombre === '') {
        alert('Por favor, ingresa el nombre del estudiante.');
        return;
    }

    if (cal1Texto === '' || cal2Texto === '' || cal3Texto === '') {
        alert('Por favor, ingresa las tres calificaciones antes de calcular.');
        return;
    }

    const cal1 = parseFloat(cal1Texto);
    const cal2 = parseFloat(cal2Texto);
    const cal3 = parseFloat(cal3Texto);

    if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
        alert('Todas las calificaciones deben ser números válidos.');
        return;
    }

    if (cal1 < 0 || cal1 > 10 || cal2 < 0 || cal2 > 10 || cal3 < 0 || cal3 > 10) {
        alert('Las calificaciones deben estar en un rango válido entre 0 y 10.');
        return;
    }

    // B. Calcular el promedio
    const promedio = (cal1 + cal2 + cal3) / 3;
    const promedioFormateado = promedio.toFixed(2);

    // C. Determinar el resultado (APROBADO o REPROBADO) usando if, else if y else
    let estado = '';
    let colorEstado = '';

    if (promedio >= 6 && promedio <= 10) {
        estado = 'APROBADO';
        colorEstado = 'rgb(54, 155, 8)';
    } else if (promedio < 6) {
        estado = 'REPROBADO';
        colorEstado = '#d93025';
    } else {
        estado = 'FUERA DE RANGO';
        colorEstado = '#555555';
    }

    // D. Determinar la observación de acuerdo con el promedio
    let observacion = '';

    if (promedio >= 9) {
        observacion = 'Excelente desempeño';
    } else if (promedio >= 8) {
        observacion = 'Muy buen desempeño';
    } else if (promedio >= 7) {
        observacion = 'Buen desempeño';
    } else if (promedio >= 6) {
        observacion = 'Desempeño suficiente';
    } else {
        observacion = 'Necesita mejorar';
    }

    // 4. Presentar los resultados dentro de la página web
    divResultado.style.display = 'block';
    divResultado.style.borderColor = colorEstado;
    divResultado.innerHTML = `
        <h3 style="margin-top: 0; color: rgb(78, 116, 8);">📄 Boleta de Resultados</h3>
        <p style="margin: 6px 0;"><strong>Estudiante:</strong> ${nombre}</p>
        <p style="margin: 6px 0;"><strong>Calificaciones:</strong> ${cal1}, ${cal2}, ${cal3}</p>
        <p style="margin: 6px 0; font-size: 1.1em;"><strong>Promedio obtenido:</strong> ${promedioFormateado}</p>
        <p style="margin: 6px 0; font-size: 1.1em;"><strong>Estado:</strong> <span style="color: ${colorEstado}; font-weight: bold;">${estado}</span></p>
        <p style="margin: 6px 0;"><strong>Observación:</strong> ${observacion}</p>
    `;
}