import { MovieModel } from "../models/movie-model";
import { MovieView } from "../views/movie-view";

class MovieController {
  constructor(movie) {
    this.movieModel = new MovieModel(movie);
    this.movieView = new MovieView(this.movieModel);
  }

  init() {
    this.movieView.render("#one-movie");
  }

  edit() {
    this.movieView.render("#one-movie");
  }
}

export { MovieController };