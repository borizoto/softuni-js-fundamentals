function sumEvenNumbers(arr) {
    let sum = 0;
    for (let number of arr) {
        number = Number(number);

        if (number % 2 === 0) {
            sum += number;
        }
    }
    console.log(sum);
}