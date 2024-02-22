const numbers = [10, 20, 30, 40, 50];
const sum = 0;

const sumOfArr = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    sum
);

console.log(sumOfArr);