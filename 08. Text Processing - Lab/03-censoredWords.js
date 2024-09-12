function solve(string, wordToCensore) {
    while (string.includes(wordToCensore)) {
        string = string.replace(wordToCensore, "*".repeat(wordToCensore.length));
    }
    console.log(string);
}