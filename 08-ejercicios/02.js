
function dividirTipos(arr){
//devolver un objeto que tenga los tipos divididos
return {numero:arr.filter(n=>typeof n==="number"),
    string:arr.filter(n=>typeof n==="string"),
    object:arr.filter(n=>typeof n==="object"),
}
}




const miArray= [
    "Hola",
    12,
    "Mundo",
    {},
    {id:15},
    ['lala'] //object
];









const nuevoArray = dividirTipos(miArray);
    console.log(nuevoArray);
