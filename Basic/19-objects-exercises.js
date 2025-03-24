/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let persona = {
    name: "luli",
    apellido: "viviani",
    edad: 33
}

console.log(persona);

// 2. Accede y muestra su valor
console.log(persona.name);
console.log(persona.apellido);
console.log(persona.edad);
// 3. Agrega una nueva propiedad
persona.colorDePelo = "Marron"
console.log(persona);
// 4. Elimina una de las 3 primeras propiedades
delete persona.apellido
console.log(persona);
// 5. Agrega una función e invócala
persona.caminar = function () {
    console.log("Estoy caminando");
    
}

persona.caminar()

// 6. Itera las propiedades del objeto

for(let key in persona) {
    console.log(`${key}: ${persona[key]}`);  
    
}
// 7. Crea un objeto anidado
let persona1 = {
    name: "luli",
    apellido: "vivi",
    trabajo: {
        nombre: "developer",
        horas: 8

    }
}

console.log(persona1);

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(persona1.trabajo.nombre);

// 9. Comprueba si los dos objetos creados son iguales

console.log(persona === persona1)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(persona.name === persona1.name);
