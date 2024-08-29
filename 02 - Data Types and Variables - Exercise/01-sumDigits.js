function sumDigits(number) {
    
    let sum = 0;
    let numberToStr = String(number);

    for (let index = 0; index < numberToStr.length; index++) {
        sum += Number(numberToStr[index]);
    }
    console.log(sum);
}