/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b) {
    return a + b
}


let resultado= suma(2,4)
console.log(resultado);

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let arraynumeros= [140, 98, 1140, 23]

function devolverMayor (lista) {
   return Math.max(...lista)
}

let numeroMayor = devolverMayor(arraynumeros)
console.log(numeroMayor);


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let cadena= "cuantas vocales"


function contarVocales(frase){
    let vocales = ["a", "e", "i", "o", "u"];
    return frase.toLowerCase().split("").filter(letra => vocales.includes(letra)).length;
}

console.log(contarVocales(cadena));


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let cadenas = ["hola", "luciana", "micael"]

function convertirMayusculas (cadena){
   return cadena.map(palabra => palabra.toUpperCase()) //map(): Crea un nuevo array aplicando una función a cada elemento del array original.
   
}

let nuevoArrayenmayusculas = convertirMayusculas(cadenas);
console.log(nuevoArrayenmayusculas);




// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(n) {
    if (n <= 1) return false;  // No es primo si es 1 o menor
    if (n === 2) return true;  // 2 es primo
    if (n % 2 === 0) return false;  // Los números pares mayores que 2 no son primos

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;  // Si es divisible por i, no es primo
    }
    return true;  // Si no encontramos divisores, es primo
}

console.log(esPrimo(7));  // true
console.log(esPrimo(10)); // false

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos


let array1 = [1,2,5,7,9]
let array2=[1, 21, 5, 300, 4]

function elementosComunes(a, b){
    return a.filter(elemento => b.includes(elemento))
}

console.log(elementosComunes(array1, array2));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let array4= [1,2,5,6]

function sumarPares(listado){
    let contador=0
    for (let valor of listado){
      
        if ( valor % 2 === 0) {
            contador += valor
            
        }
         
        }
      return contador 
      
    }

    console.log(sumarPares(array4));
    

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let array7= [2,4,6]

function cuadrado(lista){
   return lista.map(elemento => elemento**2)
}

console.log(cuadrado(array7));


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let otra = "soy una cadena";

function invertirCadena(cadena) {
    let palabras = cadena.split(" ");  // Divide la cadena en un array de palabras
    let invertida = palabras.reverse().join(" ");  // Invierte las palabras y las junta en una sola cadena
    return invertida;
}

console.log(invertirCadena(otra));  // "cadena una soy"

// 10. Crea una función que calcule el factorial de un número dado

function factorial(n) {
    if (n === 0 || n === 1) {  // El factorial de 0 y 1 es 1
        return 1;
    }

    let resultado = 1;
    for (let i= 2; i<= n; i++){ 
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5));
