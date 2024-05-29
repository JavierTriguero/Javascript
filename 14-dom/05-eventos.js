let form=document.createElement('form');

form.id = 'mi-form';
let input =document.createElement('input');
input.setAttribute('type', 'text');
let btn=document.createElement('button');
btn.innerText='Enviar';
form.append(input);
form.append(btn);
document.body.append(form);

form.onmouseenter=function(e){
    console.log(e);
}

form.onmouseleave=function(e){
    console.log(e);
}

input.onfocus=function(e){
    console.log(e); 
}
input.onblur=function(e){
    console.log(e); 
}
input.onchange=function(e){
    console.log('Valor cambiado',e.target.value);

}

btn.onclick=e=>{
    console.log(e);
    e.preventDefault();
    console.log(input.value);
    input.value='';
}

btn.addEventListener('click',e=>{
    console.log(e);
    e.preventDefault();
    console.log(input.value);
    input.value='';
});