function registration(arr) {
    let username = arr.shift();

    let string = arr.shift();
    while (string !== "Registration") {
        const tokens = string.split(" ");
        const command = tokens.shift();

        if (command === "Letters") {
            const casing = tokens.shift();
            if (casing === "Lower") {
                username = username.toLowerCase();
            } else if (casing === "Upper") {
                username = username.toUpperCase();
            }
            console.log(username);

        } else if (command === "Reverse") {
            const startIndex = Number(tokens.shift());
            const endIndex = Number(tokens.shift());

            if ((startIndex >= 0 && startIndex < username.length) && (endIndex >= 0 && endIndex < username.length)) {
                let subStr = username.substring(startIndex, endIndex + 1);
                subStr = subStr.split("").reverse().join("");
                console.log(subStr);
            }

        } else if (command === "Substring") {
            const subStr = tokens.shift();
            const indexOfSubStr = username.indexOf(subStr); // if it is -1 the username does not include this substring, else it has it

            if (indexOfSubStr === -1) {
                console.log(`The username ${username} doesn't contain ${subStr}.`);
            } else {
                username = username.split(subStr).join("");
                console.log(username);
            }

        } else if (command === "Replace") {
            const char = tokens.shift();
            username = username.split(char).join("-");
            console.log(username);

        } else if (command === "IsValid") {
            const char = tokens.shift();
            const indexOfChar = username.indexOf(char);

            if (indexOfChar === -1) {
                console.log(`${char} must be contained in your username.`);
            } else {
                console.log("Valid username.");
            }
        }

        string = arr.shift();
    }
}