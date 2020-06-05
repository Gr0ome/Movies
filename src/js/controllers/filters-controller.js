import { FiltersModel } from "../models/filters-model";
import { movieGenres, movieLaguages, moviePrice } from "../common/data";
import { FiltersView } from "../views/filters-view";

class FiltersController {
  constructor() {
    this.filtersModel = new FiltersModel(movieGenres, movieLaguages, moviePrice);
    this.filtersView = new FiltersView(this.filtersModel);
  }

  init() {
    this.filtersView.render("#filters-div");
    this.filtersView._selectsOptionFill();
  }

  setButtonHandler(action, cb) {
    this.filtersView.setHandler(`${action}`, () => {
      cb();
    });
  }
}

export { FiltersController };