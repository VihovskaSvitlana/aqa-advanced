//function declaration
function areaRectangleFunctionDeclaration(width, height) {
    const areaRectangle = width * height;
    return areaRectangle;
};

// function expression
const areaRectangleFunctionExpression = function (width, height) {
    const areaRectangle = width * height;
    return areaRectangle;
};

//arrow function
const areaRectangleArrowFunction = (width, height) => {
    return width * height;
};

//arrow function in one row
const areaRectangleArrowFunctionRow = (width, height) => width * height;

console.log("the area of the rectangle 5 * 11", areaRectangleFunctionDeclaration(5, 11));
console.log("the area of the rectangle 4 * 2", areaRectangleFunctionExpression(4, 2));
console.log("the area of the rectangle 7 * 12", areaRectangleArrowFunction(7, 12));
console.log("the area of the rectangle 6 * 8", areaRectangleArrowFunctionRow(6, 8));