// hacer que devuelva solo los valores absolutos.
function paraAbsoluto(arr){
    return arr.map(n=> Math.abs(n));
    
}

const ns = [-2,3,4,-15];

const absolutos= paraAbsoluto(ns);

console.log(absolutos)
