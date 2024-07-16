// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
//  si la edad ingresada no es un número válido indicarlo en un mensaje.

const usuario = prompt("Ingrese su edad");
if (usuario >= 18){
document.write("Edad ingresada " + usuario + " puede conducir");
}else if( usuario < 18) {
    document.write("Edad ingresada " + usuario + " no puede conducir");
}else{
    document.write("Numero no válido")
}