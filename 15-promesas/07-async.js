let promesa = user => new Promise((res, rej) => {
    res(user);
});

let promes1a = user => new Promise((res, rej) => {
    res(user+' is a user');
});

promes1a('Chanchito').then(console.log(user=>console.log(user))).then(console.log(dato=>console.log(dato)));

async function main(user) {
    
try{
    const a = await Promise.resolve(user);
    const b = await promes1a(a);
    const c = await promes1b(b);
    promesa3(a,b);

}catch(err){

    console.log(err);
}

}


main();