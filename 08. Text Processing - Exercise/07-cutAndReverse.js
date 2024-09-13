function cutAndReverse(string) {
    const middle = string.length / 2;
    const firstHalf = string.substring(0, middle).split("").reverse().join("");
    const secondHalf = string.substring(middle).split("").reverse().join("");

    console.log(firstHalf);
    console.log(secondHalf);
}