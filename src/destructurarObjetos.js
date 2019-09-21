const usuario = {
    nombre: "Jhonatan Mauricio",
    Correo: "jolki3e4r@outlook.com",
    edad: "31",
    pais: "Colombia",
    profecion: "Web-eveloper"
}

const { nombre, pais, profecion = "no especificado" } = usuario

const mostrarInfo = ({ nombre, profecion = "Estudiante" }) => console.log(`${nombre} es ${profecion}`)

mostrarInfo(usuario)