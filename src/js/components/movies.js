/* eslint-disable no-console */
import {
  movieGenres,
  movieLaguages,
  moviePrice,
  getMovies,
} from "./data";

import { Component } from "../utils";

class Movies extends Component {
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

  // eslint-disable-next-line class-methods-use-this
  _getMovieRow(movie) {
    if (movie === null) {
      return "<p>Фильма с таким ID нет!</p>";
    }
    let row = "";

    row = `<div class="movie-from-list">
             <p>Название:
               <a
                 class="title-link"
                 href="movie.html?id=${movie.id}" 
                 title="Перейти к фильму">
                 ${movie.name}                
               </a>
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

  getAll() {
    this.render("movie-list");
  }

  get(id) {
    let movieById = null;

    for (const movieIndex in this.movies) {
      if (this.movies[movieIndex].id === id) {
        movieById = this.movies[movieIndex];
      }
    }

    const row = this._getMovieRow(movieById);

    document.querySelector("#movie-list").innerHTML = row;
  }
}

export {
  Movies,
};