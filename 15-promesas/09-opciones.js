const url='https://jsonplaceholder.typicode.com/todos/1';

fetch(url,{
    method:'POST',//GET,POST,PUT,DELETE
    body:JSON.stringify({tittle:'hola mundo'}),
    headers:{
        'Content-Type':'application/json',
        Authorization:'api key'
    },cache:'no-cache', //default,reload,force-cache,only-if-cached
})
    .then(res=> {

        if(res.ok){
            // return res.json();
            return res.text();
        }
        
    })
    .then(data=>{
        console.log(data);
    })
    .catch(message=>console.log({message}));