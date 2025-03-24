/*
Clase 26 - Sets 
Vídeo: https://youtu.be/1glVfFxj8a4?t=9952
*/

// Set --mantiene la ordenacion de los elementos pero no tenemos acceso a los indices. NO ADMITE DUPLICADOS

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización -- los datos para inicializarlo deben ir entre corchetes

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// Métodos comunes

// add (añadir al final) y delete (indicar el valor del elemento q quiero borrar, no funciona con indices)

mySet.add("https://moure.dev")

console.log(mySet)

mySet.delete("https://moure.dev")

console.log(mySet)

console.log(mySet.delete("Brais")) //si el elemento existe y ha sido eliminado retorna true, sino false
console.log(mySet.delete(4))

console.log(mySet)

// has -- comprobar si existe un elemento retorna true o false

console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))

// size -- longitud del set tamaño

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados como en los arrays

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)