function theLift(arr) {
    let peopleWaiting = Number(arr.shift());
    let liftWagons = arr.shift().split(' ').map(Number);
    let occupiedSeats = 0;
    for (const curWagonSeats of liftWagons) {
        occupiedSeats += curWagonSeats;
    }
    let freeCapacity = liftWagons.length * 4 - occupiedSeats;

    for (let index = 0; index < liftWagons.length; index++) {

        while (liftWagons[index] < 4) {
            liftWagons[index]++;
            peopleWaiting--;
            freeCapacity--;

            if (peopleWaiting === 0) {
                break;
            }
        }

        if (freeCapacity === 0) {
            break;
        } else if (peopleWaiting === 0) {
            console.log(`The lift has empty spots!`);
            break;
        }
    }

    if (peopleWaiting !== 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
    }

    console.log(liftWagons.join(" "))
}