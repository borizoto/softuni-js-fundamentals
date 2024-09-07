function cats(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name; // == Cat.name = name;
            this.age = age; // == Cat.age = age;
        }

        action() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        };
    }

    for (const string of arr) {
        const [name, age] = string.split(" ");

        const curCat = new Cat(name, age);
        curCat.action();
    }
}