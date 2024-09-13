function hardWord(arr) {
    const replacements = arr[1];
    let text = arr[0];

    const string = text.split(/[.,!?: ]/);

    for (const word of string) {
        if (word.includes("_")) {
            replacements.forEach(replacementWord => {
                if (replacementWord.length === word.length) {
                    // const wordIndex = text.indexOf(word);
                    // text.splice(wordIndex, 1, replacementWord);
                    text = text.replace(word, replacementWord)
                }
            });
        }
    }
    console.log(text);
}