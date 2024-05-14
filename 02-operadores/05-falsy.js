//shot-circuit
/* 
Falso
false0 
''
null
undefined
NaN */

let nombre='javier';
let username=name|| 'Aninimo';
console.log(username);

function fn1(){
    console.log('soy fn1');
    return false;
}

function fn2(){
    console.log('soy fn2');
    return true;
}
let x = fn1() || fn2();
console.log(x);