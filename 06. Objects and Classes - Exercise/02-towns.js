function towns(arr) {
    for (const townDataStr of arr) {
       const tokens = townDataStr.split(" | ");
       const town = tokens.shift();
       const latitude = Number(tokens.shift());
       const longitude = Number(tokens.shift());
       const townObj = { town: town, latitude: latitude.toFixed(2), longitude: longitude.toFixed(2) };
       console.log(townObj);
    }
   }