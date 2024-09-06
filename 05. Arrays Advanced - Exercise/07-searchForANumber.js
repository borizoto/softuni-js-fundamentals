function searchForANumber1(arr1, arr2) { // Solution 1
    arr1 = arr1.splice(0, arr2[0]);
    let counter = 0;

    for (let i = 0; i < arr2[1]; i++) {
        arr1.shift();
    }

    for (const curNum of arr1) {
        if (curNum === arr2[2]) {
            counter++;
        }
    }
    console.log(`Number ${arr2[2]} occurs ${counter} times.`);
}


function searchForANumber2(arr1, arr2) { // Solution 2
    arr1 = arr1.splice(0, arr2[0]);

    for (let i = 0; i < arr2[1]; i++) {
        arr1.shift();
    }

    arr1 = arr1.filter(a => a === arr2[2]);
    console.log(`Number ${arr2[2]} occurs ${arr1.length} times.`);
}


function searchForANumber3(arr1, arr2) { // Solution 3
    arr1 = arr1.splice(0, arr2[0]);
    arr1.splice(0, arr2[1]);
    arr1 = arr1.filter(a => a === arr2[2]);
    console.log(`Number ${arr2[2]} occurs ${arr1.length} times.`);
}