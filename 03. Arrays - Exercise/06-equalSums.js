function equalSums(arr) {
    if (arr.length === 1) {
        console.log(0);
    }

    let isEqual = true;

    for (let index = 1; index < arr.length; index++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < index; j++) { // left
            let leftNums = arr[j];
            leftSum += leftNums;
        }

        for (let k = index + 1; k < arr.length; k++) { // right
            let rightNums = arr[k];
            rightSum += rightNums;
        }

        if (leftSum === rightSum) {
            console.log(index);
            isEqual = true;
            break;
        } else {
            isEqual = false;
        }
    }

    if (!isEqual) {
        console.log('no');
    }
}