function sorting(arr) {
    arr = arr.sort((a, b) => a - b);
    let newArr = [];
        
    while (arr.length > 0) {
        const biggest = arr.pop();
        const smallest = arr.shift();
        newArr.push(biggest);
        newArr.push(smallest);
    }

    console.log(newArr.join(' '));
}