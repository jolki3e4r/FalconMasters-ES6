"use strict";

var nombres = ['carlos', 'paola', 'diana', 'andres,', 'jhonatan']; //se hace un map para sacar el numero de letras de cada nombre 

var numero_caracteres = nombres.map(function (nombre) {
  console.log("".concat(nombre, " tiene ").concat(nombre.length, " letras"));
}); //pasamos a funcion flecha
//(parametro) =>{
//    return codigo a ejecutar
//}

var numero_caracteres2 = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene2 ").concat(nombre.length, " letras");
});
console.log(numero_caracteres2);