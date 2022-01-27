const numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const   a = prompt('Последний просмотреный фильм?', ''),
            b = prompt('Ваша оценка?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDb.movies[a] = b;
    } else {
        i--;
    }  
}

if (personalMovieDb.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (10 <= personalMovieDb.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDb.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Ошибка');
}
console.log(personalMovieDb);