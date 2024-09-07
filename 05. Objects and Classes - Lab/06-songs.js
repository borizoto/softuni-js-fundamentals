function songs(arr) {

    class Song {
        constructor (typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const lastParam = arr.pop();

    for (let i = 1; i < arr.length; i++) {
        const [typeList, name, time] = arr[i].split("_");
    
        if (lastParam === typeList) {
            const song = new Song (typeList, name, time);
            console.log(song.name);
        } else if (lastParam === "all") {
            console.log(name);
        }
    }
}