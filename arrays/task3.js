/*
Завдання 3: Обчислення суми елементів масиву

Вам потрібно створити програму, яка обчислює суму всіх елементів у масиві за допомогою методу reduce.

Ось кроки, які вам потрібно виконати:

Створіть масив чисел, наприклад, [10, 20, 30, 40, 50].
Використовуючи метод reduce, обчисліть суму всіх елементів масиву.
Виведіть отриману суму на консоль.

*/

const numbers = [10, 20, 30, 40, 50];
const sum = 0;

const sumOfArr = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    sum,
);

console.log(sumOfArr);

const a = numbers.reduce(
    (accumulator, currentValue) => currentValue - accumulator ,
    sum,
    console.log(accumulator, "curre")
)
console.log(a);