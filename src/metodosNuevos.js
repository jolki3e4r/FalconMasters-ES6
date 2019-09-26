const texto = "Hola mundo"
//metodo para comprobar si empieza con una letra startsWith
console.log(texto, 'empieza con h: ', texto.toLocaleLowerCase().startsWith("h"))
//metodo para saber con que letra termina 
console.log(texto, 'termina con o: ', texto.toLocaleLowerCase().endsWith("o"))
//parasaber si una cadena de texto incluye una palabra
console.log(texto, "incluye la palabra carlos", texto.includes("carlos"))

const amigos = ["paola", "carlos", "walter", "andres", "mauricio"]

console.log("la lista de amigos contiene el nombre de carlos ?", amigos.includes("carlos"))
//metodo para encontrar un elemento dentro del string cadena
console.log("el nombre con mas de 6 letras es: ", amigos.find(amigo => amigo.length > 6));
//metodo para encontrar el index de un elemento findIndex
console.log("el index de Walter es: ", amigos.findIndex(amigo => amigo === "walter"))