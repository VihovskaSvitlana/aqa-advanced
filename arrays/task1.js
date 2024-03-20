const numbers = [2, 0, -5, 0, -7, -3, 0, 10, 0, -8, 0, -2, 10, 'a'];
let positiveCountOf = 0;
let negativeCountOf = 0;
let zeroCountOf = 0;

for (let number of numbers) {
  if (number > 0) positiveCountOf += 1;
  if (number < 0) negativeCountOf += 1;
  if (number == 0) zeroCountOf += 1;
}

console.log(`Кількість позитивних чисел: ${positiveCountOf}, for of`);
console.log(`Кількість негативних чисел: ${negativeCountOf}, for of`);
console.log(`Кількість нульових чисел: ${zeroCountOf}, for of`);

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) positiveCount += 1;
  if (numbers[i] < 0) negativeCount += 1;
  if (numbers[i] == 0) zeroCount += 1;
}
console.log(`Кількість позитивних чисел: ${positiveCount}, for`);
console.log(`Кількість негативних чисел: ${negativeCount}, for`);
console.log(`Кількість нульових чисел: ${zeroCount}, for`);
