const numbers = [1, 2, 3, 4, 5, 10];
const multiplyByIndexArr = numbers.map(multiplyByIndex);

function multiplyByIndex(num) {
  return num * numbers.indexOf(num);
};

console.log(multiplyByIndexArr);