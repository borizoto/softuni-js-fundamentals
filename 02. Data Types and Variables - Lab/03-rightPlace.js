function rightPlace(word, char, correctWord) {
    let newWord = "";
    for (let index = 0; index < word.length; index++) {
        if (word[index] === "_") {
            newWord += char;
        } else {
            newWord += word[index];
        }
    }
    const output = newWord === correctWord ? console.log(`Matched`) : console.log(`Not Matched`);
}