import { Api } from "../common/api";

class MoviesModel {
  constructor() {
    this.api = new Api("http://localhost:4433/api/movies/");
  }

  edit(id, data, cb) {
    this.api.update(id, data, () => {
      cb();
    });
  }

  create(data, cb) {
    this.api.create(data, (movies) => {
      this.movies = movies;
      cb();
    });
  }

  restart() {
    this.api.restart((text) => {
      alert(text);
      location.reload();
    });
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

  get(id, cb) {
    this.api.get(id, (movie) => {
      cb(movie);
    });
  }
}

export { MoviesModel };