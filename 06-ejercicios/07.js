let obj= {name:"Nicolas"}

function agregarId(obj){
  if(typeof obj === 'object')
    obj.id=Math.random(1);

    return obj;
}
agregarId(obj);

console.log(obj);