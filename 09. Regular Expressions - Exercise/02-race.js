function race(arr) {
    const peopleArr = arr.shift();
    arr.pop();
    const peopleObj = {};
    
    const namePattern = /[A-Za-z]/g;
    const numbersPattern = /\d/g;

    for (const string of arr) {
        const name = string.match(namePattern).join("");
        const distance = string.match(numbersPattern).map(Number).reduce((accumulator, curValue) => accumulator + curValue);

        if (peopleArr.includes(name)) {
            if (!peopleObj.hasOwnProperty(name)) {
                peopleObj[name] = distance;
            } else {
                peopleObj[name] += distance;
            }
        }
    }
    const entries = Object.entries(peopleObj).sort((arr1, arr2) => arr2[1] - arr1[1]);
    const [win1, win2, win3] = entries;
    
    console.log(`1st place: ${win1[0]}`);
    console.log(`2nd place: ${win2[0]}`);
    console.log(`3rd place: ${win3[0]}`);
}