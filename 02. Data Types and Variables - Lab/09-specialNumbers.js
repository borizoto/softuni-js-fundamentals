function specialNumbers(number) {
    for (let currNum = 1; currNum <= number; currNum++) {
        let sum = 0;
        let isSpecial = "False";
        let currNumToStr = currNum.toString();

        for (let index = 0; index < currNumToStr.length; index++) {
            sum += Number(currNumToStr[index]);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = "True";
        }

        console.log(`${currNum} -> ${isSpecial}`);
    }
}