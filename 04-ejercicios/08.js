
let Array =[{
    id:1,
    name:'Nicolas'
    },{ 
    id:2,
    name:'Fini'
    },
    {
        id:3,
        name:'Josi'
    }]

    let pares=  [
        [1,{id:1,name:"Nicolas"}],
        [2,{id:2,name:"Fini"}],
        [3,{id:3,name:"Nicolas"}],
    ];  

    function toPairs(Array){

        let pairs =[];
        
        for (idx in Array) {
            let elemento=Array[idx];
            pairs[idx] =[elemento.id,elemento];
        }

        return pairs;


    }

    let resultado= toPairs(Array);
    console.log(resultado);