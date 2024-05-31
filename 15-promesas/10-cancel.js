let controller= new AbortController();
let {signal} =controller;

async function getTodos() {
const url='https://jsonplaceholder.typicode.com/todos/a';
try {
    const res = await fetch(url,{signal});
    const data = await res.json();
    console.log(data);

} catch (error) {
    console.log(error);
}


}
getTodos();
controller.abort();