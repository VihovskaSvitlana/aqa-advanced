const getTodosObj = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json());

const getUserObj = fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json());

let todos;
let user;

Promise.all([getTodosObj, getUserObj])
  .then((values) => {
    console.log(values)
    todos = values[0]
    user = values[1];
  }).catch((err) => console.log('err', err));

setTimeout(function () {
  console.log(todos, 'todos')
  console.log(user, 'user')
}, 1000);