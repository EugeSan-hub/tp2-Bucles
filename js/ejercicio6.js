
// Definimos una variable para almacenar la pirámide
let piramide = '';

// Bucle externo para iterar desde 1 hasta 30
for (let i = 1; i <= 30; i++) {
    // Bucle interno para añadir números repetidos según el número de la fila
    for (let j = 0; j < i; j++) {
        piramide += i; // Concatenamos el número actual de la fila
    }
    piramide += '<br>'; // Añadimos un salto de línea en HTML al final de cada fila
}

// Mostramos la pirámide en la página web
document.write(piramide);