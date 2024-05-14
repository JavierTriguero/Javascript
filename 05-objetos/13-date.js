const ahora = new Date();
const fecha= new Date('December 11 1986 14:15 GMT-03000')
console.log(fecha);

const fecha2= new Date(1894,11,25,14,15);
const fecha3= new Date(1894,11,25,14+16,15);
console.log(fecha3);
console.log('toDateString',fecha3.toDateString());

//! MEJOR FORMATO PARA enviar fechas a servidores porque es más facil de comvertir a otros formatos

console.log('toISOString',fecha3.toISOString());
console.log('toTimeString',fecha3.toTimeString());