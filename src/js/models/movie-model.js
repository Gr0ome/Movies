import { Api } from "../common/api";

class MovieModel {
  constructor(movie) {
    this.movie = movie;
    this.api = new Api("http://localhost:4433/api/movies/");
  }

  edit(id, data, cb) {
    this.api.update(id, data, () => {
      cb();
    });
  }
}

export { MovieModel };