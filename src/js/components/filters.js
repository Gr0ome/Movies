import { movieGenres, movieLaguages, moviePrice } from "./data";
import { Component } from "../utils";

const FILTER = {
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

class Filters extends Component {
  constructor(filters) {
    super();
    this.filters = filters;
  }

  selectsOptionFill() {
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
    const selectsHtml = this.getSelectsTemplate();
    const buttonsHTML = this.getButtonsTemplate();

    const filtersHTML = selectsHtml + buttonsHTML;

    return filtersHTML;
  }

  getSelectsTemplate() {
    let selectHTML = "<div class=\"selects-div\">";

    const selectsToArray = Object.keys(this.filters.types.selects);

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

    return selectHTML;
  }

  getButtonsTemplate() {
    let buttonsHTML = "<div class=\"buttons-div\">";
    const buttonsToArray = Object.keys(this.filters.types.buttons);

    for (const buttonName in this.filters.types.buttons) {
      const button = this.filters.types.buttons[buttonName];
      const buttonIndex = buttonsToArray.indexOf(buttonName);

      const buttonHead = `<p><button class="${button.class}" id="${button.id}">
        ${this.filters.additionalData.buttonsNames[buttonIndex]}
      </button></p>`;

      buttonsHTML += buttonHead;
    }

    buttonsHTML += "</div>";

    return buttonsHTML;
  }
}

export { Filters, FILTER };
