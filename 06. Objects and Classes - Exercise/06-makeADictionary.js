function makeDictionary1(arr) { // Solution 1
    let dictionaryObj = {};
    for (const string of arr) {
        const obj = JSON.parse(string);
        dictionaryObj = Object.assign(dictionaryObj, obj);
    }

    const keys = Object.keys(dictionaryObj);
    keys.sort((a, b) => a.localeCompare(b));

    for (const term of keys) {
        console.log(`Term: ${term} => Definition: ${dictionaryObj[term]}`);
    }
}


function makeDictionary2(arr) { // Solution 2
    let dictionaryObj = {};
    for (const string of arr) {
        const obj = JSON.parse(string);
        dictionaryObj = {...dictionaryObj, ...obj};
    }

    const keys = Object.keys(dictionaryObj);
    keys.sort((a,b) => a.localeCompare(b));

    for (const term of keys) {
        console.log(`Term: ${term} => Definition: ${dictionaryObj[term]}`);
    }
}