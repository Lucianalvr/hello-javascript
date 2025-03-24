/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a= 4
let b=3

let suma = a+b
let resta = a-b
let division = a/b

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
suma += 2
console.log(suma);

resta **= 1
console.log(resta);




// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(a===4);
console.log(a>=4);
console.log(a>=3);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(a<=3);


// 5. Utiliza el operador lógico and
console.log(5<12 && 4>=9);

// 6. Utiliza el operador lógico or
console.log(1<3 || 2>4);

// 7. Combina ambos operadores lógicos
console.log(1>2 || 6>9 && 2>5);

// 8. Añade alguna negación
console.log(!(1>2 || 6>9 && 2>5));
// 9. Utiliza el operador ternario
let estaNublado = false
estaNublado ? console.log("que pena") : console.log("una suerte");
;

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(((a+2)>(a+1) ) && ((b+2)>(b+1)));
