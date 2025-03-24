/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = [1, 2, 3, 4]

let [valor1, valor2] = myArray
console.log(valor1);
console.log(valor2);


// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [amigo, enemigo, , , lujan=0] = myArray
console.log(amigo);
console.log(enemigo);
console.log(lujan);
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let persona = {
    nombre: "luli",
    apellido: "vivi",
    edad:37,
    trabajo: {
            tipo: "developer",
            salario: 20000

    }
}

let {nombre, apellido} = persona
console.log(nombre);
console.log(apellido);
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let{nombre:nuevoNombre, apellido:nuevoApellido} = persona
console.log(nuevoNombre);
console.log(nuevoApellido);
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let{trabajo: { tipo:miTrabajo, salario:miSalario}} = persona
console.log(miTrabajo);
console.log(miSalario);


// 6. Usa propagación para combinar dos arrays en uno nuevo
let array2 = [4,7,8,9]
let array3 = [4,8,3,2]
// 7. Usa propagación para crear una copia de un array
let array4 = [...array2]
console.log(array4);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let perro = {
       name:"billi",
       apellido: "perrito"
    }

    let gato = {
        nombre:"animalito",
        edad:12
    }

    let doblegato = {...perro, ...gato}
    console.log(doblegato);
    
// 9. Usa propagación para crear una copia de un objeto
let serpiente = {...perro}
console.log(serpiente);

// 10. Combina desestructuración y propagación

let {name:nombrecito, ...otro} = perro 
console.log(nombrecito);
console.log(otro);


