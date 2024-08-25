function pyramidDjoser(base, increment) {

    let stoneBlocks = 0;
    let marbleBlocks = 0;
    let lapisBlocks = 0;
    let goldBlocks = 0;
    let floorCount = 0;

    for (let floors = base; floors >= 1; floors -= 2) {
        floorCount++;
        let reducedFloors = floors - 2;
        if (reducedFloors <= 0) {
            reducedFloors = 0;
        }
        let stoneBlocksPerIncrement = reducedFloors ** 2;
        stoneBlocks += stoneBlocksPerIncrement * increment;
        if (floors === 2 || floors === 1) {
            goldBlocks = floors * floors * increment;
        } else if (floorCount % 5 === 0) {
            let lapisBlocksPerIncrement = floors * floors - stoneBlocksPerIncrement;
            lapisBlocks += lapisBlocksPerIncrement * increment;
        } else {
            let marbleBlocksPerincrement = floors * floors - stoneBlocksPerIncrement;
            marbleBlocks += marbleBlocksPerincrement * increment; 
        }
    }
    floorCount *= increment;
    console.log(`Stone required: ${Math.ceil(stoneBlocks)}`);
    console.log(`Marble required: ${Math.ceil(marbleBlocks)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisBlocks)}`);
    console.log(`Gold required: ${Math.ceil(goldBlocks)}`);
    console.log(`Final pyramid height: ${Math.floor(floorCount)}`);
}