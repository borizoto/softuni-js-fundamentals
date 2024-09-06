function gladiatorInventory(arr) {
    let inventory = arr.shift().split(" ");
    
    for (let commandStr of arr) {
        let tokens = commandStr.split(" ");
        const curCommand = tokens.shift();
        let item = tokens.shift();

        if (curCommand === "Buy") {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (curCommand === "Trash") {
            const itemIdx = inventory.indexOf(item);
            if (inventory.includes(item)) {
                inventory.splice(itemIdx, 1);
            }
        } else if (curCommand === "Repair") {
            const itemIdx = inventory.indexOf(item);
            if (inventory.includes(item)) {
                inventory.splice(itemIdx, 1);
                inventory.push(item);
            }
        } else if (curCommand === "Upgrade") {
            let upgradeTokens = item.split("-");
            item = upgradeTokens.shift();
            const upgrade = upgradeTokens.shift();
            if (inventory.includes(item)) {
                const itemIdx = inventory.indexOf(item);
                inventory.splice(itemIdx + 1, 0, `${item}:${upgrade}`);
            }
        }
    }
    console.log(inventory.join(" "));
}
