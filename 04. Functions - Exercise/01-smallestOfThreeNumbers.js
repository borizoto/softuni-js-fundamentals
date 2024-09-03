function smallestOfThreeNumbers1(num1, num2, num3) { // Solution 1
    const arr = [];
    arr.push(num1, num2, num3);
    let minNum = Number.MAX_SAFE_INTEGER;

    for (const curNum of arr) {
        if (curNum < minNum) {
            minNum = curNum;
        }
    }
    // console.log(minNum);
    return minNum;
}



function smallestOfThreeNumbers2(num1, num2, num3) { // Solution 2
    // console.log(Math.min(num1, num2, num3));
    return Math.min(num1, num2, num3);
 }