function processOddNumbers(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
           newArr.unshift(arr[i] * 2)
        }
    }
    console.log(newArr.join(" "));
}