import { movieGenres, movieLaguages, moviePrice } from "./data";
import { AllElements } from "../utils";

const newFilters = {
  types: {
    buttons: {
      submitButton: {
        name: "submit",
        class: "filter-button",
        id: "submit-button",
      },
      addButton: {
        name: "add",
        class: "filter-button",
        id: "add-button",
      },
      deleteButton: {
        name: "delete",
        class: "filter-button",
        id: "delete-button",
      },
      editbutton: {
        name: "edit",
        class: "filter-button",
        id: "edit-button",
      },
    },
    selects: {
      genreSelect: {
        dataArray: movieGenres,
        name: "genre-select",
        class: "filter-select",
        id: "genre-sel",
      },
      languagesSelect: {
        dataArray: movieLaguages,
        name: "languages-select",
        class: "filter-select",
        id: "languages-sel",
      },
      priceSelect: {
        dataArray: moviePrice,
        name: "price-select",
        class: "filter-select",
        id: "price-sel",
      },
    },
  },
  additionalData: {
    selectsNames: ["Жанр", "Язык", "Цена"],
    buttonsNames: ["Выбрать", "Добавить", "Удалить", "Корректировать"],
  },
};

class Filters extends AllElements {
  constructor(filters) {
    super();
    this.filters = filters;
  }

  _selectsOptionFill() {
    for (const selectName in this.filters.types.selects) {
      const select = this.filters.types.selects[selectName];
      const domElement = document.querySelector(`#${select.id}`);

      for (const elementId in select.dataArray) {
        let optionValue = select.dataArray[elementId];
        if (optionValue === "$") {
          optionValue = "Платно";
        }
        domElement.options[domElement.options.length] = new Option(optionValue, elementId);
      }
    }
  }

  getTemplate() {
    let selectHTML = "<div class=\"selects-div\">";

    const selectsToArray = Object.keys(this.filters.types.selects);
    const buttonsToArray = Object.keys(this.filters.types.buttons);

    for (const selectName in this.filters.types.selects) {
      const select = this.filters.types.selects[selectName];
      const selectIndex = selectsToArray.indexOf(selectName);

      const selectHead = `<p><select class="${select.class}" 
               name="${select.name}" 
               id="${select.id}">
       <option class="select-title" value="select-title">
          ${this.filters.additionalData.selectsNames[selectIndex]}
        </option>
      </select></p>`;

      selectHTML += selectHead;
    }

    selectHTML += "</div>";
    selectHTML += "<div class=\"buttons-div\">";

    for (const buttonName in this.filters.types.buttons) {
      const button = this.filters.types.buttons[buttonName];
      const buttonIndex = buttonsToArray.indexOf(buttonName);

      const buttonHTML = `<p><button class="${button.class}" id="${button.id}">
        ${this.filters.additionalData.buttonsNames[buttonIndex]}
      </button></p>`;

      selectHTML += buttonHTML;
    }

    selectHTML += "</div>";

    return selectHTML;
  }
}

export { Filters, newFilters };
