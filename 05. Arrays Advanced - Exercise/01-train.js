function train(arr) {
    let wagons = arr.shift().split(" ").map(a => Number(a));
    const maxCapacity = Number(arr.shift());

    for (let curComand of arr) {
        if (curComand.includes("Add")) {
            curComand = curComand.split(" ");
            const amount = Number(curComand[1]);
            wagons.push(amount);
        } else {
            amount = Number(curComand);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + amount <= maxCapacity) {
                    wagons[i] += amount;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}