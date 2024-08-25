function bitcoinMining(input) {
    let goldMined = 0;
    let moneyFromGold = 0;
    let bitcoinCounter = 0;
    let daysPassed = 0;
    let firstBoughtDay = 0;

    for (let dayCounter = 0; dayCounter < input.length; dayCounter++) {
        daysPassed++;
        goldMined = input[dayCounter];

        if (daysPassed % 3 === 0) {
            goldMined *= 0.7;
        }

        moneyFromGold += goldMined * 67.51;

        while (moneyFromGold > 11949.16) { // we buy bitcoins here
            bitcoinCounter++;
            if (bitcoinCounter === 1) {
                firstBoughtDay = daysPassed;
            }
            moneyFromGold -= 11949.16;
        }
        
    }
    console.log(`Bought bitcoins: ${bitcoinCounter}`);
    if (bitcoinCounter > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBoughtDay}`);
    }
    console.log(`Left money: ${moneyFromGold.toFixed(2)} lv.`);
}