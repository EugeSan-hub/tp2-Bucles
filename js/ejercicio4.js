// Realiza un script que pida números hasta que se pulse “cancelar”. 
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let sumaTotal = 0;
let numero;

do {
  let input = prompt("Ingrese un número entero mayor que 0:");
  
  if (input !== null && input !== "") { // esta parte me ayudo chatgpt no se si es correcto pero lo entiendo. 
    numero = parseInt(input);

    if (!isNaN(numero) && numero > 0) {
      sumaTotal += numero;
    } else {
      alert("Por favor, ingrese un número entero mayor que 0 válido.");
    }
  } else if (input !== null && input === "") {
    alert("Debe ingresar un valor.");
  }
} while (confirm("¿Desea continuar ingresando números?"));

document.write("La suma total de los números introducidos es: " + sumaTotal);