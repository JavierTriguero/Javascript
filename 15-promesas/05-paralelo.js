const p1= Promise.resolve(1);
const p2=42;
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000,'foo');
});

// Promise.all([p1,p2,p3]) //? espera que se resuelvan todas las promesas pero en paralelo
//     .then(valores=>console.log(valores))
//     .catch(err=>console.log(err));

// Promise.race([p1,p2,p3]) //? espera que se resuelva cualquier promesa y la primera que se resuelva devolvera ese valor
//     .then(valor=>console.log(valor))
//     .catch(err=>console.log(err));

Promise.allSettled([p1,p2,p3]) //? espera que se resuelvan todas las promesas 
    .then(valores=>console.log(valores))
    .catch(err=>console.log(err));

Promise.any([p1,p2,p3]) //? espera que se resuelva cualquier promesa y la primera que se resuelva devolvera ese valor