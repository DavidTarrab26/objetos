class Counter {
    constructor(numero){
        this.numero = numero
    }
    increaseOne(){
        return this.numero +1
    }
    decreaseOne(){
        return this.numero -1
    }
    getValue(){
        return this.numero
    }
}

const prueba = new Counter (1)

console.log(prueba.increaseOne())
console.log(prueba.decreaseOne())
console.log(prueba.getValue())