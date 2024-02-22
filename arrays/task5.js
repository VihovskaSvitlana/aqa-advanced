/*
Завдання 5: Об'єднання масивів

Вам потрібно створити програму, яка об'єднає два масиви в один

Ось кроки, які вам потрібно виконати:

Створіть два масиви, наприклад, firstArray і secondArray, які містять деякі значення.
Створіть новий масив, який містить всі елементи з обох вихідних масивів.
Виведіть отриманий об'єднаний масив на консоль.
*/

const firstArray = ["test", "it", 20, false, 900];
const secondArray = [1, 4, 'abc', 'QWE', true];

const finalArray = firstArray.concat(secondArray);
console.log(finalArray);

const newArray = finalArray + firstArray
console.log(newArray)