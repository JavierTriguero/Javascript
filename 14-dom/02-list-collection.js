let collection= document.getElemtnsByTagName('p');
let list = document.querySelectorAll('p');

console.log(collection,list);
let item1 = collection.namedItem('chanchito');
let item2 = collection.item(3);
let item3 = collection[3];

// collection.forEach((x)=>console.log(x));

// iterar elementos
// for(let el of collection){
//     console.log(el);
// }

// Array.from(collection).forEach(x=>console.log(x));
// [...collection].forEach(x=> console.log(x));

list.forEach(x=> console.log(x));

let entries= list.entries();
let keys= list.keys();
let value= list.values();
[...list].forEach(el=>console.log(el));