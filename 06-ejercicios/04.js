let obj= {
    id: 1,
    name: 'Javier',
    login: function(){},
    logout: function(){},

}

function cualesMetodos(obj){
    

    for (const llave in obj) {
        if(typeof obj[llave]==='function'){
            console.log (llave);
        }
    }
}

cualesMetodos(obj);