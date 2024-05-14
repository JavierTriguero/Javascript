let obj = {id:1,name:'pepe'}

function crearCopia(obj){
// hecha por mi
 return {id:obj.id, name: obj.name}
}
function crearCopia(obj){
    let copia= {};

    for(let llave in obj){
        //Asignamos el valor de uno en la copia
        copia[llave]=obj[llave];

    }
    return copia;

}
let obj2= crearCopia(obj);

console.log({obj,obj2});