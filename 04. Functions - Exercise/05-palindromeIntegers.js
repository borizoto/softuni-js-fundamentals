function palindromeIntegers(arr) {

    function palindromeChecker(number) {
        const curNumAsString = number.toString();
        let reversedNumAsString = "";

        for (let i = curNumAsString.length - 1; i >= 0; i--) {
            let curLetter = curNumAsString[i];
            reversedNumAsString += curLetter;
        }
        return reversedNumAsString === curNumAsString;
    }

    for (const iterator of arr) {
        const result = palindromeChecker(iterator);
        console.log(result);
    }
}