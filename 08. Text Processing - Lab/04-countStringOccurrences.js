function solve(string, searchedWord) {
    const arr = string.split(" ");
    let counter = 0;
    
    for (const curWord of arr) {
        if (curWord === searchedWord) {
            counter++;
        }
    }
    console.log(counter);
}