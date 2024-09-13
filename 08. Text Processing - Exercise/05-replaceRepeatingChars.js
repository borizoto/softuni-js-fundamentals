function replaceRepeatingChars(string) {
    let lastChar = "";
    let newString = "";
   for (const curChar of string) {
        if (lastChar !== curChar) {
            lastChar = curChar;
            newString += lastChar;
        }
   }
   console.log(newString);
}