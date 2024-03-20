const users = [
  { name: 'sveta', age: 18, email: 'sveta@gmail.com' },
  { name: 'viktor', age: 29, email: 'viktor@test.com' },
  { name: 'test', age: 40, email: 'test@google.com' },
];

for (let user of users) {
  console.log(user);

  const { name, age, email: newEmail } = user;
  console.log('name ', name);
  console.log('age ', age);
  console.log('email ', newEmail);
}
