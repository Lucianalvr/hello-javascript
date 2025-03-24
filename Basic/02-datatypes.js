/*
Clase 17 - Tipos de datos
Vídeo: https://youtu.be/1glVfFxj8a4?t=3599
*/

// Tipos de datos primitivos (7)

// Cadenas de texto (string)
let myName = "Brais Moure"
let alias = 'MoureDev'
let email = `braismoure@mouredev.com`

// Números (number)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined
let undefinedValue //la variable la hemos declarado pero aun no le dimos un valor 
console.log(undefinedValue)

// Null -- Tiene un valor asociado que es nulo, representa que intencionadamente hay ausencia de valor
let nullValue = null

// Symbol -- Representan valores unicos identificadores de propiedades

let mySymbol = Symbol("mysymbol")  // palabra reserbada Symbol ("claveDelSimbolo")

// BigInt -- instancio objeto bigint y creo el gran numero que me de la gana

let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n //otra forma de representarlo

// Mostramos los tipos de datos  -- OPERADOR TYPE OF
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)