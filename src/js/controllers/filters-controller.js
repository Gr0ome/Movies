import { FiltersModel } from "../models/filters-model";
import { FILTER } from "../components/data";
import { FiltersView } from "../views/filters-view";
import { MoviesController } from "./movies-controller";

class FiltersController extends MoviesController {
  constructor() {
    super();
    this.filtersModel = new FiltersModel(FILTER);
    this.filtersView = new FiltersView(FILTER);
  }

  init() {
    this.filtersView.render("filters-div");
    this.filtersView._selectsOptionFill();

    this._setHandlers();
  }

  _setHandlers() {
    this.filtersView.setHandler("delete", () => {
      const deleteIndex = +prompt("Укажите ID удаляемого объекта", "");

      this.delete(deleteIndex);
    });

    this.filtersView.setHandler("add", () => {
    // eslint-disable-next-line no-alert
      const addQuantity = +prompt("Укажите сколько объектов добавить", "0");

      if (addQuantity > 0) {
        this.addMovies(addQuantity);
      }
    });

    this.filtersView.setHandler("submit", () => {
      this.submit();
    });
  }
}

export { FiltersController };