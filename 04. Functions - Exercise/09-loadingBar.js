function loadingBar(percents) {
    function bar(x) {
        x = x / 10;
        let barPercents = "";
        let barDots = "";
        for (let i = 1; i <= x; i++) {
            barPercents += '%';
        }
        for (let j = x + 1; j <= 10; j++) {
            barDots += '.';
        }
        return `[${barPercents}${barDots}]`;
    }

    if (percents === 100) {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    } else {
        console.log(`${percents}%`, bar(percents));
        console.log(`Still loading...`);
    } 
}