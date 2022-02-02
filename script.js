'use strict';

let numberOfFilms;
function start() {
    numberOfFilms = prompt('Сколько фильмов вы смотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы смотрели?', '');
    }
}
start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function privatMovieDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}
privatMovieDB(personalMovieDb.privat);

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const   a = prompt('Последний просмотреный фильм?', ''),
                b = prompt('Ваша оценка?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDb.movies[a] = b;
        } else {
            i--;
        }  
    }
}
rememberMyFilms();

function personalKinoLevl() {
    if (personalMovieDb.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (10 <= personalMovieDb.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDb.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }
}
personalKinoLevl();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const a = prompt(`Ваш любимый жанр под номером ${i}`);

        if (a != null && a != '' && isNaN(a)) {
            personalMovieDb.genres[i-1] = a;
        } else {
            i--;
        }  
    }
}
writeYourGenres();