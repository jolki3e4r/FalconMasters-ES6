"use strict";

// los valores por defecto se pasan con un igual y se encierran entre comillas 
// dentro de los parametros que queremos recivir asi si el usuario no ingresa algun valor
//este tendra por defecto el que nosotros pongamos por defecto 
function resgistrarUsuario(nombre, pais, correo) {
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "no Estecificado";
  return "Nombre: ".concat(nombre, " , Pais: ").concat(pais, ", Correo: ").concat(correo, ", Telefono: ").concat(telefono);
}

console.log(resgistrarUsuario("Jhonatan", "colombia", "jolki3e4r@outlook.com", "012454545"));