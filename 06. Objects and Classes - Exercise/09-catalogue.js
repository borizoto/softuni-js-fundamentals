function catalogue(arr) {
    const listArr = [];

    for (const string of arr) {
        const [item, price] = string.split(" : ");

        const obj = { name: item, price: price };
        listArr.push(obj);
    }

    listArr.sort((obj1, obj2) => obj1.name.localeCompare(obj2.name));

    let capitalsArr = listArr.map(curObj => curObj = curObj.name[0]);
    capitalsArr = capitalsArr.filter((value, index) => capitalsArr.indexOf(value) === index);

    for (const curChar of capitalsArr) {
        console.log(curChar);

        listArr.forEach(curObj => {
            const firstChar = curObj.name[0];
            if (curChar === firstChar) {
                console.log(`  ${curObj.name}: ${curObj.price}`);
            }
        });
    }
}