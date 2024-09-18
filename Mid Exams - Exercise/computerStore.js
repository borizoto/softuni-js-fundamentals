function computerStore(arr) {
    let pricesWithoutTax = 0;
    let command = "";
    for (const curCommand of arr) {

        if (curCommand === "special" || curCommand === "regular") {
            command = curCommand;
            break;
        }
        let curPrice = Number(curCommand);

        if (curPrice < 0) {
            console.log(`Invalid price!`);
            continue;
        }

        pricesWithoutTax += curPrice;
    }

    let taxes = pricesWithoutTax * 0.2;
    let priceWithTaxes = pricesWithoutTax + taxes;

    if (command === "special") {
        priceWithTaxes *= 0.9;
    }

    if (priceWithTaxes === 0) {
        console.log(`Invalid order!`);
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${pricesWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${priceWithTaxes.toFixed(2)}$`);
    }
}