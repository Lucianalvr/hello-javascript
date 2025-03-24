/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// Esto es un comentario
// 2. Escribe un comentario en varias líneas
/* Esto es un comentarios de varias lineas */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myName = "Luciana"
let age = 32
let isStudent = true
let undefinedValue
let nullValue = null
let symbol = Symbol("miSimbolo")
let unGranNumero = BigInt(33333333333333333333333333333333333333333333333)
// 4. Imprime por consola el valor de todas las variables
console.log(myName);
console.log(age);
console.log(isStudent);
console.log(nullValue);
console.log(symbol);
console.log(unGranNumero);
console.log(undefinedValue);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof nullValue);
console.log(typeof symbol);
console.log(typeof unGranNumero);
console.log(typeof undefinedValue);
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
 myName = "Laura"
 age = 35
 isStudent = false
 undefinedValue
 nullValue = null
 symbol = Symbol("hola")
 unGranNumero = BigInt(44444444444444444444444444444444444)
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myName = 2
age = "hola"
isStudent = "Sofia"
undefinedValue = 23
nullValue = "Holas"
symbol = 234
unGranNumero = true
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const nombre = "luciana"
const edad = 32
const soyLinda = true
// const undefinedee
const nullVariable= null
const symbolo = Symbol("quelindo")
const numeroso = BigInt(2222222222222222222)
// 9. A continuación, modifica los valores de las constantes
nombre = "lorena"
edad = 36
soyLinda = false
undefinedee = 23
nullVariable= "fddgdfg"
symbolo = 12
numeroso = BigInt(222222222346534574676572)
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse