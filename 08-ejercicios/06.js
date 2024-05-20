const miArray= [
    "Hola",
    12,
    "Mundo",
    {},
    true,
    {id:15},
    ['lala'] //object
];

function dividirPorTipos(arr){
    return arr.reduce((acc,el)=>{
       let llave= typeof el;
        acc[llave]=acc[llave] ? acc[llave]  : [];
        acc[llave].push(el);
        return acc;
    },{});
}

console.log(dividirPorTipos(miArray));