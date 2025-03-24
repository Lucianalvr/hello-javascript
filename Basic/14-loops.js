/*
Clase 29 - Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=11575
*/

// Loops o bucles

// for

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// while -- Evaluamos la condicion siempre antes de ejecutar el bucle

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// Bucle infinito -- Asegurarnos que en algun momento la condicion acaba siendo false
// while(true) {
// }

// do while --Necesidad de ejecutar el codigo minimo una vez, y despues tomar una evaluacion

i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

// for of -- nos vale para recorrer valores de algo que sea iterable (una estructura de datos)

let myArray = [1, 2, 3, 4]

let mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

let myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

let myString = "¡Hola, JavaScript!"


//creo una variable con lo que va a hacer el valor y le pasamos el of de lo que queremos iterar. E imprimimos el valor
for (let value of myArray) { 
    console.log(value)
}

for (let value of mySet) {
    console.log(value)
}

for (let value of myMap) {
    console.log(value)
}
// tambien puede iterar strings
for (let value of myString) {
    console.log(value)
}

// break y continue

for (let i = 0; i < 10; i++) {
    if (i == 5) { // Si el indice vale 5 no lo queremos tener en cuenta
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Hola ${i}`)
}

// Con el continue le indicamos al bucle que continue en la siguiente iteracion

//Break -- para romper el bucle y salirse