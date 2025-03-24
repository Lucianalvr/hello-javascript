/*
Clase 33 - Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=14229
*/

// Objetos -- Todo lo que NO es un dato primitivo es un objeto
//una coleccion de propiedades clave / valor

// Sintaxis

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

// Acceso a propiedades

// Notación punto
console.log(person.name)

// Notación de corchetes
console.log(person["name"])

// Modificación de propiedades

person.name = "Brais Moure"
console.log(person.name)

console.log(typeof person.age)
person.age = "37"
console.log(person.age)
console.log(typeof person.age)

// Eliminación de propiedades -- delete

delete person.age

console.log(person)

// Añadir Nueva propiedad

person.email = "braismoure@mouredev.com"
person["age"] = 37

console.log(person)

// Métodos (funciones)

let person2 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () { //primero asigno el nombre de la funcion
        console.log("La persona camina.")
    }
}
person2.walk()

// Anidación de objetos

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () { //this para acceder a la propiedades dentro de ese objeto
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objetos

let person4 = {
    name: "Brais Moure",
    alias: "MoureDev",
    email: "braismoure@mouredev.com",
    age: 37
}

console.log(person)
console.log(person4)
//Los valores en los objetos se guardan por referencia, no por valor
//no se compara el valor que hay dentro, sino la direccion de memoria, y son 2 distintas
console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name) //aqui si porque ya asocia el 'valor' de name

// Iteración -- for In -- cuando iteramos accedemos a las claves

for (let key in person4) {
    console.log(key + ": " + person4[key])
}

// Funciones como objetos

//usamos esta funcion como constructor, a este propiedad nombre = name
function Person(name, age) { // Debería ser una clase -- no es buena practica asi
    this.name = name
    this.age = age
}

let person5 = new Person("Brais", 37)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)