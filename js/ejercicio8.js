let numeroFilas = parseInt(prompt("Ingrese un número entre 1 y 50 para la pirámide de números:"));

if (numeroFilas > 0 && numeroFilas <= 50) {
    let piramideNumeros = '';
       for (let i = 1; i <= numeroFilas; i++) {
                for (let j = 1; j <= i; j++) {
            piramideNumeros += j; 
        }
        piramideNumeros += '<br>'; 
    }
    document.write(piramideNumeros);
} else {
    alert("El número ingresado no está dentro del rango válido (1 a 50).");
}