const config={
    url: 'https://holamundo.io',
    direccion:{
        calle:'hola mundo',
        numero:80
    }

}

function webserver({url,...rest}){
    console.log(rest);
    return url;
}