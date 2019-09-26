const mostrarDatos = (...datos) => {
    console.log(datos)
}

const arregloDatos = ["carlos", 31, "my@mi.com", "colombia"]
//se pueden pasar tdos los elementos del arreglo como argumentos con los tres puntos de spread 
mostrarDatos(...arregloDatos);