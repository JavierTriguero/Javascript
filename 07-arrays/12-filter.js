const usuarios = [
    {edad:17, nombre:'Felipe'},
    {edad:13, nombre:'Fini'},
    {edad:25, nombre:'Javi'},
    {edad:22, nombre:'Raquel'},


];

const mayores = usuarios.filter(u=> u.edad>17 );

// el metodo reject no existe en js
// const menoresNO = usuarios.reject(u=> u.edad<18);


const menores= usuarios.filter(u=> u.edad<18);
console.log(mayores,menores);