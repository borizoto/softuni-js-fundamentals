function addAndSubtract(num1, num2, num3) {
    
    function sum(x, y) {
        const sumRes = x + y;
        return sumRes;
    }

    function subtract(x, y) {
        const subRes = x- y;
        return subRes;
    }

    const sumedNums = sum(num1, num2);
    const result = subtract(sumedNums, num3);
    // console.log(result);
    return result;
}