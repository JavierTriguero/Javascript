let el = document.createElement('p');

    // el.innerHTML="Elemento creado";

    document.body.append(el);
    el.innerHTML="Elemento creado";
    el.innerText="<ul><li>Elemento creado</li></ul>";

el.style= 'background-color: red; font-weight: bold';
el.className="parrafo";
el.id="mi parrafo";
el.setAttribute('mipropiedad', 'valor de mi propiedad');
el.getAttribute('mipropiedad');
el.hasAttribute('mipropiedad');