function User(){
    this.name='Hola Mundo';
}
// método de prototype
User.prototype.login= function (){
    console.log('iniciando sesión',this.name);
    this.logger();
}

const user = new User();
for(let prop in user)
    if(!user.hasOwnProperty(prop))
        console.log(prop)
