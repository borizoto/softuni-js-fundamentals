function oddOccurences(arr) {
    const wordMap = new Map();
    const wordsArr = arr.split(" ");
    const oddsArr = [];
    for (let word of wordsArr) {
        word = word.toLowerCase();
        if (!wordMap.has(word)) {
            wordMap.set(word, 1);
        } else {
            const curOccs = wordMap.get(word);
            wordMap.set(word, curOccs+1)
        }
    }
    const entries = wordMap.entries();
    
    for (const [word, occs] of entries) {
        if (occs % 2 !== 0) {
            oddsArr.push(word);
        }
    }
    console.log(oddsArr.join(" "));
}