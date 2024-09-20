function pirates(arr) {

    let string = arr.shift();
    const citiesObj = {};

    while (string !== "Sail") {
        const tokens = string.split("||");
        const cityName = tokens.shift();
        const cityPopulation = Number(tokens.shift());
        const gold = Number(tokens.shift());

        if (!citiesObj.hasOwnProperty(cityName)) {
            citiesObj[cityName] = { population: cityPopulation, gold: gold };
        } else {
            citiesObj[cityName].population += cityPopulation;
            citiesObj[cityName].gold += gold;
        }

        string = arr.shift();
    }

    string = arr.shift();

    while (string !== "End") {

        const tokens = string.split("=>");
        const command = tokens.shift();

        if (command === "Plunder") {
            let [cityName, population, gold] = tokens;
            population = Number(population);
            gold = Number(gold);

            console.log(`${cityName} plundered! ${gold} gold stolen, ${population} citizens killed.`);
            citiesObj[cityName].population -= population;
            citiesObj[cityName].gold -= gold;

            if (citiesObj[cityName].population <= 0 || citiesObj[cityName].gold <= 0) {
                console.log(`${cityName} has been wiped off the map!`);
                delete citiesObj[cityName];
            }

        } else if (command === "Prosper") {
            let [cityName, gold] = tokens;
            gold = Number(gold);

            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                citiesObj[cityName].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${cityName} now has ${citiesObj[cityName].gold} gold.`);
            }
        }

        string = arr.shift();
    }

    const entries = Object.entries(citiesObj);

    if (entries.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        for (const [city, info] of entries) {
            console.log(`${city} -> Population: ${info.population} citizens, Gold: ${info.gold} kg`);
        }
    }
}