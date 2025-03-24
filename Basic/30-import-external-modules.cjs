/*
Clase 44 - Módulos 
Vídeo: https://youtu.be/1glVfFxj8a4?t=21480
*/
  // .cjs
// Módulos externos -- operative sistem (os)

const os = require("os") // uso require, me lo guardo en una constante

console.log(os.platform())
console.log(os.arch())
console.log(os.totalmem()) //memoria total
console.log(os.freemem()) //memoria libre