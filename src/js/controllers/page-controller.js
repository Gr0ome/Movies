/* eslint-disable no-console */
import { MoviesController } from "./movies-controller";
import { MovieController } from "./movie-controller";
import { FiltersController } from "./filters-controller";
import { AbstractComponent } from "../common/abstract-component";

class PageController extends AbstractComponent {
  constructor() {
    super();
    this.moviesController = new MoviesController();
    this.filtersController = new FiltersController();

    this.oneMovie = document.querySelector("#one-movie");
    this.movieList = document.querySelector("#movie-list");

    this.currentViewMode = "list";
  }

  init() {
    this.filtersController.init();
    this.moviesController.init();

    this.filtersController.setDeleteHandler(() => {
      const deleteIndex = +prompt("Укажите ID удаляемого объекта", "");
      alert(this.moviesController.remove(deleteIndex));
    });

    this.filtersController.setPickHandler(() => {
      this.moviesController.pick();
    });

    this.moviesController.moviesView.setMovieLinkHandler((event) => {
      this._oneMovie(event);
    });
  }

  _oneMovieRender() {
    console.log(this.movieController);
    const recommendedTitles = this._getRecommendedMovies(
      this.movieController.movieModel.movie.recommended,
    );

    this.movieController.movieView._getRecommendedMovies(recommendedTitles);

    this.movieController.movieView.render("#one-movie");

    document.querySelector("#movie-to-list").addEventListener("click", () => {
      this.currentViewMode = "list";
      this.toggleModeView(this.currentViewMode);
    });
  }

  _getRecommendedMovies(recommendedList) {
    const recommendedArray = this
      .moviesController
      .moviesModel
      .movies
      .filter((movie) => recommendedList.includes(movie.id));

    const recommendedTitles = recommendedArray.map((movie) => movie.name);

    return recommendedTitles;
  }

  toggleModeView() {
    if (this.currentViewMode === "single") {
      this.show(this.oneMovie);
      this.hide(this.movieList);
    } else {
      this.hide(this.oneMovie);
      this.show(this.movieList);
    }
  }

  _oneMovie(event) {
    const { movieId } = event.target.dataset;
    this.currentViewMode = "single";

    if (event.target.classList.contains("title-link")) {
      if (this.idCache !== movieId) {
        this.idCache = movieId;

        this.moviesController.moviesModel.get(movieId, (movie) => {
          this.movieController = new MovieController(movie);
          this._oneMovieRender();
        });
      }

      this.toggleModeView(this.currentViewMode);
    }
  }
}

export { PageController };