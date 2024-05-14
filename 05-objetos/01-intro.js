let user ={
    email: 'javiertriguero@gmail.com',
    name: 'javier',
    direccion: {
        calle:'mariano',
        numero:15
    },
    activo: true,
    recuperarClave: function (){
        console.log('Recuperando clave...');
    }
};
console.log(user);