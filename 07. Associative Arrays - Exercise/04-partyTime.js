function partyTime(coming) {
    const invitedList = coming.splice(0, coming.indexOf("PARTY"));
    coming.shift();
    const vip = [];
    const reg = [];
    
    for (const guest of invitedList) {
        const firstChar = guest.charAt(0);
        if (!coming.includes(guest)) {
            if (firstChar >= '0' && firstChar <= '9') {
                vip.push(guest);
            } else {
                reg.push(guest);
            }
        } else {
            coming.splice(coming.indexOf(guest), 1)
        }
    }
    console.log(vip.length + reg.length);
    for (const guest of vip) {
        console.log(guest);
    }
    for (const guest of reg) {
        console.log(guest);
    }
}