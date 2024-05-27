
//? creamos una identidad con lo que nos interesa para luego solo precuparnos en modificar el objeto User

function Entidad(entidad){
    this.id=Math.random().toString('20');
    this.entidad=entidad;
}

function User(){
    Entidad.call(this,'user');
    this.attrs={
        name:'javier',
        email:'hola.er@gmalds.com'
    }
}

const u = new User();

console.log(u);