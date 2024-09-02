function repeatString(string, repeatCount) {
    let newString = "";
    for (let i = 0; i < repeatCount; i++) {
        newString += string;
    }
    // console.log(newString);
    return newString;
}