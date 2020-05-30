import {
  movieGenres,
  movieLaguages,
  moviePrice,
} from "../common/data";

import { AbstractComponent } from "../common/abstract-component";

class MoviesView extends AbstractComponent {
  constructor(movies) {
    super();
    this.movies = movies;
  }

  _isPropSelect(movieId, property) {
    const selectedValue = document.querySelector(`#${property}-sel`).value;

    if (selectedValue === "select-title") return true;

    const movie = this.movies[movieId];

    switch (property) {
      case "genre":
        return movie.genre.includes(movieGenres[selectedValue]);
      case "price":
        return movie.price.includes(moviePrice[selectedValue]);
      case "languages":
        return movie.languages.includes(movieLaguages[selectedValue]);
      default:
        return false;
    }
  }

  _getMovieRow(movie) {
    if (movie === null) {
      return "<p>Фильма с таким ID нет!</p>";
    }

    if (!isNaN(movie.price)) {
      movie.price = `${movie.price}$`;
    }

    let row = "";

    row = `<div class="movie-from-list">
             <p>Название:
                <input type="button" 
                       class="title-link title-chk" 
                       data-movie-id="${movie.id}"
                       id="movie-${movie.id}" 
                       value="${movie.name}" />
             </p>
             <p>Цена: ${movie.price}</p>
             <p>Рейтинг: ${movie.rating}</p>
             <p>Продолжительность: ${movie.duration} мин.</p>
             <p>Жанры: ${movie.genre}</p>
           </div>`;

    return row;
  }

  getTemplate() {
    let col = "";

    for (const movieId in this.movies) {
      if (
        this._isPropSelect(movieId, "genre")
        && this._isPropSelect(movieId, "price")
        && this._isPropSelect(movieId, "languages")
      ) {
        const selectedMovie = this.movies[movieId];

        const row = this._getMovieRow(selectedMovie);

        col += row;
      }
    }

    return col;
  }

  setMovieLinkHandler(handler) {
    const button = document.querySelector("#movie-list");

    button.addEventListener("click", handler);
  }
}

export { MoviesView };