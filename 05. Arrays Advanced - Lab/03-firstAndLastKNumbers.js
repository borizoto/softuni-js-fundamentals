function firstAndLastKNumbers(arr) {
    const k = arr.shift();
    const newArr1 = arr.slice(0, k);
    const newArr2 = arr.slice(-k);
    console.log(newArr1.join(" "));
    console.log(newArr2.join(" "));
}