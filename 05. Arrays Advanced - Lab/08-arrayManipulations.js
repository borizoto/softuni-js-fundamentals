function arrayManipulations(arr) {

    const numbersArrAsStr = arr[0].split(" ");
    const arrCommands = arr.slice(1);
    let arrToManipulate = [];
    for (const curNum of numbersArrAsStr) {
        arrToManipulate.push(Number(curNum));
    }

    for (const curString of arrCommands) {
        const elementsOfString = curString.split(" ");
        const command = elementsOfString[0];
        if (command === "Add") {
            const value = Number(elementsOfString[1]);
            arrToManipulate.push(value);
        } else if (command === "Remove") {
            const value = Number(elementsOfString[1]);
            arrToManipulate = arrToManipulate.filter(a => a !== value);
        } else if (command === "RemoveAt") {
            const index = Number(elementsOfString[1]);
            arrToManipulate.splice(index, 1)
        } else if (command === "Insert") {
            const param1 = Number(elementsOfString[1]);
            const param2 = Number(elementsOfString[2]);
            arrToManipulate.splice(param2, 0, param1);
        }
    }
    console.log(arrToManipulate.join(" "));
}