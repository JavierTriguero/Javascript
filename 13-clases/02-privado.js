function User(a){
    let name=a;
    
    this.getName=function(){return name;}
}
User.prototype.login=function (){
    console.log('Hola mundo!');
}

class User{
    #name;
    constructor(name){
        this.#name=name;
    }
    getName(){
        this.#logger();
        return this.#name;
    }

    #logger(){
    }
}




const u = new User('Jose');