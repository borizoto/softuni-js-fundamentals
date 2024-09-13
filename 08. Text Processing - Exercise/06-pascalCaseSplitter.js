function pascalCaseSplitter(string) {
    const arr = [];
    let curWord = [];
    for (let i = 0; i < string.length; i++) {
        let curChar = string[i]
        if (curChar === curChar.toUpperCase() && string.indexOf(curChar) !== 0) {
            arr.push(curWord.join(""));
            curWord = [];
            curWord.push(curChar);
        } else {
            curWord.push(curChar);
        }
    }
    arr.push(curWord.join(""));
    console.log(arr.join(", "));
}