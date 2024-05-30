let promesa1=new promesa((res,rej)=>{
    res(12);
});
let promesa2=new promesa((res,rej)=>{
    res(15);
});

promesa1
.then(valor=>{
    if(valor>10)
        return promesa2;

//    return Promise.reject("Valor menor a 10");
    return Promise.resolve( 555);
})
.then(valor2=>{
    return valor2;
})
.catch(e=>console.error(e))
.finally(()=>console.log("finalizado"));