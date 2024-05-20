const numeros = [1,2,3,4];

const suma = numeros.reduce((acc,el)=>{
    return acc + el;
},0);

console.log(suma);

const anidado=[[1,2],3,[4,5]];
const plano = anidado
        .reduce((acc,el)=>acc.concat(el),[]);
console.log(plano);


const usuarios = [
    {edad:17, nombre:'Felipe'},
    {edad:13, nombre:'Fini'},
    {edad:25, nombre:'Javi'},
    {edad:22, nombre:'Raquel'},
];

const indexado= usuarios.reduce((acc,el)=>({
...acc,
[el.nombre]:el,

}),{});

console.log(indexado)