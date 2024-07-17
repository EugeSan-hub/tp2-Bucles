let numeroFilas = parseInt(prompt("Ingrese un número entre 1 y 50 para la pirámide inversa:"));

// Validamos que el número esté dentro del rango válido
if (numeroFilas > 0 && numeroFilas <= 50) {
    let piramideInversa = '';
    let filaActual = numeroFilas;

    // Bucle para construir la pirámide inversa usando while
    while (filaActual >= 1) {
        let contador = 0;
        while (contador < filaActual) {
            piramideInversa += filaActual;
            contador++;
        }
        piramideInversa += '<br>'; // Añade un salto de línea HTML al final de cada fila
        filaActual--; // Decrementa el número de la fila actual
    }

    document.write(piramideInversa); // Muestra la pirámide inversa en la página web
} else {
    alert("El número ingresado no está dentro del rango válido (1 a 50).");
}