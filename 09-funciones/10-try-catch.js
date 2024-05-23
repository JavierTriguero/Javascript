function sumaTodo(arr){
    if(!Array.isArray(arr)){
        throw new Error('El parámetro no es un array');
    }
    return arr.reduce((acc,el)=>{
        if(typeof el !== 'number' || Number.isNaN(el)){
            throw new Error(`El ${el} no es número`);
        }
        return acc+el;
    });
}

try {

    console.log(sumaTodo([1,2,NaN,'hola mundo']))
    
} catch (error) {
        console.log(error.message);
}