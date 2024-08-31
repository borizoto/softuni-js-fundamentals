function reverseInPlace1(array) {
    
    for (let index = array.length - 1; index >= 0; index--) {
        array.push(array[index]);
    }

    array = array.slice(array.length / 2);
    array = array.join(" ");
    console.log(array);
}



function reverseInPlace2(arr) {
    arr.reverse();
    arr.join(" ")
    console.log(arr.join(" "));
}