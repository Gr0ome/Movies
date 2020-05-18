import { FiltersModel } from "../models/filters-model";
import { FILTER } from "../components/data";
import { FiltersView } from "../views/filters-view";

class FiltersController {
  constructor() {
    this.model = new FiltersModel(FILTER);
    this.view = new FiltersView(this.model);
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

export { FiltersController };