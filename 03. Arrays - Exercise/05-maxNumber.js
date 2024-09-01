function maxNumber(arr) {
    let topNums = [];
    let topNum = 0;
    let isTop = false;

    for (let i = 0; i < arr.length; i++) {
        if (isTop) {
            topNums.push(topNum);
        }

        let curNum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let numToRight = arr[j];
            if (curNum > numToRight) {
                topNum = curNum;
                isTop = true;
                continue;
            } else {
                isTop = false;
                break;
            }
        }
    }
    topNums.push(arr[arr.length - 1]);
    console.log(topNums.join(" "));
}