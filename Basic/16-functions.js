/*
Clase 31 - Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=12829
*/

// Funciones -- bloqe de codigo para realizar una tarea especifica

// Simple

function myFunc() {
    console.log("¡Hola, función!")
}

for (let i = 0; i < 5; i++) {
    myFunc()
}

// Con parámetros

function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`)
}

myFuncWithParams("Brais")
myFuncWithParams("MoureDev")

// Funciones anónimas -- las tenemos que acabar asignando a una variable

const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

myFunc2("Brais Moure")

// Arrow functions --debemos asignarlar a una variable como las anonimas
// eliminamos palabra function y llaves, pasamos el parametro => y lo que debe de hacer
const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("Brais Moure")
myFunc4("Brais Moure")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

// Valores Por defecto

function defaultSum(a = 4, b = 0) { 
    console.log(a + b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(undefined, 5) //con undefined toma el valor por defecto

// Retorno de valores

function mult(a, b) {
    return a * b // lo que pase a continuacion del return se devuelve a la persona que llame a mult
}

let result = mult(5, 10) // me guardo el return en una variable
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern() //debo invocarla dentro de extern
}

extern()
// intern() Error: fuera del scope (rango de actuacion)

// Funciones de orden superior -- fciones que reciben otras funciones como argumentos

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "función de orden superior")

// forEach -- Una funcion que sirve para ejecutar bucles asociados a elementos iterables
//Itera cada valor, como un for of, combinando funciones
//No se puede detener con break ni continue como el for...of
let myArray = [1, 2, 3, 4]

let mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

let myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))