function piccolo1(arr) {
    const parking = new Set();
    for (const string of arr) {
        const [command, carNumber] = string.split(", ");
        
        if (command === "IN") {
                parking.add(carNumber);
        } else if (command === "OUT") {
            parking.delete(carNumber);
        }
    }
    
    const parkingArr = [...parking];
    
    if (parkingArr.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        parkingArr.sort((a, b) => a.localeCompare(b));
        console.log(`${parkingArr.join("\n")}`);
    }
}



function piccolo2(arr) {
    const parking = {};

    for (const string of arr) {
        const [command, carNumber] = string.split(", ");
        if (command === "IN") {
            if (!parking.hasOwnProperty(carNumber)) {
                parking[carNumber] = carNumber;
            }
        } else if (command === "OUT") {
                delete parking[carNumber];
        }
    }
    
    const entries = Object.entries(parking);

    if (entries.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        entries.sort((arr1, arr2) => arr1[1].localeCompare(arr2[1]))
        for (const [cars, carNumber] of entries) {
            console.log(carNumber);
        }
    }
}