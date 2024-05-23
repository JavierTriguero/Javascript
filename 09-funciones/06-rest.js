const suma=(a,b,...rest)=>{
    console.log(rest);
}
//suma(1,2,3,4);

const logMsg = (desc,...msgs)=>{
    for(let msg of msgs){
        console.log(desc,msg)
    }
}

let mensajes=['Error 1','Petición aceptada','Socket activo']
//logMsg('Servidor:','Error 1','Petición aceptada','Socket Activo')
logMsg('Cliente movil: ',...mensajes,'Otro error!');