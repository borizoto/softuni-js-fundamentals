function stringSubstring(searchedWord, sentence) {
    searchedWord = searchedWord.toLowerCase();
    sentence = sentence.toLowerCase();
    sentence = sentence.split(" ");
    if (sentence.includes(searchedWord)) {
        console.log(searchedWord);
    } else {
        console.log(`${searchedWord} not found!`);
    }
}