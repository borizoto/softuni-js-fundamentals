function guineaPig(arr) {
    let foodQuantity = Number(arr.shift()) * 1000;
    let hayQuantity = Number(arr.shift()) * 1000;
    let coverQuantity = Number(arr.shift()) * 1000;
    const pigWeight = Number(arr.shift()) * 1000;


    for (let curDay = 1; curDay <= 30; curDay++) {
        foodQuantity -= 300;

        if (curDay % 2 === 0) {
            let hayDiff = foodQuantity * 0.05;
            hayQuantity -= hayDiff;
        }

        if (curDay % 3 === 0) {
            let coverDiff = pigWeight / 3;
            coverQuantity -= coverDiff;
        }

        if (foodQuantity <= 0 || hayQuantity <= 0 || coverQuantity <= 0) {
            console.log(`Merry must go to the pet store!`);
            return;
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(foodQuantity / 1000).toFixed(2)}, Hay: ${(hayQuantity / 1000).toFixed(2)}, Cover: ${(coverQuantity / 1000).toFixed(2)}.`);
}