const obj ={
    nombre:'Nicolas',
};

function Extend(){
    this.login=() =>{
        console.log(`logeando usuario ${this.nombre}`);
    }
    
    this.outlogin=() =>{
        console.log(`cerrando sesión usuario ${this.nombre}`);

    }
}

Extend.call(obj);

console.log(obj);

obj.outlogin();
obj.login();
