function addressBook(arr) {
    const assocArr = {};

    for (const string of arr) {
        const [name, address] = string.split(":");

        assocArr[name] = address;
    }
    const entries = Object.entries(assocArr);
    entries.sort((arr1, arr2) => arr1[0].localeCompare(arr2[0]));
    for (const curArr of entries) {
        const [name, address] = curArr;
        console.log(`${name} -> ${address}`);

    }
}