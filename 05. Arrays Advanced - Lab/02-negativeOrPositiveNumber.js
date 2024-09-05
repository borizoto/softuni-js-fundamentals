function negativeOrPositiveNumber(arr) {
    const newArr = [];
    for (let curNum of arr) {
        curNum = Number(curNum);
        if (curNum < 0) {
            newArr.unshift(curNum);
        } else {
            newArr.push(curNum);
        }
    }
    console.log(`${newArr.join("\n")}`);
}