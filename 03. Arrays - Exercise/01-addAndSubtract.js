function addAndSubtract(arr) {
    let newArr = [];
    let sumArr = 0;
    let sumNewArr = 0;

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        sumArr += curNum;
        if (curNum % 2 === 0) {
            curNum += i;
        } else {
            curNum -= i;
        }
        sumNewArr += curNum;
        newArr.push(curNum);
    }
    console.log(newArr);
    console.log(sumArr);
    console.log(sumNewArr);
}