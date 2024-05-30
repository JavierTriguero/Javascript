let promesa1=new promesa((res,rej)=>{
    res(12);
});
let promesa2=new promesa((res,rej)=>{
    res(15);
});

promesa1.then(valor=>{
   if(valor>10)
    return promesa2;
}).then(valor2=>{
    return valor2;
})