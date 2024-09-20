function theImitationGame(arr) {
    let msg = arr.shift();
    let string = arr.shift();

    while (string !== "Decode") {
        const tokens = string.split("|");
        const command = tokens.shift();

        if (command === "Move") {

            const lettersCount = Number(tokens.shift());
            const subStr = msg.substring(0, lettersCount);
            msg = msg.split(subStr).join("") + subStr; 

        } else if (command === "Insert") {

            const indexToInsert = Number(tokens.shift());
            const charToAddAtIndex = tokens.shift();

            msg = msg.split("");
            msg.splice(indexToInsert, 0, charToAddAtIndex);
            msg = msg.join("");

        } else if (command === "ChangeAll") {
            const charTorReplace = tokens.shift();
            const replacement = tokens.shift();
            msg = msg.split(charTorReplace).join(replacement);
        }

        string = arr.shift();
    }
    console.log(`The decrypted message is: ${msg}`);
}