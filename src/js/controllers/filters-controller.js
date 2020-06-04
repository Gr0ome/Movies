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

  setDeleteHandler(cb) {
    this.filtersView.setHandler("delete", () => {
      cb();
    });
  }

  setPickHandler(cb) {
    this.filtersView.setHandler("pick", () => {
      cb();
    });
  }

  setAddHandler(cb) {
    this.filtersView.setHandler("add", () => {
      cb();
    })
  }
}

export { FiltersController };