function amazingNumbers(number) {
    let sum = 0;
    const numberTostring = number.toString();
    for (let index = 0; index < numberTostring.length; index++) {
        sum += Number(numberTostring[index]);
    }
    const sumToString = sum.toString();

    for (let index = 0; index < sumToString.length; index++) {
        if (sumToString[index] === "9") {
            console.log(`${number} Amazing? True`);
            return;
        }
    }
    console.log(`${number} Amazing? False`);
}