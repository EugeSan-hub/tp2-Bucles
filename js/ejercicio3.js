// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm()


let cadenaDeTexto = "";
do {
  let cadena = prompt("Ingrese una palabra");
  if (cadenaDeTexto === "") {
    cadenaDeTexto = cadena;
  } else {
    cadenaDeTexto += "-" + cadena;
  }
} while (confirm("¿Desea continuar?"));

document.write(cadenaDeTexto);