/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria
let edad= 14
let numero=11
let usuario = "Maria"
let contraseña = "hola"
// 1. Imprime por consola tu nombre si una variable toma su valor
if (edad===12) {
    console.log("Luciana");
    
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
if (usuario=="Maria" && contraseña=="hola") {
    console.log("Bienvenido a tu cuenta");
    
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
if (edad>0) {
    console.log("Es positivo");
    
} else if (edad==0){
    console.log("Es cero");
    
}else {
    console.log("Es menor a cero");
    
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
if (edad >= 18) {
    console.log("Puedes votar");
    
} else {
    let resto = 18-edad
    console.log("Te faltan "+resto +" años")
    
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const mayor = edad >= 18 ? "adulto" : "menor"
console.log(mayor);


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma= "noruego"

switch (idioma) {
    case "noruego":
    console.log("es noruego");
    break

    case "español":
    console.log("hoal español");
    break

    default: console.log("No te saludo");
    
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7