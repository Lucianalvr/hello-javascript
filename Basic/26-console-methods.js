/*
Clase 42 - Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=20444
*/

// Console

// log -- mostrar la info mas general por consola

console.log("¡Hola, JavaScript!")

// error

console.error("Este es un mensaje de error.") //sale en rojo
console.error("Error al conectarse a la base de datos: ", new Error("Conexión fallida."))

// warn -- mensajes de advertencia en amarillo

console.warn("Este es un mensaje de advertencia.")

// info -- mensaje informativo adicional

console.info("Este es un mensaje de información adicional.")

// table -- para generar una estructura de tabla 

let data = [    //entre corchetes
    ["Brais", 37],
    ["Sara", 21]
]

console.table(data)

data = [
    { name: "Brais", age: 37 },
    { name: "Sara", age: 21 }
]

console.table(data)

// group

console.group("Usuario:")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd() //debo finalizar el grupo

// time -- medir el tiempo que se tarda en ejecutar un bloque de código

console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 2") //abrir y cerrar los bloques

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1")

// assert -- Muestra un msj de error si lo que evalua es falso

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad.") //condicion + msj

// count -- cuenta la cantidad de veces que se ha llamado con una etiqueta especifica

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click") // resetea el contador
console.count("Click")

// trace -- Muestra el seguimiento de la pila de ejecución del código

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución.")
}

funcA()

// clear

// console.clear() // todo lo que mostre por consola se limpia