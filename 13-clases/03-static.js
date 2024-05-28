class Restaurants{
    constructor(name){
        this.name = name;

    }
    getTimetable(){
        console.log('horario restaurante');
    }
    static getRestaurant(id){
        return new Restaurants('BBQ');
    }
}
const r  = Restaurants.getRestaurant(1);