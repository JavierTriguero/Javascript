

function crearUsuario(name,email){

    return {
        email,
        name,
        direccion: {
            calle:'mariano',
            numero:15
        },
        activo: false,
        recuperarClave: function (){
            console.log('Recuperando clave...');
        }
    };



}

let user1= crearUsuario('nicolas','holamundo.io');
let user2= crearUsuario('javier','holamundo.io');
console.log(user1,user2);