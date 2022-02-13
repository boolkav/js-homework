"use strict";

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDb.count = prompt("Сколько фильмов вы смотрели?", "");
        while (personalMovieDb.count == "" || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
          personalMovieDb.count = prompt("Сколько фильмов вы смотрели?", "");
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Последний просмотреный фильм?", ""),
                b = prompt("Ваша оценка?", "");
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDb.movies[a] = b;
            } else {
                i--;
            }
        }
    },

    personalKinoLevl: function () {
        if (personalMovieDb.count < 10) {
            console.log("Просмотрено мало фильмов");
        } else if (10 <= personalMovieDb.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDb.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Ошибка");
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            const a = prompt(`Ваш любимый жанр под номером ${i}`);

            if (a != null && a != "" && isNaN(a)) {
                personalMovieDb.genres[i - 1] = a;
            } else {
                console.log('Ввели не корректные данные');
                i--;
            }
        }

        personalMovieDb.genres.forEach((item, i) => {
            console.log(`Любимый жанр номер ${i+1} - это ${item}`);
        });
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDb.privat == false) {
            personalMovieDb.privat = true;
        } else {
            personalMovieDb.privat = false;
        }
    }
};

//personalMovieDb.start();
//personalMovieDb.showMyDB(personalMovieDb.privat);
//personalMovieDb.rememberMyFilms();
//personalMovieDb.personalKinoLevl();
//personalMovieDb.writeYourGenres();