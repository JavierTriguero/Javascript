function suma(fn,...rest){
   

    fn(rest.reduce((acc,cv)=>acc+cv,0));
}

suma(resultado => console.log(resultado),1,2,3,4);