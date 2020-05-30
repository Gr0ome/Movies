/* eslint-disable no-console */
import { Api } from "../common/api";

class MoviesModel {
  constructor() {
    this.api = new Api("http://localhost:4433/api/movies/");
  }

  edit(id, data) {
    const index = this.movies.findIndex((movie) => movie.id === id);

    this.movies[index] = Object.assign(this.movies[index], data);
  }

  remove(id, cb) {
    if (this.movies.find((movie) => movie.id === +id)) {
      this.api.remove(id, (movies) => {
        this.movies = movies;
        cb();
      });
      return `Фильм с ID ${id} удалён!`;
    }

    return `Нет фильма с ID "${id}"!`;
  }

  getAll(cb) {
    this.api.getAll((movies) => {
      this.movies = movies;
      cb();
    });
  }

  get(id) {
    this.api.get(id, (movie) => {
      console.log(movie);
    });
  }
}

export { MoviesModel };