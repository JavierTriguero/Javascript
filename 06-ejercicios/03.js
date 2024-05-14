function similares(obj1,obj2){
    let distintos=false;
    
    for (const key in obj1) {
        if(obj1[key] !== obj2[key]){
            distintos=true;
        }

    }


    return !distintos;
}
    let resultado = similares({
        id:1,
        name:'Felix'
    },{
        id:1,
        name:'Felix'
    });

console.log(resultado);