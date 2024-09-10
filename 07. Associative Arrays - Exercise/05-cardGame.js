function cardGame(arr) {
    const power = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
    const type = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };

    const persons = {};
    for (const string of arr) {
        let [name, cards] = string.split(": ");
        cards = cards.split(", ");

        if (!persons.hasOwnProperty(name)) {
            persons[name] = cards;
        } else {
            persons[name].push(...cards);
        }
    }

    for (const name in persons) {
        let cards = persons[name];

        cards = new Set(cards);
        let points = 0;
        cards.forEach(card => {
            if (card.length === 2) {
                points += power[card[0]] * type[card[1]];
            }
            else {
                points += power[card[0] + card[1]] * type[card[2]];
            }
        });

        persons[name] = points;
    }

    for (const name in persons) {
        console.log(`${name}: ${persons[name]}`);
    }
}