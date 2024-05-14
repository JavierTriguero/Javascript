function createUser(name){
    return {id:Math.random(1),name:name,};
}


let user = createUser('pepe');
console.log(user);