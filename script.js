const numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Последний просмотреный фильм?', ''),
      b = prompt('Ваша оценка?', ''),
      c = prompt('Последний просмотреный фильм?', ''),
      d = prompt('Ваша оценка?', '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);