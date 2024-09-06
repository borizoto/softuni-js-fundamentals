function distinctArray(arr) {
    let newArr = [];

    for (const curNum of arr) {
        if (!newArr.includes(curNum)) {
            newArr.push(curNum);
        }
    }
    console.log(newArr.join(" "));
}
