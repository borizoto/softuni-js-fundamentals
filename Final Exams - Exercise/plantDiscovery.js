function plantDiscovery(arr) {
    const counter = Number(arr.shift());
    const plantsObj = {};

    for (let i = 0; i < counter; i++) {
        const string = arr.shift().split("<->")
        const plant = string.shift();
        const rarity = Number(string.shift());

        plantsObj[plant] = { rarity: rarity, ratings: [] };
    }

    let string = arr.shift();

    while (string !== "Exhibition") {

        if (string.includes("Rate:")) {
            string = string.split("Rate: ").join("");
            let [plant, rating] = string.split(" - ");
            rating = Number(rating);
            if (!plantsObj[plant]) {
                console.log("error");
            } else {
                plantsObj[plant].ratings.push(rating);
            }

        } else if (string.includes("Update:")) {
            string = string.split("Update: ").join("");
            let [plant, newRarity] = string.split(" - ");
            if (!plantsObj[plant]) {
                console.log("error");
            } else {
                plantsObj[plant].rarity = newRarity;
            }

        } else if (string.includes("Reset:")) {
            string = string.split("Reset: ").join("");
            let plant = string;
            if (!plantsObj[plant]) {
                console.log("error");
            } else {
                // while (plantsObj[plant].ratings.length > 0) {
                //     plantsObj[plant].ratings.pop();
                // }

                plantsObj[plant].ratings.length = 0;

                plantsObj[plant].ratings.push(0);
            }
        }
        string = arr.shift();

    }
    const entries = Object.entries(plantsObj);

    console.log("Plants for the exhibition:");

    for (const [plant, object] of entries) {
        for (const element of object.ratings) {
            if (element === 0) {
                object.ratings.splice(object.ratings.indexOf(element), 1);
            }
        }
        let ratingLength = object.ratings.length;

        if (ratingLength === 0) {
            const rating = 0;
            console.log(`- ${plant}; Rarity: ${object.rarity}; Rating: ${rating.toFixed(2)}`);
        } else {
            const rating = object.ratings.reduce((acc, curValue) => acc + curValue);
            const avgRating = rating / ratingLength;

            console.log(`- ${plant}; Rarity: ${object.rarity}; Rating: ${avgRating.toFixed(2)}`);
        }
    }
}