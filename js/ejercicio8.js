let numeroFilas = parseInt(prompt("Ingrese un número entre 1 y 50 para la pirámide de números:"));

// Validamos que el número esté dentro del rango válido (1 a 50)
if (numeroFilas > 0 && numeroFilas <= 50) {
    let piramideNumeros = '';

    // Iteramos desde 1 hasta el número de filas ingresado
    for (let i = 1; i <= numeroFilas; i++) {
        // Construimos la cadena de números para la fila actual
        for (let j = 1; j <= i; j++) {
            piramideNumeros += j; // Agregamos el número j a la cadena
        }
        piramideNumeros += '<br>'; // Agregamos un salto de línea HTML
    }

    document.write(piramideNumeros); // Mostramos la pirámide en la página web
} else {
    alert("El número ingresado no está dentro del rango válido (1 a 50).");
}