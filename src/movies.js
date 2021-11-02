// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrMov) {
  return arrMov.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrMovDram) {
return arrMovDram.filter(mov => mov.director === 'Steven Spielberg' && mov.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray == '') {
    return 0
  }
  const averageMovies = moviesArray.reduce((acum, valorMov) => {
    if (!valorMov.score) {
      return acum += 0
    }
    return acum + valorMov.score
  }, 0) / moviesArray.length
  return Number(averageMovies.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrMovDramaScore) {
  const allMoviesDrama = arrMovDramaScore.filter(movie => {
    return movie.genre.includes('Drama')
  })
  if(allMoviesDrama.length === 0){
    return 0
  }
  let scoreAvre = allMoviesDrama.reduce((accum, mov1) => {
    return accum + mov1.score
  }, 0) / allMoviesDrama .length
  return Number(scoreAvre.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrMovies) {
  const newArrayMovies = arrMovies.map(movie => movie)
  const orderYear = newArrayMovies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year
    } else if (a.year === b.year) {
      return a.title > b.title ? 1 : -1
    }
  })
  return orderYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrMov) {
  return arrMov.map(movie => movie.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
