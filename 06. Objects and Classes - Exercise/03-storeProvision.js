function storeProvision1(curStockArr, deliveryArr) { //Solution 1

    for (let index = 0; index < curStockArr.length; index++) {
        if (index % 2 !== 0) {
            curStockArr[index] = Number(curStockArr[index]);
        }
    }
    for (let index = 0; index < deliveryArr.length; index++) {
        if (index % 2 !== 0) {
            deliveryArr[index] = Number(deliveryArr[index]);
        }
    }


    for (let i = 0; i < deliveryArr.length; i += 2) {
        if (!curStockArr.includes(deliveryArr[i])) {
            curStockArr.push(deliveryArr[i]);
            curStockArr.push(deliveryArr[i + 1]);
        } else {
            const indexOfCurItem = curStockArr.indexOf(deliveryArr[i]);
            curStockArr[indexOfCurItem + 1] += deliveryArr[i + 1];
        }
    }

    let stockObj = {};

    for (let j = 0; j < curStockArr.length; j += 2) {
        const item = curStockArr[j];
        const stockOfItem = curStockArr[j + 1]

        stockObj = { item: item, stockQuantity: stockOfItem }
        console.log(`${stockObj.item} -> ${stockObj.stockQuantity}`);
    }

}



function storeProvision2(curStockArr, deliveryArr) { //Solution 2
    let currentStockObj = {};

    curStockArr.forEach((element, index) => {
        if (index % 2 == 0) { // means we get only items 
            if (!currentStockObj[element]) {
                currentStockObj[element] = Number(curStockArr[index + 1]);
            }
        }
    });

    deliveryArr.forEach((element, index) => {
        if (index % 2 == 0) {
            if (!currentStockObj[element]) {
                currentStockObj[element] = Number(deliveryArr[index + 1]);
            } else {
                currentStockObj[element] += Number(deliveryArr[index + 1]);
            }
        }
    });

    Object.keys(currentStockObj).forEach(product => console.log(`${product} -> ${currentStockObj[product]}`));
}




function storeProvision3(curStockArr, deliveryArr) { //Solution 3
    let currentStockObj = {};

    curStockArr.map((element, index) => {
        if (index % 2 == 0) { // means we get only items 
            if (!currentStockObj[element]) {
                currentStockObj[element] = Number(curStockArr[index + 1]);
            }
        }
    });

    deliveryArr.map((element, index) => {
        if (index % 2 == 0) {
            if (!currentStockObj[element]) {
                currentStockObj[element] = Number(deliveryArr[index + 1]);
            } else {
                currentStockObj[element] += Number(deliveryArr[index + 1]);
            }
        }
    });

    Object.keys(currentStockObj).forEach(product => console.log(`${product} -> ${currentStockObj[product]}`));
}