function worldTour(arr) {
    let stops = arr.shift();
    let string = arr.shift();
    while (string !== "Travel") {
        const tokens = string.split(":");
        const command = tokens.shift();

        if (command === "Add Stop") {
            const index = Number(tokens.shift());
            const string = tokens.shift();

            if (index !== -1 && index <= stops.length) {
                const firstPart = stops.substring(0, index);
                const secondPart = stops.substring(index);
                stops = firstPart + string + secondPart;
            }
            console.log(stops);

        } else if (command === "Remove Stop") {
            const startIndex = Number(tokens.shift());
            const endIndex = Number(tokens.shift());

            if (startIndex !== -1 && startIndex < stops.length && endIndex !== -1 && endIndex < stops.length) {
                const subStr = stops.substring(startIndex, endIndex + 1);
                stops = stops.split(subStr).join("");
            }
            console.log(stops);

        } else if (command === "Switch") {
            const oldString = tokens.shift();
            const newString = tokens.shift();

            stops = stops.split(oldString).join(newString);
            console.log(stops);
        }

        string = arr.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);

}