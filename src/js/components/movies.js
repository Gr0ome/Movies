/* eslint-disable no-console */
import {
  movieGenres,
  movieLaguages,
  moviePrice,
  getMovies,
} from "./data";

import { AllElements } from "../utils";

class Movies extends AllElements {
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

  getTemplate() {
    let col = "";

    for (const movieId in this.movies) {
      if (
        this._isPropSelect(movieId, "genre")
        && this._isPropSelect(movieId, "price")
        && this._isPropSelect(movieId, "languages")
      ) {
        const selectedMovie = this.movies[movieId];

        let row = "";

        row = `<div class="movie-from-list">
                 <p>Название:
                   <a
                     class="title-link"
                     href="movie.html?id=${selectedMovie.id}" 
                     title="Перейти к фильму">
                     ${selectedMovie.name}                
                   </a>
                 </p>
                 <p>Цена: ${selectedMovie.price}</p>
                 <p>Рейтинг: ${selectedMovie.rating}</p>
                 <p>Продолжительность: ${selectedMovie.duration} мин.</p>
                 <p>Жанры: ${selectedMovie.genre}</p>
               </div>`;

        col += row;
      }
    }

    return col;
  }

  edit(id, data) {
    const index = this.movies.findIndex((movie) => movie.id === id);

    this.movies[index] = Object.assign(this.movies[index], data);
  }

  delete(id) {
    const index = this.movies.findIndex((movie) => movie.id === id);

    this.movies.splice(index, 1);
  }

  addRandomMovies(quantity) {
    const newMovies = getMovies(quantity);

    for (const movieIndex in newMovies) {
      const movie = newMovies[movieIndex];

      movie.id = this.movies.length;

      this.movies.push(movie);
    }
  }
}

export {
  Movies,
};