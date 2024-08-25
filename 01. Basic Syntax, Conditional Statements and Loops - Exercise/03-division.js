function division(number) {
    let divisorsArr = [10, 7, 6, 3, 2];

    for (let index = 0; index < divisorsArr.length; index++) {
        let divisor = divisorsArr[index];
        if (number % divisor === 0) {
            console.log(`The number is divisible by ${divisor}`);
            return;
        }
    }
    console.log(`Not divisible`);
}