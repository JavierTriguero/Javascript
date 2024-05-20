


const usuarios = [
    {edad:17,nombre:'Nico',plan:'premium'},
    {edad:13,nombre:'Chanchito',plan:'free'},
    {edad:32,nombre:'Fernanda',plan:'free'},
    {edad:25,nombre:'Felipe',plan:'gold'},
]
const users= [
    {age:22, name:'Michael',membership:'premium'},
    {age:22, name:'Kevin',membership:'free'},
    {age:22, name:'Happy pig',membership:'free'}];

const userEspanol = users.map(u=>({
    edad:u.age,
    nombre: u.name,
    plan:u.membership
}))



const todos= [...usuarios,...userEspanol];

todos.sort((a,b)=>{
    if(a.edad<b.edad){
        return 1;
    }
    if(a.edad > b.edad){
        return -1;
    }
    return 0;

});

const lista=todos.map(u=>`<li> Nombre: ${u.nombre} Edad: ${u.edad}</li>`);
const html=`<ul>
${lista.join(`
`)}
</ul>`;
console.log(html);