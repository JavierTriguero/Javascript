function mixin(Ctr,...args){
 Object.assign(Ctr.prototype,...args);
}

let vuela = {
    vuela(){
        console.log('vuela');
    }
}
let nada = {
    nada(){
        console.log('nada');
    }
}

let vaAlbano ={
    vaAlbano(){
        console.log('yendo al baño');
    }
}

let camina ={
    camina(){
        console.log('camina');
    }
}

//vuela,nada, camina,va al baño
function Pato(){
    this.name = 'Pato';
}
mixin(Pato,vuela,nada,vaAlbano,camina);
//camina,nada,va al baño
function Perro(){}
mixin(Perro,vuela,nada,vaAlbano,camina);
let p2 = new Perro();
//nada ,va al baño
function Pez(){}
mixin(Pez,vuela,nada);
let p = new Pez();
//vuela pero no nada, camina ni va al baño
function Avion(){}

mixin(Avion,vuela);
