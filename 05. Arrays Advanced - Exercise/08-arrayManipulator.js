function arrayManipulator(numsArr, commandsArr) {
    for (const commandString of commandsArr) {
        let tokens = commandString.split(" ");
        const curCommand = tokens.shift();

        if (curCommand === "add") {
            const index = Number(tokens.shift());
            const element = Number(tokens.shift());
            numsArr.splice(index, 0, element);
        } else if (curCommand === "addMany") {
            let index = Number(tokens.shift());

            for (let curNumToAdd of tokens) {
                curNumToAdd = Number(curNumToAdd);
                numsArr.splice(index, 0, curNumToAdd);
                index++;
            }
        } else if (curCommand === "contains") {
            const element = Number(tokens.shift());
            const indexOfEl = numsArr.indexOf(element);
            if (numsArr.includes(element)) {
                console.log(indexOfEl);
            } else {
                console.log(-1);
            }
        } else if (curCommand === "remove") {
            const index = Number(tokens.shift());
            numsArr.splice(index, 1);
        } else if (curCommand === "shift") {
            const rotations = Number(tokens.shift());
            for (let rotationCounter = 0; rotationCounter < rotations; rotationCounter++) {
                const lastEl = numsArr.shift();
                numsArr.push(lastEl);
            }
        } else if (curCommand === "sumPairs") {
            const newArr = [];
            for (let i = 0; i < numsArr.length; i += 2) {
                let firstEl = numsArr[i];
                let secondtEl = numsArr[i + 1];

                if (secondtEl !== undefined) {
                    newArr.push(firstEl + secondtEl);
                } else {
                    newArr.push(firstEl);
                }
            }
            numsArr = newArr;
        } else if (curCommand === "print") {
            console.log(`[ ${numsArr.join(", ")} ]`);
        }
    }
}