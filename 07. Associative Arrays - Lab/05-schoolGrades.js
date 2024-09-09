function schoolGrades1(arr) { // Solution 1
    
    function avgGrade(arr) {
        let sum = 0;
        for (const curNum of arr) {
            sum += curNum
        }
        const avgGrade = sum / arr.length;
        return avgGrade.toFixed(2);
    }

    const students = {};

    for (const string of arr) {
        const elements = string.split(" ");
        const name = elements.shift();
        const grades = elements.map(Number);

        if (!students.hasOwnProperty(name)) {
            students[name] = grades;
        } else {
            students[name].push(...grades);
        }
    }

    const keys = Object.keys(students);
    keys.sort((a, b) => a.localeCompare(b));

    for (const name of keys) {
        console.log(`${name}: ${avgGrade(students[name])}`);  
    }
}



function schoolGrades1(arr) { // Solution 2

    function avgGrade(arr) {
        let sum = 0;
        for (const curNum of arr) {
            sum += curNum
        }
        const avgGrade = sum / arr.length;
        return avgGrade.toFixed(2);
    }

    const students = new Map();

    for (const string of arr) {
        const elements = string.split(" ");
        const name = elements.shift();
        const grades = elements.map(Number);

        if (!students.has(name)) {
            students.set(name, grades)
        } else {
            students.get(name).push(...grades);
        }
    }

    const keys = [...students.keys()];
    keys.sort((a, b) => a.localeCompare(b));

    for (const name of keys) {
        console.log(`${name}: ${avgGrade(students.get(name))}`);  
    }
}