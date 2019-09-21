//para destructurar un arreglo comiensas con const o let 
const persona = ["Jhonatan velez", 31, "Colombia", "Web Developer"]

const [nombre, , pais, profesion = "no especificado"] = persona;

const mostrarInfo = ([nombre, , pais, profecion = "no especificado"] = persona) => console.log(nombre, profesion)

mostrarInfo(persona)