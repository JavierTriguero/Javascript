function Usuario(name){
    this.id = Math.random(1);
    this.name=name;

}

let user = new Usuario('Felipe');
let user2 = new Usuario('Pepe');

console.log(user,user2);