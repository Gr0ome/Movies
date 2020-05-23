/* eslint-disable no-console */
import { MoviesController } from "./movies-controller";
// import { MovieController } from "./movie-controller";
import { FiltersController } from "./filters-controller";

class PageController {
  constructor() {
    this.moviesController = new MoviesController();
    this.filtersController = new FiltersController();

    this.moviesController.moviesView.setMovieLinkHandler(this._one1Movie);
  }

  init() {
    this.filtersController.init();
    this.moviesController.init();
  }

  _oneMovie(event) {
    const classListValueArray = event.target.classList.value.split(" ");
    const movieId = event.target.id.replace("movie-", "");

    if (classListValueArray.includes("title-link")) {
      this.oneMovie = document.querySelector("#one-movie");
      const movieList = document.querySelector("#movie-list");

      this.oneMovie.innerHTML = `<p>${movieId}</p>`;

      this.oneMovie.classList.remove("hidden");
      movieList.classList.add("hidden");
    }
  }
}

export { PageController };