import { Component } from "../components/utils";

class FiltersView extends Component {
  constructor(filters) {
    super();
    this.filters = filters;
    this.document = document;
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
    const selectsHtml = this._getSelectsTemplate();
    const buttonsHTML = this._getButtonsTemplate();

    const filtersHTML = selectsHtml + buttonsHTML;

    return filtersHTML;
  }

  _getSelectsTemplate() {
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

  _getButtonsTemplate() {
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

  setHandler(action, handler) {
    const button = this.document.querySelector(`#${action}-button`);

    button.addEventListener("click", handler);
  }
}

export { FiltersView };