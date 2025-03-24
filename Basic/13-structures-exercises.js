/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales=["araña", "perro", "gato", "oso", "raton"]
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final
animales.push("rinoceronte")
console.log(animales);

animales.unshift("jirafa")
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2,1)
console.log(animales);

// 4. Crea un set que almacene cinco libros
let biblioteca = new Set(["quijote", "mengote", "zapaso", "benadu", "carriego"])
console.log(biblioteca);

// 5. Añade dos más. Uno de ellos repetido
biblioteca.add("catrioco")
biblioteca.add("superhero")
biblioteca.add("superhero")
console.log(biblioteca);
// 6. Elimina uno concreto a tu elección

biblioteca.delete("mengote")
console.log(biblioteca);

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
    [1,"enero"],
    [2,"febrero"],
    [3,"marzo"]
])

console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(meses.has(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("nuevoArraydeverano", ["junio", "Julio", "Agosto"])
console.log(meses);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
  let nuevoSet = new Set(animales);
console.log(nuevoSet);

meses.set("ahoraSet", nuevoSet)
console.log(meses);
