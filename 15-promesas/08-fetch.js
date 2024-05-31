const url='https://jsonplaceholder.typicode.com/todos/1';

fetch(url)
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