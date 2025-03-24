/*
Clase 37 - Clases -- tipo de dato complejo
Vídeo: https://youtu.be/1glVfFxj8a4?t=16864
*/

// Clases -- sirven para crear plantillas de objeto, definimos prop y metodos
// pero no le damos valores
//le damos los valores cuando creamos las instancias
//permiten reutilizar una estructura, una plantilla

class Person { // le damos un nombre abrimos llaves

    constructor(name, age, alias) { //constructor metodo especial que permite definir la estructura de datos inicial 
        this.name = name  //this.name es la clave de la propiedad,
        this.age = age  // age es el valor que pasamos por parametro
        this.alias = alias
    }

}

// Sintaxis

let person = new Person("Brais", 37, "MoureDev")
let person2 = new Person("Brais", 37, "MoureDev")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson("Brais", 37)

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "MoureDev"

console.log(person3.alias)

// Funciones en clases

class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }

}

let person4 = new PersonWithMethod("Brais", 37, "MoureDev")
person4.walk()

// Propiedades privadas  --solo dentro de la clase podemos acceder a esta propiedad

class PrivatePerson { //quiero poder crear una persona pero no quiero que nadie pueda ver los datos

    #bank //si quiero que una propiedad sea privada debo definirla antes en la clase

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank //añado la almohadilla para hacer la propiedad privada
    }

    pay() {
        this.#bank
    }

}

let person5 = new PrivatePerson("Brais", 37, "MoureDev", "IBAN123456789")

// console.log(person5.bank) -- No podemos acceder -- es privado
// person5.bank = "new IBAN123456789" // bank no es #bank

console.log(person5)


// Getters (obtener) y Setters (establecer)

class GetSetPerson {

    #name //todas sus propiedades son privadas
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
// si solo quiero dejar acceder al nombre
    get name() {
        return this.#name
    }
    // me permite modificarlo pero no leerlo
    set bank(bank) {
        this.#bank = bank
    }

}

let person6 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"

/*
Clase 38 - Herencia de clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=17999
*/

// Herencia

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal {
//si no tiene constructor usa el del padre
    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {
//si tiene nueva propiedad hacemos su constructor y llamamos con super a la clase padre
    constructor(name, size) {
        super(name) //Siempre se debe llamar a super() antes de usar this en el constructor de una clase hija.
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("MoureDog")
myDog.run()
myDog.sound()

let myFish = new Fish("MoureFish", 10)
myFish.swim()
myFish.sound()

// Métodos estáticos -- al ser estatico no necesitamos instanciar la clase para acceder a el 

class MathOperations {

    static sum(a, b) {
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))