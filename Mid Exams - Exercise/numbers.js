function numbers(arr) {
    arr = arr.split(" ").map(Number);
    let avgValue = 0;
    for (let curNum of arr) {
        curNum = Number(curNum);
        avgValue += curNum;
    }
    avgValue = avgValue / arr.length;

    let topNumsArr = arr.filter(a => a > avgValue);
    if (topNumsArr.length === 0) {
        console.log('No');
    } else {
        topNumsArr = topNumsArr.sort((a, b) => b - a).splice(0, 5);
        console.log(topNumsArr.join(' '));
    }
}