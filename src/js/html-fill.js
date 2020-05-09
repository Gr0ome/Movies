/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

import {
  movieGenres,
  movieLaguages,
  moviePrice,
  movies,
} from "./get-movies";

// Наполенине select'ов опциями
function setOptionsIntoSelects() {
  function genresOptionFill(property, propertyArray) {
    const querySelectorId = `#${property}Sel`;
    const selectElement = document.querySelector(querySelectorId);

    for (const prop in propertyArray) {
      selectElement.options[selectElement.options.length] = new Option(
        propertyArray[prop],
        prop,
      );
    }
  }
  genresOptionFill("genre", movieGenres);
  genresOptionFill("languages", movieLaguages);
  genresOptionFill("price", moviePrice);
  document.querySelector("#priceSel").options[2].text = "Платно";
}

function isPropSelect(movie, property) {
  const selectValue = document.querySelector(`#${property}Sel`).value;

  if (selectValue === "selectTitle") return true;

  switch (property) {
    case "genre":
      return movies[movie].genre.includes(movieGenres[selectValue]);
    case "price":
      return movies[movie].price.includes(moviePrice[selectValue]);
    case "languages":
      return movies[movie].languages.includes(movieLaguages[selectValue]);
    default:
      return false;
  }
}

function showMovieTitles() {
  const moviesList = document.querySelector("#movieList");
  let movieDiv = "";

  for (const movie in movies) {
    if (
      isPropSelect(movie, "genre")
      && isPropSelect(movie, "price")
      && isPropSelect(movie, "languages")
    ) {
      const selectedMovie = movies[movie];

      movieDiv += `<div class="movie-from-list">
      <span>
        Название:<a
                  class="title-link"
                  href="movie.html?id=${selectedMovie.id}" 
                  title="Перейти к фильму">
                  ${selectedMovie.name}                
                 </a>
      </span><br>
      <span>
        Цена: ${selectedMovie.price}
      </span><br>
      <span>
        Рейтинг: ${selectedMovie.rating}
      </span><br>
      <span>
        Продолжительность: ${selectedMovie.duration} мин.
      </span><br>
      <span>
        Жанры: ${selectedMovie.genre}
      </span>
      </div>`;
    }
  }

  moviesList.innerHTML = movieDiv;
  movieDiv = "";
}

export { showMovieTitles, setOptionsIntoSelects };
