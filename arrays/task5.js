const firstArray = ['test', 'it', 20, false, 900];
const secondArray = [1, 4, 'abc', 'QWE', true];

const finalArray = firstArray.concat(secondArray);
console.log(finalArray);

const newArray = [...finalArray, ...firstArray];
console.log(newArray);
