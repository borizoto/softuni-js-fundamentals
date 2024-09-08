class Vehicle {
    constructor(curType, curModel, curParts, curFuel) {
        this.type = curType;
        this.model = curModel;

        curParts.quality = curParts.engine * curParts.power;
        this.parts = curParts;
        this.fuel = curFuel;
    }

    drive(fuelLoss) {
        this.fuel = this.fuel - fuelLoss;
    }
}
