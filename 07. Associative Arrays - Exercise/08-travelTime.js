function travelTime(arr) {
    const obj = {};

    for (let string of arr) {
        const arr = string.split(" > ");
        const country = arr[0];
        const town = arr[1];
        const price = Number(arr[2]);

        if (!obj.hasOwnProperty(country)) {
            obj[country] = {};
        }

        if (!obj[country].hasOwnProperty(town)) {
            obj[country][town] = price;
        }

        const curPrice = obj[country][town];

        if (price < curPrice) {
            obj[country][town] = price;
        } 
    }

    const entries = Object.entries(obj);
    entries.sort((arr1, arr2) => arr1[0].localeCompare(arr2[0]));

    for (const [country, curObj] of entries) {
        let str = "";
        const curObjEntries = Object.entries(curObj);
        curObjEntries.sort((arr1, arr2) => arr1[1] - arr2[1]);
        for (const [curTown, price] of curObjEntries) {
            str += ` ${curTown} -> ${price}`;
        }

        console.log(`${country} ->${str}`);
    }
}