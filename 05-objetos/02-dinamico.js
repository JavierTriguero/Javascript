const user = {id:1};

user.name= 'Nicolas';
user.guardar= function(){
    console.log('Guardando',user.name);

}
user.guardar();


delete user.name;
delete user.guardar;
console.log(user);

const user1= Object.freeze({id:1});
const user2= Object.seal({id:2});
user1.name = 'Nico';
console.log(user1);