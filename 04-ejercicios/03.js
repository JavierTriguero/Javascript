
function getbyId(arr,inx){
    if (inx<0 || arr.length<=inx) {
        return 'Elemento no existe';
    }
    return arr[inx];
    
}
let result=getbyId([1,2],0);
console.log(result);