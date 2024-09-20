function bakeryShop(arr) {
    const foodsObj = {};
    let string = arr.shift();
    let soldCount = 0;

    while (string !== "Complete") {
        const tokens = string.split(" ");
        const command = tokens.shift();

        if (command == "Receive") {
            const quantity = Number(tokens.shift());
            const foodName = tokens.shift();

            if (quantity <= 0) {
                string = arr.shift();
                continue;
            }

            if (!foodsObj.hasOwnProperty(foodName)) {
                foodsObj[foodName] = quantity;
            } else {
                foodsObj[foodName] += quantity;
            }

        } else if (command == "Sell") {
            const quantity = Number(tokens.shift());
            const foodName = tokens.shift();

            if (!foodsObj.hasOwnProperty(foodName)) {
                console.log(`You do not have any ${foodName}.`);
            } else {
                if (quantity > foodsObj[foodName]) {
                    console.log(`There aren't enough ${foodName}. You sold the last ${foodsObj[foodName]} of them.`);
                    soldCount += foodsObj[foodName];
                    delete foodsObj[foodName];
                } else {
                    foodsObj[foodName] -= quantity;
                    soldCount += quantity;
                    console.log(`You sold ${quantity} ${foodName}.`);
                    if (foodsObj[foodName] === 0) {
                        delete foodsObj[foodName]
                    }
                }
            }
        }

        string = arr.shift();
    }

    const entries = Object.entries(foodsObj);

    for (const [foodName, qty] of entries) {
        console.log(`${foodName}: ${qty}`);
    }

    console.log(`All sold: ${soldCount} goods`);
}