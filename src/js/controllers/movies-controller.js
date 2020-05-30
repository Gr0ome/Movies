import { MoviesModel } from "../models/movies-model";
import { MoviesView } from "../views/movies-view";

class MoviesController {
  constructor() {
    this.moviesModel = new MoviesModel();
    this.moviesView = new MoviesView(this.moviesModel.movies);
  }

  _moviesViewRewrite() {
    this.moviesView.movies = this.moviesModel.movies;
    this.moviesView.render("#movie-list");
  }

  init() {
    this.moviesModel.getAll(() => {
      this._moviesViewRewrite();
    });
  }

  remove(id) {
    return this.moviesModel.remove(id, () => {
      this._moviesViewRewrite();
    });
  }

  pick() {
    this.moviesView.render("#movie-list");
  }
}

export { MoviesController };