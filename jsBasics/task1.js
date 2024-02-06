//different ways of declaring variables and assigning them values

let stringVar;
const numberVar = 10;
let booleanVar = false;
let nullVar = null;
let undefinedVar;
let symbolVar = Symbol("userId");

stringVar = 'someText';

//can be a primitive data type
let bigIntVar = 234323467364736425676n;

console.log(`value of stringVar is ${stringVar}`);
console.log("value of numberVar is " + numberVar);
console.log('value of booleanVar is ' + booleanVar);
console.log("value of nullVar is", nullVar);
console.log("value of undefinedVar is " + undefinedVar);
console.log("value of symbolVar is " + symbolVar.toString());
console.log("value of bigIntVar is " + bigIntVar);