let d = new Date();
fecha = d.getDate()
mes = d.getMonth() +1
year = d.getFullYear()

console.log(`Hoy es: ${mes}-${fecha}-${year}`);

console.log(`Hoy es: ${d.toLocaleDateString()}`)