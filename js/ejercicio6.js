
// Creo una variable para almacenar la pirámide
let piramide = '';
for (let i = 1; i <= 30; i++) { // defino la piramide hasta fila  30 
        for (let j = 0; j < i; j++) { // incrementmos cantidad de veces por filas 
        piramide += i; 
    }
    piramide += '<br>'; 
}
document.write(piramide);