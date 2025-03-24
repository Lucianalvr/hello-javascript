/*
Clase 40 - Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=18751
*/

// Excepciónes

// Produce una excepción
let myObject
// console.log(myObject.email)

// Captura de errores

// try-catch

try {
    // Código que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecución sin errores")
} catch {
    // Bloque de error -- cuando  hay un error pasa al catch
    console.log("Se ha producido un error")
}

// Captura del error

try {
    console.log(myObject.email)
} catch (error) {  //el catch se ejecuta con un argumento
    console.log("Se ha producido un error:", error.message)
}

// finally -- quiero ejecutar algo siempre se cumpla el try o no

try {
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error:", error.message)
} finally {
    console.log("Este código se ejecuta siempre")
}

// No está soportado
// try {
//     console.log(myObject.email)
// } finally {
//     console.log("Este código se ejecuta siempre")
// }

// Lanzamiento de errores

// throw -- error que decido lanzarlo yo

// throw new Error ("Se ha producido un error")

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") { //necesito que esta operacion sea capaz de lanzar un error
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
    }
    return a + b
}

try {
    console.log(sumIntegers(5, 10))
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
    // console.log(sumIntegers(5, "10"))
    // console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

// Capturar varios tipos de errores

try {
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

// Crear excepciones personalizadas 

class SumZeroIntegerError extends Error { //creo mi error como una clase que extiende de error
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}