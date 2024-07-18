for (let i = 1; i <= 500; i++) {
    let multiplo = i; 
        let mensaje = ''; // Variable para almacenar el mensaje de múltiplo
    if (i % 4 === 0) {
        mensaje += ' (Múltiplo de 4)';
    }
    if (i % 9 === 0) {
        mensaje += ' (Múltiplo de 9)';
    }
     document.write(multiplo + mensaje + '<br>');
    // Cada 5 líneas, mostramos una línea horizontal
    if (i % 5 === 0 && i !== 500) {
        document.write('————————————————————-<br>');
    }
}