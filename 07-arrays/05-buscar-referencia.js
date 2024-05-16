const usuarios=[
    {id:1,name:'Chanchito'},
    {id:2,name:'Feliz'}
];

//const resultado = usuarios.indexOf({id:1,name:'Chanchito'}); esto devuelve -1 porque recuerda que los objetos 
//                                                             se guardan como referencia por lo tanto al comparar un NUEVO objeto no lo encuentra

//? find() siempre devuelve el primer elemento que encuentre para buscar el index usar findIndex()

//? este tipo de funcion se conoce como predicate, ya que se le pasa una función y devuelve true o false
const resultado = usuarios.find(function (usuario){
    return usuario.name ==='Chanchito';
});

const resultado2 = usuarios.find(usuario=> 
    usuario.name ==='Chanchito');
console.log(resultado);