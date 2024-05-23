// (function saludar(...rest){

//     console.log(this.rest);
// }).bind({propiedad:'hola mundo'}(1,2));

// saludar.call({propiedad: 'hola mundo'},1,5);
// saludar.apply({propiedad: 'hola mundo'},[1,5]);

const usuario = {
    nombre: 'Nicolas',
    ciudadanias: ['Chile','Colombia','New Zealand'],
    mostrarCiudadanias(){
        this.ciudadanias.forEach(function (ciudadania){
            console.log(this.nombre,ciudadania);
        },this);
    }


};

usuario.mostrarCiudadanias();