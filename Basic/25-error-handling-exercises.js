/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
// 2. Captura una excepción utilizando try-catch y finally

    let perrito

    try {
        console.log(perrito.name);
        
    } catch (error) {
        console.log("No me lo definiste");
        
    } finally {
        console.log("Te perdono el error");
        
    }


// 3. Lanza una excepción genérica

// 4. Crea una excepción personalizada
class EdadInvalidaError extends Error {
    constructor(mensaje){
        super(mensaje);
        
    }
}
    
function verificarEdad(edad) {
        try {
          if (edad < 18) {
            throw new EdadInvalidaError("No puedes entrar, eres menor de edad.");
          }
          console.log("Bienvenido a la fiesta 🎉");
        } catch (error) {
          console.log(`Error: ${error.message}`);
        }
      }
      
      verificarEdad(20); // "Bienvenido a la fiesta 🎉"
      verificarEdad(16); // "Error: No puedes entrar, eres menor de edad."


// 5. Lanza una excepción personalizada

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

class NoHayTaxisError extends Error {
    constructor(message) {
      super(message);
      
    }
  }

  class DineroInsuficienteError extends Error {
    constructor(message) {
      super(message);
      
    }
  }

  function pedirTaxi (hora, dinero) {
    try { 
        if (hora > 23) {
            throw new NoHayTaxisError("A esta hora no tenemos taxis");
            
        }
        else if (dinero < 10) {
            throw new DineroInsuficienteError("No puedes pagarlo");
            
        }
        console.log("ya te pedimos el taxi maquina!");
        
    } catch (error) {
        // Capturamos diferentes tipos de error usando el nombre del error
        if (error instanceof NoHayTaxisError) {
          console.log(`Error: ${error.message} (No hay taxis disponibles)`);
        } else if (error instanceof DineroInsuficienteError) {
          console.log(`Error: ${error.message} (Dinero insuficiente)`);
        } else {
          console.log(`Error inesperado: ${error.message}`);
        }
      }
  }

  pedirTaxi(24,20)



// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

let numeros = [1, 2, 3, 4, "a", 5, "5.5a"];

for(let numero of numeros){
    try {
        let flotante = parseFloat(numero); 
        if(isNaN(flotante)) {
            throw new Error(`No se puede convertir ${numero} a float`);
            
        }

        console.log(`El numero ${numero} se convirtió a float: ${flotante}`);
        
        } catch (error){
            console.log(`Error: ${error.message}`);
            
        }
} 

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada


let persona = {
    name:"lu",
    edad:30

}

class NoExistePropiedad extends Error {
    constructor(message){
        super(message)
    }
}

function tienePropiedad(objeto, propiedad) {
    try{
        if (!objeto.hasOwnProperty(propiedad)) {
            throw new NoExistePropiedad(`La propiedad '${propiedad}' no existe en el objeto.`);}
       
        console.log(`La propiedad '${propiedad}' existe y su valor es: ${objeto[propiedad]}`);
       
       
        
    } catch(error){
        console.log(`Error: ${error.message}`);
        
    }

}

tienePropiedad(persona, "edad")
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function reintentar(funcion, maxReintentos = 10) {
    let intentos = 0;

    while (intentos < maxReintentos) {
        try {
            intentos++;
            console.log(`Intento ${intentos}`);
            return funcion(); //llamamos a la funcion
        } catch (error) {
            console.log(`Error en intento ${intentos}: ${error.message}`);
            if (intentos === maxReintentos) {
                console.log('Se alcanzó el número máximo de reintentos.');
                throw new Error('No se pudo completar la operación después de 10 intentos.');
    }
}
    }}

    function funcionConError() {
        const aleatorio = Math.random();
        if (aleatorio < 0.7) {
            throw new Error("Error aleatorio, falló la operación.");
        }
        console.log("Operación exitosa!");
    }
    // Llamamos a la función con reintentos
try {
    reintentar(funcionConError);
} catch (error) {
    console.log(`Fallo: ${error.message}`);
}