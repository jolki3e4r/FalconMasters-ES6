"use strict";

var promesa = new Promise(function (resolve, reject) {
  //la accion que queremos que se ejecute
  setTimeout(function () {
    var exito = false;

    if (exito) {
      resolve("la operacion tubo exito");
    } else {
      reject("la operacion no fue exitosa");
    }
  }, 4000);
}); //cuando es exitosa la promesa

promesa.then(function (mensaje) {
  alert(mensaje);
}); // si es rechasada la promesa

promesa["catch"](function (mensaje) {
  alert(mensaje);
});