function User(){
    this.name='Hola Mundo';
    // Metodo de instancia
    this.logger = function (){
        console.log('loggeando...');
    }
}
// método de prototype
User.prototype.login= function (){
    console.log('iniciando sesión',this.name);
    this.logger();
}
User.prototype.toString= function (){
    console.log('Usuario: ',this.name);
}
const user1 = new User();
const user2 = new User();
