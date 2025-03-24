/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let i=1;i<=20;i++){
    console.log(`Numero: ${i}`);
    
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for (let i =1; i<=100; i++){
    
     suma= suma+i
     console.log(suma);
     
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for(let i= 0; i<=50; i+=2) {
    console.log(`Numero par: ${i}`);
    
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres= ["luciana", "marcos", "miguel", "guido"]

for (let nombre of nombres){
    console.log(nombre);
    
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let sumaLetra=0
let vocal = ["a", "e", "i", "o", "u"]
let cadena = "Que tal, espero que bien"

for(let letra of cadena){
    if(vocal.includes(letra.toLowerCase())){
        sumaLetra++
    }
}
console.log(sumaLetra);


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1,2,3,4]
let producto= 1

for(let i=0; i<numeros.length;i++){
    producto*= numeros[i]
}
console.log(producto);


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let numero = 4; 

for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
// 8. Usa un bucle para invertir una cadena de texto

let cadena2= "una cadena invertida"
let invertida = ""; // Variable donde almacenaremos la cadena invertida

for (let i = cadena2.length - 1; i >= 0; i--) { // Recorremos la cadena de atrás hacia adelante
    invertida += cadena2[i]; // Agregamos cada letra al nuevo string
}

console.log(invertida); // "adretrevni anedac anu"

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let numerosFibo = 10
let a= 0
let b= 1

console.log(a);
console.log(b);



for(let i=2; i<numerosFibo; i++) {
    let siguienteNumero= a+b; // Sumamos los dos últimos números
    console.log(siguienteNumero);
    
    a=b // Movemos el valor de "b" a "a"
    b=siguienteNumero; // Movemos el resultado a "b"

}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numeros3 = [124, 54, 2, 5, 90]
let numerosMayores=[]

for(let i=0; i<numeros3.length; i++) {
    if (numeros3[i] > 10){
        numerosMayores.push(numeros3[i])
    }
}
console.log(numerosMayores);

