const promesa = new Promise((resolve, reject) => {
    //la accion que queremos que se ejecute
    setTimeout(() => {
        const exito = false;
        if (exito) {
            resolve("la operacion tubo exito");
        } else {
            reject("la operacion no fue exitosa");
        }
    }, 4000)
});
//cuando es exitosa la promesa
promesa.then((mensaje) => {
    alert(mensaje)
});
// si es rechasada la promesa
promesa.catch((mensaje) => {
    alert(mensaje)
});