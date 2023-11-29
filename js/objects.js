class Socio {
    constructor(id, nombre, apellido) {
        this.id = id
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Getters 
    getNombre() {
        return this.nombre;
    }

    getApellido() {
        return this.apellido;
    }

    // Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    // Método para concatenar los atributos con un espacio
    concatenarNombreApellido() {
        return this.nombre + ' ' + this.apellido;
    }
}
