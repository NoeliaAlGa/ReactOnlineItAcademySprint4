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
  const filmScore = array.map(currentMovie => currentMovie.score);
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
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
