const nombres = ['carlos', 'paola', 'diana', 'andres,', 'jhonatan']

//se hace un map para sacar el numero de letras de cada nombre 
const numero_caracteres = nombres.map(function (nombre) {
    console.log(`${nombre} tiene ${nombre.length} letras`)
});
//pasamos a funcion flecha

//(parametro) =>{
//    return codigo a ejecutar
//}

const numero_caracteres2 = nombres.map(nombre => `${nombre} tiene2 ${nombre.length} letras`)

console.log(numero_caracteres2)
