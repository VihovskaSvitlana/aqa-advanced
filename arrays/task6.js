const numbersList = [1, 10, 0, 54, 14, 2, 4, 5, 43, 34];
const copyNumberList = [...numbersList];
const copyNumberList2 = numbersList.concat([]);
const copyNumberList3 = [].concat([...numbersList]);

copyNumberList.sort((a, b) => a - b);

console.log('numbersList ', numbersList);
console.log('copyNumberList2 ', copyNumberList2);
console.log('copyNumberList3', copyNumberList3);
console.log('copyNumberList', copyNumberList);
