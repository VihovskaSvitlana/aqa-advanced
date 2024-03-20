async function getTodosObj() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
};

async function getUserObj() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return response.json();
};

let todos;
let user;

let promiseExecution = async () => {
    let values = await Promise.all([
        getTodosObj(),
        getUserObj(),
    ]);
    todos = values[0]
    user = values[1]
};
promiseExecution();

setTimeout(function () {
    console.log(todos, 'todos')
    console.log(user, 'user')
}, 1000);