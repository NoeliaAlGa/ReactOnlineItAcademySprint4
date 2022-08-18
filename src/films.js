const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(currentMovie => currentMovie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let filmsDirector = array.filter(currentMovie => currentMovie.director === director);
 return filmsDirector;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(array) {
  const filmScore = array
                    .map(currentMovie => currentMovie.score)
                    .filter(score => score !== '');
  const initialValue = 0;
  const sum = filmScore.reduce((score, currentScore) => score + currentScore , initialValue);
  const average = sum / filmScore.length;
  const averageRounded = Number.parseFloat(average.toFixed(2));
  return averageRounded;
}


function moviesAverageOfDirector(array, director) {
  const filmsDirector = getMoviesFromDirector(array, director);
  const average = moviesAverage(filmsDirector);
  return average;
}



// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const titleOrder = [...array]
                      .sort((nextFilm, currentFilm) => nextFilm.title.localeCompare(currentFilm.title))
                      .slice(0,20)
                      .map(film => film.title);
  return titleOrder;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const yearOrder = [...array]
                      .sort((nextFilm, currentFilm) => nextFilm.year - currentFilm.year 
                                                       || nextFilm.title.localeCompare(currentFilm.title));
  return yearOrder;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const categoryList = [...array].filter(currentMovie => currentMovie.genre.map(genre => genre) == category);
  const averageCategory = moviesAverage(categoryList);
  return averageCategory;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  debugger;
  const durationToMinutes = [...array]
                            .map((currentMovie) => {
                              let duracion = 0;
                              let horas = 0;
                              let minutos = 0;
                              let currentMovieCopi = {...currentMovie};

                              if(currentMovieCopi.duration.includes(" ")) {
                                const duracionDividido = currentMovieCopi.duration.trim().split(" ");
                                horas = Number(duracionDividido[0].replace("h", ""));
                                minutos = Number(duracionDividido[1].replace("min", ""));
                              }
                              else {
                                if(currentMovieCopi.duration.includes("h")) {
                                  horas = Number(currentMovieCopi.duration.replace("h", ""));
                                }
                                else {
                                  minutos = Number(currentMovieCopi.duration.replace("min", ""));
                                }
                              }
                              duracion = (horas * 60) + minutos;
                              currentMovieCopi.duration = duracion;
                              return currentMovieCopi;
                            });
  return durationToMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const filmsCurrentYearScore = [...array].filter((film) => film.year === year).map((film) => film.score);
  const maxScore = Math.max(...filmsCurrentYearScore);
  const bestFilmOfYear = [...array].filter((film) => film.score === maxScore);
  return bestFilmOfYear;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
