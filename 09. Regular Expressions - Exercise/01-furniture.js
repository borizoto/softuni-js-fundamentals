function furniture(arr) {
    arr.pop();
    const pattern = />>(?<furniture>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<qty>\d+)/;
    const items = [];
    let totalPrice = 0;

    for (const string of arr) {
        if (string.match(pattern)) {

            const matches = string.match(pattern);
            const furniture = matches.groups.furniture;
            const price = Number(matches.groups.price);
            const qty = Number(matches.groups.qty);

            items.push(furniture)
            const furniturePrice = price * qty;
            totalPrice += furniturePrice;
        }
    }

    console.log('Bought furniture: ');
    items.forEach(item => console.log(item));
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}