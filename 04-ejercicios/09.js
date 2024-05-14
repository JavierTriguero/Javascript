
    let pairs=  [
        [1,{name:"Nicolas"}],
        [2,{name:"Fini"}],
        [3,{name:"Nicolas"}],
    ];  

    function toCollection(arr){

        let collection=[];

        for( ind in arr){
            let elemento = arr[ind];
            collection[ind]=elemento[1];
            collection[ind].id= elemento[ind];
        }

    return collection;

    }

    let resultado = toCollection(pairs);
    console.log(resultado);