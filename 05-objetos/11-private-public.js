function Usuario(){
    this.id=1;
    this.name='javier';

    let log= function(){
        console.log('logging...');
    }
    this.guardar= function(){
        log();
        console.log('guardando');
    }
}

const usuairo= new Usuario()