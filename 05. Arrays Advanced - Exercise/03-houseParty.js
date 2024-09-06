function houseParty(arr) {
    let guestList = [];
    for (let curGuest of arr) {
        let name = curGuest.split(" ").shift();
        if (curGuest.includes("is going")) {
            if (!guestList.includes(name)) {
                guestList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else if (curGuest.includes("is not going")) {
            if (guestList.includes(name)) {
                const nameToRemoveIndex = guestList.indexOf(name);
                guestList.splice(nameToRemoveIndex, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guestList.join('\n'));
}