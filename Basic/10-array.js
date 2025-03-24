/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push  (añade al final del array )y pop (elimina el ultimo elemento)

myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift  (elimina el primer elemento del array y lo devuelve)
// unshift (agrega uno o mas elementos al principio del array)

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Brais", "mouredev")
console.log(myArray)

// length -- longitud del array cuantos elementos

console.log(myArray.length)

// clear --

myArray = [] // lo volvemos a inicializar a 0
myArray.length = 0 // alternativa
console.log(myArray)

// slice -- devuelve una copia de una porcion, genera un nuevo array con el pedazo que yo quiero

myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3) //el ultimo no se toma en cuenta, se queda con el trozo entre el 1 y el 3 (1 y 2)

console.log(myArray)
console.log(myNewArray)

// splice -- desde que indice quieres empezar y cuantos elementos quieres eliminar

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada") // desde el indice 1 nos cargamos 2 y añadimos uno nuevo
console.log(myArray)