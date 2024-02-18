function makeCounter () {
    let n = 3;
    return function () {
        return n +=5;
    };
};
let counter =  makeCounter();

console.log(counter());
console.log(counter());