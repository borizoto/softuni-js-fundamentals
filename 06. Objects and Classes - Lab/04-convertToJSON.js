function convertToJSON(name, lastName, hairColor) {
    let person = {name: name, lastName: lastName, hairColor: hairColor}

    person = JSON.stringify(person);
    console.log(person); 
}