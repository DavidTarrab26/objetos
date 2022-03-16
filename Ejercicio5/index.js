class Printer {
    constructor(admin, color, tamanio){
    this.admin = admin
    this.color = color
    this.tamanio = tamanio
    }
    //cualquier función que desees declarar para dicha clase
    //cualquier objecto de este tipo podrá usar esta función
    printerTest() {
    return 'probando'
    }
    }
    
const myPrinter = new Printer('David', 'Blanca', 'Large')

const resultTest = myPrinter.printerTest()

console.log(resultTest)
    