function secretChat(arr) {
    let msg = arr.shift();

    let string = arr.shift();
    while (string !== "Reveal") {
        const tokens = string.split(":|:");
        const command = tokens.shift();

        if (command === "InsertSpace") {
            const index = Number(tokens.shift());
            const firstPart = msg.substring(0, index);
            const secondPart = msg.substring(index);
            msg = firstPart + " " + secondPart;
            console.log(msg);
        } else if (command === "Reverse") {
            const substring = tokens.shift();
            if (msg.includes(substring)) {
                const replacement = substring.split("").reverse().join("");
                msg = msg.split(substring).join("");
                msg += replacement;
                console.log(msg);
            } else {
                console.log("error");
            }
        } else if (command === "ChangeAll") {
            const [charToReplace, replacement] = tokens;
            msg = msg.split(charToReplace).join(replacement);
            console.log(msg);
        }
        string = arr.shift();
    }
    console.log(`You have a new text message: ${msg}`);
}