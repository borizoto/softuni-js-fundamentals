function simpleCalculator(num1, num2, operator) {
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    let result = 0;

    if (operator === "multiply") {
        result = multiply(num1, num2)
    } else if (operator === "divide") {
        result = divide(num1, num2)
    } else if (operator === "add") {
        result = add(num1, num2)
    } else if (operator === "subtract") {
        result = subtract(num1, num2)
    }
    // console.log(result);
    return result;
}