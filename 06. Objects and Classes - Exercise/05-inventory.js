function inventory(arr) {

    const inventory = [];

    class Hero {
        constructor(heroName, heroLevel, items) {
            this.heroName = heroName;
            this.heroLevel = heroLevel;
            this.items = items;
        }
    }

    for (const string of arr) {
        let [heroName, heroLevel, items] = string.split(" / ");
        heroLevel = Number(heroLevel);
        const hero = new Hero(heroName, heroLevel, items);

        inventory.push(hero);
    }

    inventory.sort((obj1, obj2) => obj1.heroLevel - obj2.heroLevel)

    for (const curHero of inventory) {
        console.log(`Hero: ${curHero.heroName}`);
        console.log(`level => ${curHero.heroLevel}`);
        console.log(`items => ${curHero.items}`);
    }
}