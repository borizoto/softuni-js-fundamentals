function adAstra(arr) {
    const pattern = /([#|])(?<itemName>[A-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    const string = arr.shift();
    const daysArr = [];
    let totalCalories = 0;

    let matches = pattern.exec(string);
    
    while (matches) {
        const itemName = matches.groups.itemName;
        const expDate = matches.groups.expDate;
        const calories = Number(matches.groups.calories);
        
        daysArr.push(`Item: ${itemName}, Best before: ${expDate}, Nutrition: ${calories}`)
        totalCalories += calories

        matches = pattern.exec(string);
    }

    const daysWeCanLast = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${daysWeCanLast} days!`);
    console.log(daysArr.join("\n"));
}