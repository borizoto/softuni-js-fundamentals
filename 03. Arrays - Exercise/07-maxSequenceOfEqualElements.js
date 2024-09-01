function maxSequenceOfEqualElements1(arr) {
    let repetitionCounter = 1;
    let maxRepetitions = 1;
    let sequenceArr = [];
    let sequenceNumber = 0;
    for (let curIndex = 1; curIndex < arr.length; curIndex++) {
        let curNum = arr[curIndex];
        let numLeft = arr[curIndex - 1];

        if (curNum === numLeft) {
            repetitionCounter++;
        } else if (curNum !== numLeft) {
            repetitionCounter = 1;
        } 
        
        if (repetitionCounter > maxRepetitions) {
            maxRepetitions = repetitionCounter;
            sequenceNumber = curNum;
        }
    }

    for (let counter = 1; counter <= maxRepetitions; counter++) {
        sequenceArr.push(sequenceNumber);  
    }
    console.log(sequenceArr.join(' '));
}



function maxSequenceOfEqualElements2(arr) {
    let repetitionCounter = 1;
    let maxRepetitions = 1;
    let sequenceString = "";
    let sequenceNumber = 0;
    for (let curIndex = 1; curIndex < arr.length; curIndex++) {
        let curNum = arr[curIndex];
        let numLeft = arr[curIndex - 1];

        if (curNum === numLeft) {
            repetitionCounter++;
        } else if (curNum !== numLeft) {
            repetitionCounter = 1;
        } 
        
        if (repetitionCounter > maxRepetitions) {
            maxRepetitions = repetitionCounter;
            sequenceNumber = curNum;
        }
    }

    for (let counter = 1; counter <= maxRepetitions; counter++) {
        sequenceString += `${sequenceNumber} `;  
    }
    console.log(sequenceString);
}