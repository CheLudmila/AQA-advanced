function divide(numerator, denominator) {
    
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Both arguments must be numbers");
    }

    
    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    }

    return numerator / denominator;
}


const testCases = [
    [10, 2],
    [10, 0],
    [10, "a"],
];

testCases.forEach(([a, b]) => {
    try {
        console.log(divide(a, b));
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Робота завершена");
    }
});