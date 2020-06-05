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

    this.setHandlers();
  }

  setHandlers() {
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
      this.addMovie.innerHTML = this.getAddForm();

      document.querySelector(`#add-save`).addEventListener("click", () => {
        const data = this.getDataForApi("add");
        console.log(data);

        this.moviesController.moviesModel.create(data, () => {
          this.currentViewMode = "list";
          this.toggleModeView(this.currentViewMode);
        });
      });

      this.currentViewMode = "add";
      this.toggleModeView();
    });

    this.moviesController.moviesView.setMovieLinkHandler((event) => {
      this._movieRender(event);
    });
  }

  getDataForApi(action) {
    const id = this.moviesController.moviesModel.movies.length + 1;
    const data = { id };

    const emptyObjectKeys = Object.keys(this.moviesController.moviesModel.movies[0]);

    for (const keyIndex in emptyObjectKeys) {
      const key = emptyObjectKeys[keyIndex];

      const element = document.querySelector(`#${action}-movie-${key}`);

      const numberTypeKeys = ["id", "rating", "duration"];
      // const charTypeKeys = ["name", "description", "videoQuality"];
      const arrayTypeKeys = ["genre", "languages"];

      if (element) {
        let elementValue = element.value;

        if (key === "price" && elementValue === "Платно") {
          elementValue = Number(document.querySelector(`#${action}-movie-price-money`).value);
        }

        if (numberTypeKeys.includes(key)) {
          elementValue = +elementValue;
        } else if (arrayTypeKeys.includes(key)) {
          elementValue = elementValue.split(",");
        }

        data[key] = elementValue;
      }
    }

    return data;
  }

  getAddForm() {
    const movie = {};
    const datalist = `<datalist id="add-datalist">
                        <option value="Подписка">
                        <option value="Платно">
                        <option value="Бесплатно">
                      </datalist>`;

    const emptyObjectKeys = Object.keys(this.moviesController.moviesModel.movies[0]);

    for (const keyIndex in emptyObjectKeys) {
      const key = emptyObjectKeys[keyIndex];
      movie[key] = "";
    }

    let priceText = movie.price;
    let editPriceClass = '';

    if (!isNaN(movie.price.slice(0, movie.price.indexOf("$")))) {
      priceText = "Платно";
      editPriceClass = "";
    }

    return `<div class="popup">Добавить новый фильм
              ${datalist}        
                <div id="addPopup"
                  <p><label for="add-movie-name">Название:</label>
                  <input type="text" name="add-name" id="add-movie-name" value="${movie.name}" size="30"/>
                  </p>
                  <p id="p-price">
                  <label>Цена</label>
                  <input type="text" id="add-movie-price" list="add-datalist" value="${priceText}"/>
                  <input type="text" name="add-price" id="add-movie-price-money" maxlength="4" size="1" ${editPriceClass} value="${movie.price}" placeholder="$"/>
                  </p>
                  <p><label for="add-movie-duration">Продолжительность, минут(ы):</label>
                  <input type="text" name="add-duration" id="add-movie-duration" value="${movie.duration}" maxlength="3" size="1"/>
                  </p>
                  <p><label for="add-movie-genre">Жанры:</label>
                  <input type="text" name="add-genre" id="add-movie-genre" value="${movie.genre}" size="30"/>
                  </p>
                  <p><label for="add-movie-description">Описание:</label>                
                  <textarea name="add-description" id="add-movie-description" class="description-textarea">${movie.description}</textarea>
                  </p>
                  <p><label for="add-movie-languages">Языки:</label>
                  <input type="text" name="add-languages" id="add-movie-languages" value="${movie.languages}" size="30"/>
                  </p>
                  <p><label for="add-movie-videoQuality">Качество видео:</label>
                  <input type="text" name="add-videoQuality" id="add-movie-videoQuality" value="${movie.videoQuality}" size="10"/>
                  </p>
                  <input type="button" value="Сохранить" style="margin: 20px" id="add-save" class="save"/>
                </div>
            </div>`;
  }

  _movieControllerRender() {
    const recommendedMovies = this._getRecommendedMovies(
      this.movieController.movieModel.movie.recommended,
    );

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
      const popup = document.querySelector("#editPopup");
      popup.classList.add("show");

      this.movieController.movieView.setPriceDatalistHandler((evt) => {
        if (evt.target.value === "Платно") {
          const editPrice = document.querySelector("#edit-movie-price");

          editPrice.classList.remove("hidden");
          editPrice.value = "";
        }
      });

      document.querySelector(`#edit-save`).addEventListener("click", () => {
        const id = document.querySelector("#edit-movie-id").value;
        const data = this.getDataForApi("edit");

        this.moviesController.edit(id, data);
      });
    });
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