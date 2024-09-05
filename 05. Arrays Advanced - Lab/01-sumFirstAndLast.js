function sumFirstAndLast(arr) {
    const firstEl = Number(arr.shift());
    const lastEl = Number(arr.pop());
    console.log(firstEl + lastEl);
}