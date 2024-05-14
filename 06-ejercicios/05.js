let obj= {
    id: 1,
    name: 'Javier',
    login: function(){},
    logout: function(){},

}
let prop='name';


function tieneProp(obj,prop){

    let propiedades= Object.keys(obj);
    
    for (const prop of propiedades) {
            console.log();
            if(prop==prop){
                    return true;
            }
            
    }

    return false;
    /*
    ?esto lo he montado yo (hace lo mismo)
    for (const key in obj) {
        
        if(key===prop)
            return true;
            
    }
    
    return false;*/
}

let resultado=tieneProp(obj,prop);
console.log(resultado);