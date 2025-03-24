/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/
let nombre = "Luciana"
let apellido = "Vivian"
let dia= "ESTA muy soleado hoy"
// 1. Concatena dos cadenas de texto
console.log("Hola " +nombre +"!. Sabías que el día " +dia+"?");

// 2. Muestra la longitud de una cadena de texto
console.log(nombre.length);

// 3. Muestra el primer y último carácter de un string
console.log(nombre[0]);
console.log(nombre[nombre.length-1]);
// 4. Convierte a mayúsculas y minúsculas un string

console.log(nombre.toUpperCase());
console.log(dia.toLowerCase());

// 3. Muestra el primer y último carácter de un string

// 5. Crea una cadena de texto en varias líneas
let frase = `creando
un texto
en muchas
lineas`
// 6. Interpola el valor de una variable en un string
console.log(`interpolando a ${nombre} y a dia en esta cadena ${dia}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(frase.replace(/ /g, "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(frase.includes("texto"));

// 9. Comprueba si dos strings son iguales
console.log(nombre.localeCompare(nombre));

// 10. Comprueba si dos strings tienen la misma longitud
console.log(nombre.length === apellido.length);
