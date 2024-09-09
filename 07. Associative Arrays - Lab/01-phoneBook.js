function phoneBook(arr) {
    const assocArr = {};
    for (const string of arr) {
        const [name, number] = string.split(" ");

        assocArr[name] = number;
    }
    
    for (const name in assocArr) {
        console.log(`${name} -> ${assocArr[name]}`);
    }
}