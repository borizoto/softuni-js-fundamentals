class Storage {
    constructor(inputCapacity) {
        this.capacity = inputCapacity;
        this.storage = [];
    }

    get totalCost() {
        let totalCost = 0;
        this.storage.forEach(curObj => {
            totalCost += curObj.quantity * curObj.price;
        });
        return totalCost;
    }

    addProduct(curProduct) {
        this.storage.push(curProduct);
        this.capacity -= curProduct.quantity;
    }

    getProducts() {
        const jsonArr = [];
        for (const curObj of this.storage) {
            jsonArr.push(JSON.stringify(curObj));
        }
        return jsonArr.join("\n");
    }
}