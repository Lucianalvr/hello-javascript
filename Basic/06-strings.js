/*
Clase 21 - Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=6565
*/

// Strings (cadenas de texto)

// Concatenación

let myName = "Brais"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice en el que encuentra es palabra
console.log(greeting.indexOf("Brais"))
console.log(greeting.indexOf("MoureDev")) //-1 es que no lo ha encontrado
console.log(greeting.includes("Hola")) // La Incluye?? true o false
console.log(greeting.includes("Brais"))
console.log(greeting.includes("MoureDev"))
console.log(greeting.slice(0, 10)) // Sección del indice 0 al 10, excluye el 10
console.log(greeting.replace("Brais", "MoureDev")) // Reemplazo - si encuentra la palabra brais reemplazala por mouredev

// Template literals (plantillas literales)

// Strings en varias líneas gracias a las tildes invertidas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// Interpolación de valores - templates strings
let email = "braismoure@mouredev.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)