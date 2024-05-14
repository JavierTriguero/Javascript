let saludo = "HOLA MUNDO";

console.log(saludo.includes(" MUNDO"));

let nuevoSaludo =saludo.replace("MUNDO", "JAVIER");
console.log(nuevoSaludo,saludo);
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());
console.log(saludo.substring(0,4));
console.log(saludo.substr(0,4)); //deprecado!
const espacios = "    Hola   Mundo    ";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());
