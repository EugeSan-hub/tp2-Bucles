let numeroFilas = parseInt(prompt("Ingrese un número entre 1 y 50 para la pirámide inversa:"));


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
        piramideInversa += '<br>'; 
        filaActual--; 
    }

    document.write(piramideInversa); 
} else {
    alert("El número ingresado no está dentro del rango válido (1 a 50).");
}