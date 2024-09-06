function bombNumbers(arr1, arr2) {
    const bomb = arr2[0];
    const powerOfExplosion = arr2[1];
    let sum = 0;

        while (arr1.includes(bomb)) {
            const bombIndex = arr1.indexOf(bomb);
            let elementsToRemove = powerOfExplosion * 2 + 1;
            let removalStart = bombIndex - powerOfExplosion;
            if (removalStart < 0) {
                elementsToRemove+=removalStart;
                removalStart = 0;
            }
            arr1.splice(removalStart, elementsToRemove);
        } 
    for (const iterator of arr1) {
        sum += iterator;
    }
    console.log(sum);
}