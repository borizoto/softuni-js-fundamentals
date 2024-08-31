function evenAndOddSubstraction(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (const number of arr) {
        if (number % 2 === 0) {
            evenSum += Number(number);
        } else {
            oddSum += Number(number);
        }
    }
    console.log(evenSum - oddSum);
}