/*
Завдання: Імплементуйте функцію filterGreaterThanValue, яка приймає число minValue та масив з числами numbersList. 
Функція має повертати новий масив який містить лише числа більші за передане minValue.

*/
const numbers = [10, 61, 2, 41, 3, 11, -44, 22, 12, 53, 9, 40];

function filterGreaterThanValue1(minValue, numbersList) {
    let newNumberList = [];
    for (let i = 0; i < numbersList.length; i++) {
        if (numbersList[i] > minValue) {
            newNumberList.push(numbersList[i]);
        };
    };
    return newNumberList;
};

function filterGreaterThanValue2(minValue, numbersList) {
    let newNumberList = [];
    for (let number of numbersList) {
        if (number > minValue) {
            newNumberList.push(number);
        };
    };
    return newNumberList;
};

console.log(filterGreaterThanValue1(10, numbers));
console.log(filterGreaterThanValue2(40, numbers));