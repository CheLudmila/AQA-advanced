function calculateArea(width, height) {
    return width * height;
}

const calculateAreaExpr = function (width, height) {
    return width * height;
};

const calculateAreaArrow = (width, height) => width * height;

const methods = {
    declaration: calculateArea,
    expression: calculateAreaExpr,
    arrow: calculateAreaArrow,
};

const width = 5;
const height = 10;

for (const [name, fn] of Object.entries(methods)) {
    console.log(`${name}:`, fn(width, height));
}