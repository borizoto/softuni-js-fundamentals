function charactersInRange(char1, char2) {
    const char1ToNum = char1.charCodeAt();
    const char2ToNum = char2.charCodeAt();

    let resultAsArr = [];

    const biggerChar = Math.max(char1ToNum, char2ToNum);
    const smallerChar = Math.min(char1ToNum, char2ToNum);

    for (let curCharNum = smallerChar + 1; curCharNum < biggerChar; curCharNum++) {
        let curChar = String.fromCharCode(curCharNum);
        resultAsArr.push(curChar);
    }
    // console.log(resultAsArr.join(' '));
    return resultAsArr.join(' ');
}