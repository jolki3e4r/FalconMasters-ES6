"use strict";

var usuario = {
  nombre: "Jhonatan Mauricio",
  Correo: "jolki3e4r@outlook.com",
  edad: "31",
  pais: "Colombia",
  profecion: "Web-eveloper"
};
var nombre = usuario.nombre,
    pais = usuario.pais,
    _usuario$profecion = usuario.profecion,
    profecion = _usuario$profecion === void 0 ? "no especificado" : _usuario$profecion;

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      _ref$profecion = _ref.profecion,
      profecion = _ref$profecion === void 0 ? "Estudiante" : _ref$profecion;
  return console.log("".concat(nombre, " es ").concat(profecion));
};

mostrarInfo(usuario);