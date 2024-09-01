function mergeArrays(arr1, arr2) {
    let thirdArr = [];
    let sum = 0;
    
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            sum = Number(arr1[i]) + Number(arr2[i]);
            thirdArr.push(sum);
        } else {
            sum = arr1[i] + arr2[i];
            thirdArr.push(sum);
        }
    }
    console.log(thirdArr.join(" - "));
}