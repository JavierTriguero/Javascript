const usuarios = [
    {edad:17,nombre:'Nico', plan: 'premium'},
    {edad:13,nombre:'Chanchito', plan: 'premium'},
    {edad:32,nombre:'Pepe', plan: 'free'},
    {edad:25,nombre:'Felipe', plan: 'gold'},
];


function cuantosPremium(usrs){
    return usrs.reduce((acc,el)=> el.plan!=='free' ? acc+1:acc,0)
    // return usrs.filter(u=> u.plan==="premium").length; //? tambien vale con filter
}
function cuantosMayores(usrs){
    return usrs.reduce((acc,el) => el.edad>17 ? acc+1: acc,0)
    // return usrs.filter(u=> u.edad>=17).length; //? tambien vale con filter
}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));