function listOfProducts(arr) {
    arr.sort();
    for (let counter = 0; counter < arr.length; counter++) {
        console.log(`${counter + 1}.${arr[counter]}`);
    }
}