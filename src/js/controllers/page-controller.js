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
    this.addMovie = document.querySelector("#add-div");

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
      this.moviesController.pick(() => {
        this.currentViewMode = "list";
        this.toggleModeView(this.currentViewMode);
      });
    });

    this.filtersController.setAddHandler(() => {
      this.addMovie.innerHTML = this.getEditForm({});

      this.addSaveEventListener("add-save");

      this.currentViewMode = "add";
      this.toggleModeView();
    });

    this.moviesController.moviesView.setMovieLinkHandler((event) => {
      this._movieRender(event);
    });
  }

  addSaveEventListener(id) {
    document.querySelector(`#${id}`).addEventListener("click", (evt) => {
      console.log(evt.target);
    });
  }

  getEditForm(movie) {
    const datalist = `<datalist id="datalist">
                        <option value="Подписка">
                        <option value="Платно">
                        <option value="Бесплатно">
                      </datalist>`;
    let popupAttributes = 'class="popuptext" id="myPopup"';
    let actionTitle = "Редактировать";
    let action = "edit";

    if (!movie.id) {
      const emptyObjectKeys = Object.keys(this.moviesController.moviesModel.movies[0]);
      for (const keyIndex in emptyObjectKeys) {
        const key = emptyObjectKeys[keyIndex];
        movie[key] = "";
      }

      popupAttributes = 'id="addPopup"';
      actionTitle = "Добавить новый фильм";
      action = "add";
    }

    let priceText = movie.price;
    let editPriceClass = '';

    if (!isNaN(movie.price.slice(0, movie.price.indexOf("$")))) {
      priceText = "Платно";
      editPriceClass = "";
    }

    return `<div class="popup">${actionTitle}
              ${datalist}        
                <div ${popupAttributes}>
                  <input type="hidden" id="${action}-movie-id" value="${movie.id}"/>
                  <p><label for="${action}-movie-name">Название:</label>
                  <input type="text" name="${action}-name" id="${action}-movie-name" value="${movie.name}" size="30"/>
                  </p>
                  <p id="p-price">
                  <label>Цена</label>
                  <input type="text" id="${action}-movie-price-text" list="datalist" value="${priceText}"/>
                  <input type="text" name="${action}-price+" id="${action}-movie-price" maxlength="4" size="1" ${editPriceClass} value="${movie.price}" placeholder="$"/>
                  </p>
                  <p><label for="${action}-movie-duration">Продолжительность, минут(ы):</label>
                  <input type="text" name="${action}-duration" id="${action}-movie-duration" value="${movie.duration}" maxlength="3" size="1"/>
                  </p>
                  <p><label for="${action}-movie-genre">Жанры:</label>
                  <input type="text" name="${action}-genre" id="${action}-movie-genre" value="${movie.genre}" size="30"/>
                  </p>
                  <p><label for="${action}-movie-description">Описание:</label>                
                  <textarea name="${action}-description" id="${action}-movie-description" class="description-textarea">${movie.description}</textarea>
                  </p>
                  <p><label for="${action}-movie-languages">Языки:</label>
                  <input type="text" name="${action}-languages" id="${action}-movie-languages" value="${movie.languages}" size="30"/>
                  </p>
                  <p><label for="${action}-movie-videoQuality">Качество видео:</label>
                  <input type="text" name="${action}-videoQuality" id="${action}-movie-videoQuality" value="${movie.videoQuality}" size="10"/>
                  </p>
                  <input type="button" value="Сохранить" style="margin: 20px" id="${action}-save" class="save"/>
                </div>
            </div>`;
  }

  _movieControllerRender() {
    const recommendedMovies = this._getRecommendedMovies(
      this.movieController.movieModel.movie.recommended,
    );

    this.movieController.movieView.getEditForm(this.getEditForm);

    this.movieController.movieView._getRecommendedMovies(recommendedMovies);

    this.movieController.movieView.render("#one-movie");

    document.querySelector("#movie-to-list").addEventListener("click", () => {
      this.currentViewMode = "list";
      this.toggleModeView(this.currentViewMode);
    });

    this.movieController.movieView.setMovieLinkHandler((evt) => {
      this._movieRender(evt);
    });

    this.movieController.movieView.setEditHandler(() => {
      const popup = document.querySelector("#myPopup");
      popup.classList.add("show");

      this.movieController.movieView.setPriceDatalistHandler((evt) => {
        if (evt.target.value === "Платно") {
          const editPrice = document.querySelector("#edit-movie-price");

          editPrice.classList.remove("hidden");
          editPrice.value = "";
        }
      });
    });

    this.addSaveEventListener("edit-save");
  }

  _getRecommendedMovies(recommendedList) {
    const recommendedArray = this
      .moviesController
      .moviesModel
      .movies
      .filter((movie) => recommendedList.includes(movie.id));

    return recommendedArray;
  }

  toggleModeView() {
    if (this.currentViewMode === "single") {
      this.show(this.oneMovie);
      this.hide(this.movieList);
      this.hide(this.addMovie);
    } else if (this.currentViewMode === "add") {
      this.hide(this.oneMovie);
      this.hide(this.movieList);
      this.show(this.addMovie);
    } else {
      this.hide(this.oneMovie);
      this.show(this.movieList);
      this.hide(this.addMovie);
    }
  }

  _movieRender(event) {
    this.currentViewMode = "single";

    if (event.target.closest(".title-link")) {
      const { movieId } = event.target.closest(".title-link").dataset;

      if (this.idCache !== movieId) {
        this.idCache = movieId;

        this.moviesController.moviesModel.get(movieId, (movie) => {
          this.movieController = new MovieController(movie);
          this._movieControllerRender();
        });
      }

      this.toggleModeView(this.currentViewMode);
    }
  }
}

export { PageController };