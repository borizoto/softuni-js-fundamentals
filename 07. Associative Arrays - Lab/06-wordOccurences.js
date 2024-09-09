function wordOccurences(arr) {
    const wordObj = {};
    for (const word of arr) {
        if (!wordObj.hasOwnProperty(word)) {
            wordObj[word] = 1;
        } else {
            wordObj[word]++;
        }
    }

    const entries = Object.entries(wordObj);
    entries.sort((obj1, obj2) => obj2[1] - obj1[1]);
    for (const curArr of entries) {
        console.log(`${curArr[0]} -> ${curArr[1]} times`);
    }
}