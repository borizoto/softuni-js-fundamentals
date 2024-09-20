function destinationMapper(arr) {
    const pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    const text = arr.shift();

    const destinations = []
    let travelPoints = 0;

    let matches = pattern.exec(text);

    while (matches) {
        const location = matches.groups.destination;
        const length = location.length;
        travelPoints += length;

        destinations.push(location)

        matches = pattern.exec(text);
    }
    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}