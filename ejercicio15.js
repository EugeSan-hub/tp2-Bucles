// Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Ingrese un texto:");
texto = texto.toLowerCase();

// Variable para contar el número de vocales
let contadorVocales = 0;
const vocales = "aeiou";

for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i])) {
    contadorVocales++;
  }
}
document.write("El número de vocales en el texto es: " + contadorVocales);
