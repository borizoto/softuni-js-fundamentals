function passwordValidator(password) {
    function lengthCheck(x) {
        if (x.length < 6 || x.length > 10) {
            console.log("Password must be between 6 and 10 characters"); 
            return false;
        } else {
            return true;
        }
    }

    function onlyLettersAndDigitsCheck(x) {
        for (const char of x) {
            if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
                continue;
            } else {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }
        return true;
    }

    function neededDigitCheck(x) {
        let has2Digits = false;
        let digitCounter = 0;
        for (const char of x) {
            if (char >= "0" && char <= "9") {
                digitCounter++;
            }
            if (digitCounter === 2) {
                has2Digits = true;
                break;
            } else {
                continue;
            }
        }
        if (has2Digits) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }

    const lengthResult = lengthCheck(password);
    const onlyLettersAndDigitsResult = onlyLettersAndDigitsCheck(password);
    const rightAmountOfDigitsResult = neededDigitCheck(password);

    if (lengthResult && onlyLettersAndDigitsResult && rightAmountOfDigitsResult) {
        console.log(`Password is valid`);
    }
}