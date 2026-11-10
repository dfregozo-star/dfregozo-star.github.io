// Asignar el evento 'click' al botón de conversión
document.getElementById('btnConvertir').addEventListener('click', convertirTemperatura);

function convertirTemperatura() {
    // 1. Obtener los valores de los elementos HTML
    const inputValor = document.getElementById('tempInput').value.trim();
    const tipoConversion = document.getElementById('conversionSelect').value;
    const divResultado = document.getElementById('resultado');

    // 2. Validación: verificar que el campo no esté vacío
    if (inputValor === '') {
        alert('Por favor, ingresa una temperatura antes de continuar.');
        return; // Detiene la ejecución de la función
    }

    // Convertir el texto ingresado a número flotante
    const temperatura = parseFloat(inputValor);

    // Variables para almacenar los resultados y etiquetas
    let resultadoCalculado = 0;
    let unidadEntrada = '';
    let unidadSalida = '';
    let textoTipo = '';

    // 3. Identificar la conversión y realizar la operación matemática
    if (tipoConversion === 'cToF') {
        // Fórmula: Fahrenheit = (Celsius * 9 / 5) + 32
        resultadoCalculado = (temperatura * 9 / 5) + 32;
        unidadEntrada = '°C';
        unidadSalida = '°F';
        textoTipo = 'Celsius a Fahrenheit';
    } else if (tipoConversion === 'fToC') {
        // Fórmula: Celsius = (Fahrenheit - 32) * 5 / 9
        resultadoCalculado = (temperatura - 32) * 5 / 9;
        unidadEntrada = '°F';
        unidadSalida = '°C';
        textoTipo = 'Fahrenheit a Celsius';
    }

    // Formatear a 2 decimales si el resultado incluye decimales
    const resultadoFormateado = Number.isInteger(resultadoCalculado) 
        ? resultadoCalculado 
        : resultadoCalculado.toFixed(2);

    // 4. Mostrar el resultado en el sitio web
    divResultado.style.display = 'block';
    divResultado.innerHTML = `
        <p style="margin: 5px 0;"><strong>Temperatura ingresada:</strong> ${temperatura} ${unidadEntrada}</p>
        <p style="margin: 5px 0;"><strong>Tipo de conversión:</strong> ${textoTipo}</p>
        <p style="margin: 5px 0; font-size: 1.1em; color: rgb(78, 116, 8);"><strong>Resultado:</strong> ${resultadoFormateado} ${unidadSalida}</p>
    `;
}