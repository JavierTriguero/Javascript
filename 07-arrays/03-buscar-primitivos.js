const letras =['a','b',1,'c','d',1];


//buscar elementos desde el principio
console.log(letras.indexOf('c'))
console.log(letras.indexOf(1))

// buscar elementos desde donde quieras
console.log(letras.indexOf(1,3))
//buscar elementos desde el final
console.log(letras.lastIndexOf(1))
//devuelve true si el elemento está
console.log(letras.includes(1));