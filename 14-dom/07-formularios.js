
let validate= data =>{
    let errors = [];
    if(!data.name) errors.push('name is required');
    if(!data.lastname) errors.push('lastname is required');
    return errors;
}

let render = function({data,errors}){
    return `<form>
    <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" value="${data.name}"> </input>
        ${errors[0] || ''}
    </div>
    <div>
        <label for="name">Apellido</label>
        <input type="text" name="lastname" id="Apellido" value="${data.lastname}"> </input>
        ${errors[1] || ''}
    </div>
    <div>
        <button>Enviar</button>
    </div>
    </from>`;
}
let initialValues={
    name:'',
    lastname:''
}

let form = document.createElement('form');
form.innerHTML = render({data:initialValues,errors:{}});
document.body.append(form);

form.addEventListener('submit', function(e){

e.preventDefault();
    let data=Array.from(e.target.elements).reduce((acc,elm)=>{
        if(!elm.name) return acc;
        acc[elm.name] = elm.value;
        return acc;
    },{});
    const errors = validate(data);
    console.log(errors);

    if(Object.keys(errors).length > 0){
    let html=render({errors,data});
    form.innerHTML = html;
    return;
    }
    // utilizar promesas o asincronia
});