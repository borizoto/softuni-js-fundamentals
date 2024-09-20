function passwordReset(arr) {
    let passString = arr.shift();

    let string = arr.shift();
    while (string !== "Done") {
        const tokens = string.split(" ");
        const command = tokens.shift();

        if (command === "TakeOdd") {
            passString = passString.split("");
            passString = passString.filter((element, index) => index % 2 !== 0).join("");
            console.log(passString);

        } else if (command === "Cut") {
            const index = Number(tokens.shift());
            const length = Number(tokens.shift());
            const partToRemove = passString.substring(index, index + length);
            passString = passString.replace(partToRemove, "");
            console.log(passString);

        } else if (command === "Substitute") {
            const [toReplace, replacement] = tokens;

            const indexOfFirstOccurance = passString.indexOf(toReplace);

            if (indexOfFirstOccurance === -1) {
                console.log("Nothing to replace!");
            } else {
                passString = passString.split(toReplace).join(replacement);
                console.log(passString);
            }
        }

        string = arr.shift();
    }
    console.log(`Your password is: ${passString}`);

}