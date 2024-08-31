function equalArrays(array1, array2) {
    let areIdentical = true;
    let sum = 0;
    for (let i = 0; i < array1.length; i++) {
        let element1 = Number(array1[i]);
        let element2 = Number(array2[i]);
        sum+= element1;

        if (element1 !== element2) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areIdentical = false;
            break;
        }
    }

    if (areIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}