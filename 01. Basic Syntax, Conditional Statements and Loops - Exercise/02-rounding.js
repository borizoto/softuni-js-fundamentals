function rounding(number, percision) {
    
    if (percision > 15) {
        percision = 15;
    }

    number = number.toFixed(percision);
    number = parseFloat(number);
    console.log(number);
}