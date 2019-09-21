
// los valores por defecto se pasan con un igual y se encierran entre comillas 
// dentro de los parametros que queremos recivir asi si el usuario no ingresa algun valor
//este tendra por defecto el que nosotros pongamos por defecto 


function resgistrarUsuario(nombre, pais, correo, telefono = "no Estecificado") {
    return `Nombre: ${nombre} , Pais: ${pais}, Correo: ${correo}, Telefono: ${telefono}`
}

console.log(resgistrarUsuario("Jhonatan", "colombia", "jolki3e4r@outlook.com", "012454545"))