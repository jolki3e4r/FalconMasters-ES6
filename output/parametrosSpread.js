"use strict";

var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

var arregloDatos = ["carlos", 31, "my@mi.com", "colombia"]; //se pueden pasar tdos los elementos del arreglo como argumentos con los tres puntos de spread 

mostrarDatos.apply(void 0, arregloDatos);