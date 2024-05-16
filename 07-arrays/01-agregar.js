const letras =['a','b'];
//agregar elementos al principio
letras.push('c','b');
//agregar elementos al final
letras.unshift('y','z');
//agregar elementos  en el sitio que quieras
letras.splice(3,0,1,2);
console.log(letras);