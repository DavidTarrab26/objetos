//Ejerecicio 2, 3 y 4


//Primera opcion, con objeto

class Persona{
    constructor(nombre, apellido, nacimiento){
        this.nombre = nombre
        this.apellido = apellido
        this.nacimiento = nacimiento
    }
}

const objBob = new Persona('bob', 'Dylan', new Date('May 24, 1941'))

console.log(objBob)

//Segunta opcion

/* class Persona{
    constructor(nombre, apellido, nacimiento){
        this.nombre = 'Bob'
        this.apellido = 'Dylan'
        this.nacimiento = new Date('May 24, 1941')
    }
}

console.log(Persona) */
