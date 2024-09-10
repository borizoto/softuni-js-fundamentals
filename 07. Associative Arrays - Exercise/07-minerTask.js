function aMinerTask(arr) {
    const resoursecObj = {};

    for (let i = 0; i < arr.length; i += 2) {
        const resourseName = arr[i];
        const resourseQty = Number(arr[i + 1]);

        if (!resoursecObj.hasOwnProperty(resourseName)) {
            resoursecObj[resourseName] = resourseQty;
        } else {
            resoursecObj[resourseName] += resourseQty;
        }
    }
    
    const entries = Object.entries(resoursecObj);

    for (const [name, qty] of entries) {
        console.log(`${name} -> ${qty}`);
    }
}