function city1(object) {
    const keys = Object.keys(object);

    for (const key of keys) {
        console.log(`${key} -> ${object[key]}`);
    }
}


function city2(obj) {
    const keys = Object.keys(obj);
    const curValue = Object.values(obj);

    for (let counter = 0; counter < keys.length; counter++) {
        console.log(`${keys[counter]} -> ${curValue[counter]}`);
    }
}