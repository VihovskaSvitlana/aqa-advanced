const person = {
  firstName: 'Svitlana',
  lastName: 'Vihovska',
  age: 25,
};

person.email = 'svitlana@gmail.com';
delete person.age;

console.log(person);
