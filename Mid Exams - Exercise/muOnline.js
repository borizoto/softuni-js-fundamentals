function muOnline(str) {
    let health = 100;
    let bitcoins = 0;
    let roomCounter = 0;
    str = str.split("|");

    for (const roomStr of str) {
        let curRoom = roomStr.split(" ");
        const action = curRoom.shift();
        let value = Number(curRoom.shift());
        roomCounter++;

        if (action === "potion") {
            if (health + value > 100) {
                value = 100 - health;
            }
            health += value;
            console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (action === "chest") {
            console.log(`You found ${value} bitcoins.`);
            bitcoins += value;
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${action}.`);
            } else {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${roomCounter}`);
                return;
            }
        } 
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}