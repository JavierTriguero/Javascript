
let array=[2,5,115,-5,-100,-555];

function getMenorMayor(array){
let mayor=array[0],menor=array[0];

for(num of array){
    menor = menor < num ? menor : num;
    mayor = mayor > num ? mayor : num;
}
return [menor, mayor];

}

let numeros= getMenorMayor(array);
console.log(numeros);