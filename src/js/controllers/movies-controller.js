import { MoviesModel } from "../models/movies-model";
import { MoviesView } from "../views/movies-view";
import { getMovies } from "../components/data";

class MoviesController {
  constructor() {
    this.model = new MoviesModel(getMovies(3));
    this.view = new MoviesView(this.model.movies);
  }

  init() {
    this.view.render("movie-list");

    this._setHandlers();
  }

  _setHandlers() {
    this.view.setDeleteHandler(() => {
      const deleteIndex = +prompt("Укажите ID удаляемого объекта", "");

      this.delete(deleteIndex);
    });
  }

  delete(id) {
    this.model.delete(id);

    this.view.render("movie-list");
  }
}

export { MoviesController };