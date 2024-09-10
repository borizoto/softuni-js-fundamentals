function wordTracker(arr) {
    const searchedWords = arr.shift().split(" ");
    const wordObj = {};

    for (const curWord of searchedWords) {
        wordObj[curWord] = 0;
    }

    for (const word of arr) {
        if (wordObj.hasOwnProperty(word)) {
            wordObj[word]++;
        }
    }
    
    const entries = Object.entries(wordObj);
    entries.sort((ob1, ob2) => ob2[1] - ob1[1]);

    for (const [word, reps] of entries) {
        console.log(`${word} - ${reps}`);
    }
}