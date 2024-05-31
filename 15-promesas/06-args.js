let promesa = user => new Promise((res, rej) => {
    res(user);
});

let promes1a = user => new Promise((res, rej) => {
    res(user+' is a user');
});

promes1a('Chanchito').then(console.log(user=>console.log(user))).then(console.log(dato=>console.log(dato)));