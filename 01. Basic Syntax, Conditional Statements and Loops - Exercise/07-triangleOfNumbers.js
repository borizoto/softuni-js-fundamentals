function triangleOfNumbers(number) {
    let currentNumber = 1;
    
    for (let row = 1; row <= number; row++) {
        let string = "";
        for (let currRow = 1; currRow <= row; currRow++) {
            string += `${currentNumber} `;  
        }
        currentNumber++;
        console.log(string);
    }
}
