const obj ={
    nombre:'Nicolas',
};

function extender(usuario){
    
    const metodos ={
        logIn: ()=> console.log(`Iniciando sesión ${this.nombre}`),
        logOut: ()=> console.log(`Cerrando sesión ${this.nombre}`),
    }
    return Object.assign(usuario,metodos);

        // usuario.login=()=>{
        //     console.log(`login del usuario ${usuario.nombre}`);
        // }
        
        // usuario.logout=()=>{
        //     console.log(`logout del usuario ${usuario.nombre}`);
        // }
        // return usuario;
}
const usuario = extender(obj);
console.log(usuario);
usuario.logIn();
usuario.logOut();