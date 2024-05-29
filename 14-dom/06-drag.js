let id;

function createDraggable() {
    let span=document.createElement('span');
    span.id='hola-mundo';
    span.innerText='Arrastable!';
    span.draggable=true;
    span.ondragstart=e=>{ 
        id=e.target.id;
    }
    return span;
}
function createDropArea(){
    let dropArea=document.createElement('div');
    dropArea.className='drop';
    dropArea.ondragenter=e=>{
        e.target.style.background='yellow';
    }
    dropArea.ondragleave=e=>{
        e.target.style.background='';
}  
dropArea.ondragover=function(e){
    e.preventDefault();
    
}
dropArea.ondrop=function(e){
    e.target.appendChild(document.getElementById(id));
}

return dropArea;
}
document.addEventListener('dragover', function(event) {
    event.preventDefault();
});

document.addEventListener('dragenter', function(event) {
    event.preventDefault();
});
let draggable=createDraggable();
let dropArea=createDropArea(); 
let dropArea1=createDropArea(); 

document.body.append(dropArea);
document.body.append(draggable);
document.body.append(dropArea1);
