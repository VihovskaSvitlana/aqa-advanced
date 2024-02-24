const numbers = [10, 61, 2, 41, 3, 11, -44, 22, 12, 53, 9, 40];
const filterGreaterThanValue1 = (minValue, numbers) => numbers.filter((el) => {
    return el > minValue;
});

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