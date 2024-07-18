// Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() 

let nombre1 = prompt("Ingrese el primer nombre:");
let edad1 = parseInt(prompt("Ingrese la primera edad:"));

let nombre2 = prompt("Ingrese el segundo nombre:");
let edad2 = parseInt(prompt("Ingrese la segunda edad:"));

let nombre3 = prompt("Ingrese el tercer nombre:");
let edad3 = parseInt(prompt("Ingrese la tercera edad:"));

// Comparamos las edades usando la función Math.max
let edadMayor = Math.max(edad1, edad2, edad3);
let nombreMayor = "";

// Determinamos cuál es la persona con la mayor edad
if (edadMayor === edad1) {
    nombreMayor = nombre1;
} else if (edadMayor === edad2) {
    nombreMayor = nombre2;
} else {
    nombreMayor = nombre3;
}

// Mostramos el nombre de la persona mayor
alert("La persona con mayor edad es: " + nombreMayor);