function mirrorWords(arr) {
    const pattern = /([@#])(?<word1>[a-zA-Z]{3,})\1\1(?<word2>[a-zA-Z]+)\1/g;
    const string = arr.shift();
    let match = pattern.exec(string);
    let validPairsCount = 0;
    const mirrorWordsArr = [];

    while (match) {
        validPairsCount++;
        const word1 = match.groups.word1;
        const word2 = match.groups.word2;

        const word2Reversed = word2.split("").reverse().join("");

        if (word1 === word2Reversed) { //We have a match
            mirrorWordsArr.push(`${word1} <=> ${word2}`);
        }

        match = pattern.exec(string);
    }

    if (validPairsCount === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${validPairsCount} word pairs found!`);
    }

    if (mirrorWordsArr.length === 0) {
        console.log(`No mirror words!`);
    } else {
        console.log("The mirror words are:");
        console.log(mirrorWordsArr.join(", "));
    }
}