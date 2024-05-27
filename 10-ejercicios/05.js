function ordenar(text,fn){
     let resultado=text.toLowerCase()
                        .split('')
                        .filter(x => x!== ' ')
                        .sort()
                        .join('');
    fn(resultado);
} 
ordenar('hola mundo',console.log);