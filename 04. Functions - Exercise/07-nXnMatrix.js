function nXnMatrix1(num) { // Solution1
    let string1 = "";
    for (let rows = 1; rows <= num; rows++) {
        string1 += `${num} `; 
    }
    for (let rows = 1; rows <= num; rows++) {
        console.log(string1);
    }
}


function nXnMatrix2(num) { // Solution 2

    function rows(x) {
        let string1 = "";
        for (let rows = 1; rows <= num; rows++) {
            string1 += `${num} `; 
        }
        return string1;
    }
   
    for (let cols = 1; cols <= num; cols++) {
        console.log(rows(num));
    }
}