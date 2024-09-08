function employees1(arr) {

    const newArr = [];
    for (const name of arr) {
        const personalNumber = name.length;
        const person = { name: name, personalNumber: personalNumber };
        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNumber}`);
    }
}


function employees2(arr) {
    class Employee {

        constructor(name) {
            this.name = name;
            this.personalNumber = name.length;
        }

    }
    for (const name of arr) {
        const person = new Employee(name);
        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNumber}`);
    }
}