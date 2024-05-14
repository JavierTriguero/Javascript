let obj = {};

let obj2 = new Object();
let array= new Array(); // []
let string = new String(); // "" '' ``
let number = new Number(); // 12
let boolean= new Boolean(); // true o false


function Usuario(){
    this.name="Javi";
}
let user = new Usuario();

console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String ("1 + 1");

console.log(s1,s2);
//para sacar el valor de los strings creados con su propio constructor
console.log(s2.valueOf());