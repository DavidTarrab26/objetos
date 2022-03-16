class Printer {
    constructor(admin, color, tamanio, model){
    this.admin = admin
    this.color = color
    this.tamanio = tamanio
    this.model = model
    }
    //cualquier función que desees declarar para dicha clase
    //cualquier objecto de este tipo podrá usar esta función
    printerTest() {
        return 'probando'
    }
    getModel(){
        return this.model
    }
    }
    
const myPrinter = new Printer('David', 'Blanca', 'Large', 'TX-200')

const resultTest = myPrinter.printerTest()

console.log(resultTest)

console.log (myPrinter.getModel())
    