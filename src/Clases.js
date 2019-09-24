
class Usuario {
    constructor(nombre, edad, correo) {
        this.nombre = nombre,
            this.edad = edad,
            this.correo = correo

        //alert('Hola')
    }
    mostrarSaludo(mensaje) {
        return "mensaje "
    }

    mostrarInfo() {
        return `
        <b>Nombre:</b> ${this.nombre}<br />
        <b>Edad:</b> ${this.edad}<br />
        <b>Correo:</b> ${this.correo}<br />
        <hr />
        `
    }
}


class Estudiante extends Usuario {
    constructor(nombre, edad, correo, carrera) {
        super(nombre, edad, correo);
        this.carrera = carrera
    }

    mostrarInfo() {
        return `
        <b>Nombre:</b> ${this.nombre}<br />
        <b>Edad:</b> ${this.edad}<br />
        <b>Correo:</b> ${this.correo}<br />
        <b>Carrera:</b> ${this.carrera}<br />
        <hr />
        `
    }

}



const jhonatan = new Usuario("carlos mario ", 31, "my@MimeType.com");
document.write(jhonatan.mostrarInfo());

const walter = new Usuario("WAlter Andres ", 30, "walter@wal.com")
document.write(walter.mostrarInfo())

const carlos = new Estudiante("Carlos Mario ", 35, "mi@my.com", "guarda de seguridad")
document.write(carlos.mostrarInfo())
