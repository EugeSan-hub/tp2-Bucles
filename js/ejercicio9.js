for (let i = 1; i <= 500; i++) {
    let multiplo = i; // Mantenemos el número como tal

    // Verificamos si es múltiplo de 4 y/o 9 y generamos el mensaje correspondiente
    let message = ''; // Variable para almacenar el mensaje de múltiplo
    if (i % 4 === 0) {
        message += ' (Múltiplo de 4)';
    }
    if (i % 9 === 0) {
        message += ' (Múltiplo de 9)';
    }

    // Escribimos el número y el mensaje si existe
    document.write(multiplo + message + '<br>');

    // Cada 5 líneas, mostramos una línea horizontal
    if (i % 5 === 0 && i !== 500) {
        document.write('————————————————————-<br>');
    }
}