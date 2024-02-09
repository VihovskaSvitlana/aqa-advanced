const number = 5;
const minMultiplier = 1;
const maxMultiplier = 10;

console.log("loop for:");

for (let i = minMultiplier; i <= maxMultiplier; i++)  {
    console.log(`${number} x ${i} = ${number*i}`);
};

console.log("loop while:")

let j = minMultiplier;
while (j <= maxMultiplier) {
    console.log(`${number} x ${j} = ${number * j}`);
    j++;
}