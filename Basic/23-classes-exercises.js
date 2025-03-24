/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Animal {

    static presentacion() { console.log("Solo yo me presento");
    }

    constructor(name, edad){
        this.name = name,
        this.edad = edad
    }

    saludar() {console.log(`Hola ${this.name}, tienes ${this.edad} años`);
    }


}
// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función
let perro = new Animal("periquito", 14)
console.log(perro.name)
console.log(perro.edad)
perro.saludar()
// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático
Animal.presentacion()
// 6. Crea una clase que haga uso de herencia
class Perro extends Animal {
    ladrar() {
        console.log("guauguau");
        
    }
    saludar() { console.log(`saludo como perrito`);
    }
}

let perro2 = new Perro("pepe")

console.log(perro2.name)
perro2.ladrar()
// 7. Crea una clase que haga uso de getters y setters

class Cuenta {

    #iban
    #nombre
    #telefono

    constructor(nombre, telefono, iban){
        this.#nombre = nombre
        this.#telefono = telefono
        this.#iban = iban
    }

    get telefono() {
        console.log(this.#telefono);
        }

        get nombre() {
            console.log(this.#nombre);
            }

        set nombre (nombre){
            this.#nombre = nombre
        }
}

let cuenta = new Cuenta("abanca", 27364483, 928374)
cuenta.hola
cuenta.nombre
cuenta.nombre = ("lanacion")

cuenta.nombre

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 

perro2.saludar()