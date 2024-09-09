function meetings(arr) {
    const assocArr = {};
    
    for (const string of arr) {
        const [day, name] = string.split(" ");

        if (!assocArr.hasOwnProperty(day)) {
            assocArr[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const day in assocArr) {
        console.log(`${day} -> ${assocArr[day]}`);
    }
}