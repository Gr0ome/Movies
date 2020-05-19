import { MoviesModel } from "../models/movies-model";
import { MoviesView } from "../views/movies-view";
import { getMovies } from "../components/data";

class MoviesController {
  constructor() {
    this.moviesModel = new MoviesModel(getMovies(3));
    this.moviesView = new MoviesView(this.moviesModel.movies);
  }

  init() {
    this.moviesView.render("movie-list");
  }

  delete(id) {
    this.moviesModel.delete(id);

    this.moviesView.render("movie-list");
  }

  addMovies(quantity) {
    this.moviesModel.addRandomMovies(quantity);

    this.moviesView.render("movie-list");
  }

  submit() {
    this.moviesView.render("movie-list");
  }
}

export { MoviesController };