/* eslint-disable no-console */
import { getMovies } from "../components/data";

class MoviesModel {
  constructor(movies) {
    this.movies = movies;
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

    newMovies.forEach((movie) => {
      // eslint-disable-next-line no-param-reassign
      movie.id = this.movies.length;

      this.movies.push(movie);
    });
  }

  getAll() {
    return this.movies;
  }

  get(id) {
    const movieById = this.movies.find((movie) => movie.id === id);

    if (!movieById) {
      // eslint-disable-next-line no-alert
      alert("Фильма с таким ID не существует!");
    }

    return movieById;
  }
}

export {
  MoviesModel,
};