import { MoviesModel } from "../models/movies-model";
import { MoviesView } from "../views/movies-view";
import { getMovies } from "../components/data";

class MoviesController {
  constructor() {
    this.movieModel = new MoviesModel(getMovies(3));
    this.movieView = new MoviesView(this.movieModel.movies);
  }

  init() {
    this.movieView.render("movie-list");
  }

  delete(id) {
    this.movieModel.delete(id);

    this.movieView.render("movie-list");
  }

  addMovies(quantity) {
    this.movieModel.addRandomMovies(quantity);

    this.movieView.render("movie-list");
  }

  submit() {
    this.movieView.render("movie-list");
  }
}

export { MoviesController };