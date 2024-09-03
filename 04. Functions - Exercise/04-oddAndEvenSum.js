function oddAndEvenSum1(num) { // Solution 1

    const numToString = num.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numToString.length; i++) {
        let curNum = Number(numToString[i]);
        if (curNum % 2 === 0) {
            evenSum += curNum;
        } else {
            oddSum += curNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}



function oddAndEvenSum2(num) { // Solution 2
    
    function sumOfEven(x) {
        const numToString = num.toString();
        let evenSum = 0;
        for (let i = 0; i < numToString.length; i++) {
            let curNum = Number(numToString[i]);
            if (curNum % 2 === 0) {
                evenSum += curNum;
            }
        }
        return evenSum;
    }

    function sumOfOdd(x) {
        const numToString = num.toString();
        let oddSum = 0;
        for (let i = 0; i < numToString.length; i++) {
            let curNum = Number(numToString[i]);
            if (curNum % 2 !== 0) {
                oddSum += curNum;
            }
        }
        return oddSum;
    }

    console.log(`Odd sum = ${sumOfOdd(num)}, Even sum = ${sumOfEven(num)}`);
    
}