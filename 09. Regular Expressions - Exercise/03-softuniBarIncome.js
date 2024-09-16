function softuniBarIncome(arr) {
    arr.pop();
    const pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.\d]*(?<price>\d+\.?\d+)\$/;
    let totalIncome = 0;

    for (const string of arr) {
        if (string.match(pattern)) {

            const matches = string.match(pattern);
            const customer = matches.groups.customer;
            const product = matches.groups.product;
            const count = Number(matches.groups.count);
            const price = Number(matches.groups.price);
            const customerCurTotal = count * price;

            console.log(`${customer}: ${product} - ${customerCurTotal.toFixed(2)}`);

            totalIncome += customerCurTotal;
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}