function legendaryFarming(string) {
    const keyMaterialsObj = { shards: 0, fragments: 0, motes: 0 };
    const junkMaterialsObj = {};
    const rewards = { shards: "Shadowmourne", fragments: "Valanyr", motes: "Dragonwrath" };

    const arr = string.split(" ");
    for (let i = 0; i < arr.length; i += 2) {
        const qty = Number(arr[i]);
        const material = arr[i + 1].toLowerCase();

        if (material in keyMaterialsObj) {
            keyMaterialsObj[material] += qty;

            if (keyMaterialsObj[material] >= 250) {
                keyMaterialsObj[material] -= 250;

                const itemWon = rewards[material];
                console.log(`${itemWon} obtained!`);
                break;
            }
        } else if (material in junkMaterialsObj) {
            junkMaterialsObj[material] += qty;
        } else  {
            junkMaterialsObj[material] = qty;
        }
    }
    
    const keyMaterialsEntries = Object.entries(keyMaterialsObj);
    keyMaterialsEntries.sort((arr1, arr2) => arr2[1] - arr1[1] || arr1[0].localeCompare(arr2[0]));
    for (const [material, qty] of keyMaterialsEntries) {
        console.log(`${material}: ${qty}`);
    }

    const junkMaterialsEntries = Object.entries(junkMaterialsObj);
    junkMaterialsEntries.sort((arr1, arr2) => arr1[0].localeCompare(arr2[0]));
    for (const [material, qty] of junkMaterialsEntries) {
        console.log(`${material}: ${qty}`);
    }
}