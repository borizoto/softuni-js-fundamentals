function matchDates(string) {
    const regex = /\b(?<day>\d{2})([.\/\-])(?<month>[A-Z][a-z]{2})(\2)(?<year>\d{4})/gm;
    const validNames = [];
    let validDate = null;

    while ((validDate = regex.exec(string)) !== null) {
        const day = validDate.groups['day'];
        const month = validDate.groups['month'];
        const year = validDate.groups['year'];
        validNames.push(validDate[0]);

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}