function condenseArrayToNumber(arr) {

    while (arr.length > 1) {

        let condensedArr = [];

        for (let i = 0; i < arr.length - 1; i++) {
            let num = Number(arr[i]);
            let numOnRight = Number(arr[i + 1]);
            let result = num + numOnRight;
            condensedArr.push(result);
        }
        arr = condensedArr;
    }
    console.log(arr.toString());

}