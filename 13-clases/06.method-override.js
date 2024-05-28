class Entidad{
    save(){
        console.log('save en entidad');
    }
}
class Update{
    update(){
        console.log('actualizando de entidad');
    }
}

class User extends Entidad{
    constructor(name){
        super(1);
        this.name=name;
    }
    save(){
        console.log('save en usuario');
    }
}
const nuevoProto=Object.assign({},Entidad,Update);

Object.setPrototypeOf(User.prototype,nuevoProto);
const u= new User('chanchito');
u.save();