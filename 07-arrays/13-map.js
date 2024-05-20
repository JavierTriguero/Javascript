const usuarios = [
    {edad:17, nombre:'Felipe'},
    {edad:13, nombre:'Fini'},
    {edad:25, nombre:'Javi'},
    {edad:22, nombre:'Raquel'},
];

// const lista = usuarios.map(u=> `<li>${u.nombre}</li>`);
// const html = `<ol>${lista.join('')}</ol>`;
// console.log(html);


// const mapped = usuarios.map(u=>{
//     return {...u,
//         mayor: u.edad > 17
//     }
// });

//console.log(mapped);

const lista = usuarios
    .filter(u=> u.edad > 17)
    .map(u=> `<li>${u.nombre}</li>`);

const html = `<ol>${lista.join('')}</ol>`;
console.log(html);