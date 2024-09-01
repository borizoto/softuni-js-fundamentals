function arrayRotation(arr, rotations) {
    for (let rotationCounter = 1; rotationCounter <= rotations; rotationCounter++) {
        let firstEl = arr[0];
        arr.shift();
        arr.push(firstEl);
    }
    console.log(arr.join(" "));
}