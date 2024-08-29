function spiceMustFlow(currYield) {
    let dayCounter = 0;
    let spicesExtracted = 0;

    while (currYield >= 100) {
        spicesExtracted += currYield;

        currYield -= 10;
        spicesExtracted -= 26;
        dayCounter++;
    }

    if (spicesExtracted >= 26) {
        spicesExtracted -= 26;
    }

    console.log(dayCounter);
    console.log(spicesExtracted);
}