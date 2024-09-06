function buildAWall(sections) {
    let unfinishedSections = sections.filter(number => number < 30).length;
    sections = sections.filter(number => number < 30);
    let dailyConcreteArr = [];

    while (unfinishedSections > 0) {
        let dailyUseConcrete = 0;
        for (let curSection = 0; curSection < sections.length; curSection++) {
            if (sections[curSection] !== 30) {
                sections[curSection]++;
                dailyUseConcrete += 195;

                if (sections[curSection] === 30) {
                    unfinishedSections--;
                }
            }
        }
        dailyConcreteArr.push(dailyUseConcrete);
    }

    let sum = 0;
    for (const iterator of dailyConcreteArr) {
        sum += iterator;
    }
    sum *= 1900;

    console.log(dailyConcreteArr.join(", "));
    console.log(`${sum} pesos`);
}