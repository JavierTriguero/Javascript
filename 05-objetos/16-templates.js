const saludo= "Hola \\mundo!\n bienvenido a\t \"ultimate javascripot\" : )";




const nombre = 'Javier';
const plantilla = `Hola ${nombre}

Bienvenidos a "Ultimate Javascript" :)

Cariños Javier."`;

console.log(plantilla)

function miFuncionPlantilla(nombre){
    return `Hola ${nombre}

    Bienvenidos a "Ultimate Javascript" :)
    
    Cariños Javier."`;
    
}

console.log(miFuncionPlantilla("felix"));
