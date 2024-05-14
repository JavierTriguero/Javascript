
let array=[2,5,115,-5,-100,-555];
function cuantosPostivos(arr){

let contadorPositivos=0;
        for(num of array){
            if(num>=0){
                contadorPositivos++;
            }
        } 
        return contadorPositivos;
}


let result= cuantosPostivos(array);
console.log(result);