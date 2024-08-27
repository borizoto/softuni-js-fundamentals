function triplesOfLatinLetters(numberString) {
    let number = Number(numberString);

    for (let num1 = 0; num1 < number; num1++) {
        for (let num2 = 0; num2 < number; num2++) {
            for (let num3 = 0; num3 < number; num3++) {
                console.log(String.fromCharCode(97 + num1, 97 + num2, 97 + num3));
            }
        }
    }
}