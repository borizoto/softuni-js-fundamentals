function treasureHunt(arr) {
    const lootChest = arr.shift().split('|');

    for (let commands of arr) {
        commands = commands.split(' ');
        const curCommand = commands.shift();

        if (curCommand === "Yohoho!") {
            break;
        } else if (curCommand === "Loot") {
            const items = commands;
            for (const curItem of items) {
                if (!lootChest.includes(curItem)) {
                    lootChest.unshift(curItem);
                }
            }
        } else if (curCommand === "Drop") {
            const index = Number(commands.shift());
            if (lootChest[index]) {
                const droppedItem = lootChest.splice(index, 1).shift();
                lootChest.push(droppedItem);
            }
        } else if (curCommand === "Steal") {
            const stealCount = Number(commands.shift());
            const stolenItems = lootChest.splice(-stealCount);
            console.log(stolenItems.join(", "));
        }
    }
    if (lootChest.length === 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        let avgGain = 0;
        for (const iterator of lootChest) {
            avgGain += Number(iterator.length);
        }
        avgGain /= lootChest.length;
        console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
    }
}