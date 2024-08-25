function multiplicationTable(number) {
    for (let multiplicator = 1; multiplicator <= 10; multiplicator++) {
        let result = number * multiplicator;
        console.log(`${number} X ${multiplicator} = ${result}`);
    }
}