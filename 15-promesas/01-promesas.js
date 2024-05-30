let promesa = new Promise((resolve, reject) => {

    setTimeout(() => resolve('Hola mundo'), 1000);

});

promesa.then(
    valor=>console.log(valor),
    e=>console.log('error',e)
);
