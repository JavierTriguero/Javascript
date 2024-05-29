let el = document.createElement('p');
    el.innerText= 'Elemento creado';
document.body.append(el);

el.remove();

document.body.prepend(el);

let div= document.createElement('div');
div.innerText = 'Soy un texto';

el.replaceWith(div);
document.body.replaceChild(el, div);
document.body.removeChild(el);
document.body.appendChild(el);
// document.body.insertBefore(div,el);

document.body.insertAdjacentElement('beforebegin', div);
document.body.insertAdjacentElement('afterbegin', div);
document.body.insertAdjacentElement('beforeend', div);
document.body.insertAdjacentElement('afterend', div);

document.body.insertAdjacentHTML('beforebegin', '<p>Soy un texto</p>');
document.body.insertAdjacentText('afterbegin', '<p>Soy un texto</p>');