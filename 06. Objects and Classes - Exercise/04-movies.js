function movies(arr) {
    const movieArr = [];
    for (const string of arr) {
        if (string.includes("addMovie")) {
            const movie = string.split("addMovie ")
            movieArr.push({ name: movie[1] });
        } else if (string.includes("directedBy")) {
            const [movie, director] = string.split(" directedBy ");
            movieArr.forEach(movieObj => {
                if (movieObj.name === movie) {
                    movieObj.director = director;
                }
            });
        } else if (string.includes("onDate")) {
            const [movie, date] = string.split(" onDate ");
            movieArr.forEach(movieObj => {
                if (movieObj.name === movie) {
                    movieObj.date = date;
                }
            });
        }
    }

    for (const curObj of movieArr) {
        if (curObj.name && curObj.date && curObj.director) {
            const MOVIE = JSON.stringify(curObj);
            console.log(MOVIE);
        }
    }
}