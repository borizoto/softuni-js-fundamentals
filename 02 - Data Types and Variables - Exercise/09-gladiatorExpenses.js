function gladiatorExpenses(lostFigtsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;
     let brokenShieldsCount = 0;
    for (let lossesCounter = 1; lossesCounter <= lostFigtsCount; lossesCounter++) {
         if (lossesCounter % 2 === 0) {
             totalExpenses += helmetPrice;
         }
 
         if (lossesCounter % 3 === 0) {
             totalExpenses += swordPrice;
         }
 
         if (lossesCounter % 2 === 0 && lossesCounter % 3 === 0) {
             brokenShieldsCount++;
             totalExpenses += shieldPrice;
             
             if (brokenShieldsCount % 2 === 0) {
                 totalExpenses += armorPrice;
             }
         }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
 }