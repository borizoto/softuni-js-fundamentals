function reverseArray(num, arr) {
    let reversed = [];
    for (let i = num - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    console.log(reversed.join(" "));
}