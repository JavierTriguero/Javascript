function User(){
    this.name='Hola Mundo';
}


function Product(){
    this.name='Producto';
}

function Entidad(){}

Entidad.prototype.save = function (){
    console.log('guardando...',this.name);
}

// User.prototype=Entidad.prototype;
// User.prototype.constructor=User;
User.prototype = Object.create(Entidad.prototype);
User.prototype.constructor = User;

Object.setPrototypeOf(User.prototype,Entidad.prototype);
Object.setPrototypeOf(Product.prototype,Entidad.prototype);
const user = new User();
console.log(user);