function printAndSum(start, end) {
    let sum = 0;
    let string = "";

    for (let currNumber = start; currNumber <= end; currNumber++) {
        sum += currNumber;
        string += `${currNumber} `
    }
    
    console.log(string);
    console.log(`Sum: ${sum}`);
}