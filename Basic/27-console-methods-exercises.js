/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

// 2. Crea una función que utilice warn correctamente
function verificarBateria(nivel) {
    if (nivel < 20) {
      console.warn("⚠️ Advertencia: Batería baja, conecta el cargador.");
    } else {
      console.log("🔋 Batería suficiente:", nivel + "%");
    }
  }
  
  // Pruebas
  verificarBateria(50); // 🔋 Batería suficiente: 50%
  verificarBateria(15); // ⚠️ Advertencia: Batería baja, conecta el cargador.
  verificarBateria(5);  // ⚠️ Advertencia: Batería baja, conecta el cargador.
// 3. Crea una función que utilice info correctamente

function mostrarClima(ciudad, temperatura) {
    console.info(`ℹ️ Clima en ${ciudad}: ${temperatura}°C`);
  }
  
  // Pruebas
  mostrarClima("Madrid", 25);
  mostrarClima("Buenos Aires", 18);
  mostrarClima("Londres", 12);

// 4. Utiliza table
function mostrarNotas(estudiantes) {
    console.table(estudiantes);
  }
  
  // Datos de estudiantes
  let estudiantes = [
    { nombre: "Luciana", nota: 9 },
    { nombre: "Carlos", nota: 7 },
    { nombre: "Ana", nota: 10 },
    { nombre: "Pedro", nota: 6 }
  ];
  
  // Mostrar la tabla en consola
  mostrarNotas(estudiantes);


// 5. Utiliza group

function mostrarProductos() {
    // Agrupar productos electrónicos
    console.group("Productos Electrónicos");
    console.log("Smartphone: $300");
    console.log("Laptop: $800");
    console.log("Auriculares: $50");
    console.groupEnd(); // Cerrar el grupo de productos electrónicos
    
    // Agrupar productos de ropa
    console.group("Productos de Ropa");
    console.log("Camiseta: $20");
    console.log("Jeans: $40");
    console.log("Chaqueta: $60");
    console.groupEnd(); // Cerrar el grupo de productos de ropa
    
    // Agrupar productos de alimentación
    console.group("Productos de Alimentación");
    console.log("Manzanas: $3");
    console.log("Pan: $2");
    console.log("Leche: $1.5");
    console.groupEnd(); // Cerrar el grupo de productos de alimentación
  }
  
  // Llamar a la función
  mostrarProductos();

// 6. Utiliza time
function realizarSuma() {
  console.time("Tiempo de ejecución de la suma"); // Inicia el cronómetro
  
  let suma = 0;
  for (let i = 0; i < 1000000; i++) {
    suma += i; // Realiza una suma acumulativa
  }

  console.timeEnd("Tiempo de ejecución de la suma"); // Muestra el tiempo que ha tardado
}

// Llamar a la función
realizarSuma();


// 7. Valida con assert si un número es positivo

function validarNumeroPositivo(numero) {
    console.assert(numero > 0, "El número no es positivo, por favor ingresa un número mayor que 0.");
    
  }
  
  // Pruebas
  validarNumeroPositivo(5);   // El número es positivo: 5
  validarNumeroPositivo(-3);  // Error: El número no es positivo, por favor ingresa un número mayor que 0.

// 8. Utiliza count
function llamarFuncion() {
    console.count("Llamada a la función");
  }
  
  // Llamar a la función varias veces
  llamarFuncion();
  llamarFuncion();
  llamarFuncion();
// 9. Utiliza trace
function proceso1() {
    console.trace("Rastreo en proceso1");
    proceso2();
  }
  
  function proceso2() {
    proceso3();
  }
  
  function proceso3() {
    console.trace("Rastreo en proceso3");
  }
  
  proceso1();
// 10. Utiliza clear
console.clear()