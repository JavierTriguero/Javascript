let longitud = 7;

function crearArray(n){

    if(n<=0){
        return[];
    }

    let arr=[];
    
    for (let index = 0; index < n; index++) {
            arr[index] = index + 1;
        }
        
    return arr;
}



let resultado = crearArray(longitud);
console.log(resultado);