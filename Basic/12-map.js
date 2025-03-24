/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map -- almacena conjunto de datos -- cada elemento esta formado por un par clave/valor
// nos vale para asociar una clave a un valor

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"], // clave name, asocio el valor con una coma --> brais
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set -- actualiza un elemento o lo agrega

myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get -- para recuperar el valor

console.log(myMap.get("name"))
console.log(myMap.get("surname")) //no esta definida la clave

// has -- permite comprobar si una clave existe o no

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete -- elimina la clave

myMap.delete("email")

console.log(myMap)

// keys, values y entries

console.log(myMap.keys()) //retorna un listado con las claves
console.log(myMap.values()) //retorna un listado con los valores
console.log(myMap.entries()) // retorna todas las claves y valores

// size -- tamaño del mapa, numero de los elementos

console.log(myMap.size) 

// clear  -- borrar todos los elementos del mapa

myMap.clear()

console.log(myMap)



