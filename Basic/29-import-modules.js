/*
Clase 44 - Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=21480
*/

// Importación de módulos --  Indicamos en un package json que nuestro codigo va a funcionar como modulo

// palabra reservada import, nombre de la operacion a importar y el from, desde donde

//importacion que no es por defecto se hace referencia exactamente con su nombre

import { add, PI, name, Circle } from "./28-export-modules.js"
//exportacion por defecto da igual el nombre, es solo para UNA cosa que quiero exportar
//se puede exportar por defecto una funcionalidad , una funcion
import defaultImport from "./28-export-modules.js"

// Funciones

console.log(add(5, 10))

// Propiedades

console.log(PI)
console.log(name)

// Clases

let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

// Importación por defecto

console.log(defaultImport(5, 10))

// let myClass = new defaultImport()
// myClass.func()

// Proyecto modular

// import { MyImport } from "./directory/file.js"