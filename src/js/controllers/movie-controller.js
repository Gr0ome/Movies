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

  setEditHandler(handler) {
    document.querySelector("#edit-save").addEventListener("click", handler);
  }
}

export { MovieController };