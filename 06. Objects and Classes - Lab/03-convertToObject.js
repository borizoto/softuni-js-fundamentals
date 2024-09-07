function convertToObject1(stringObj) {
    const obj = JSON.parse(string);
    
    for (const key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }
}

function convertToObject2(stringObj) {
    const object = JSON.parse(stringObj);
    const tuples = Object.entries(object);
    
    for (const property of tuples) {
        console.log(`${property[0]}: ${property[1]}`);
    }
}