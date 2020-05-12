const newFilters = {
  types:{
    buttons: {
      addButton: {
        name: "add",
        class: "select-button",
        id: "add-button",
      },
      deleteButton: {
        name: "delete",
        class: "select-button",
        id: "delete-button",
      }, 
      submitButton: {
        name: "submit",
        class: "select-button",
        id: "submit-button",
      },
      editbutton: {
        name: "edit",
        class: "select-button",
        id: "edit-button",
      }  
    },
    selects: {    
      genreSelect: {
        dataArray: movieGenres,
        name: "genre-select",
        class: "select",
        id: "genre-sel",
      },
      languagesSelect: {
        dataArray: movieLaguages,
        name: "languages-select",
        class: "select",
        id: "languages-sel",
      },
      priceSelect: {
        dataArray: moviePrice,
        name: "price-select",
        class: "select",
        id: "price-sel",
      },    
    },
  },  
  additionalData :{
    selectsNames : ["Жанр","Язык","Цена"],
    buttonsNames : ["Добавить","Удалить","Выбрать","Корректировать"],
  },  
};

class Filters {
  constructor(filters) {
    this.filters = filters;
  }  

  _genresOptionFill() {
    for (const selectName in this.filters.types.selects) {
      const select = this.filters.types.selects[selectName];
      const domElement = document.querySelector(`#${select.id}`);

      for (const el in select.dataArray) {
        domElement.options[domElement.options.length] = new Option(
          select.dataArray[el],
          el,
        );
      }      
    }
  }

  getTemplate() {
    let selectHTML = "";
    const selectsToArray = Object.keys(this.filters.types.selects);
    const buttonsToArray = Object.keys(this.filters.types.buttons);

    for (const selectName in this.filters.types.selects) {
      const select = this.filters.types.selects[selectName];
      const selectIndex = selectsToArray.indexOf(selectName);

      const selectHead = 
      `<select class="${select.class}" 
               name="${select.name}" 
               id="${select.id}">
       <option class="select-title" value="select-title">
          ${this.filters.additionalData.selectsNames[selectIndex]}
        </option>
      </select>`;

      selectHTML += selectHead;      
    }

    for (const buttonName in this.filters.types.buttons) {
      const button = this.filters.types.buttons[buttonName];
      const buttonIndex = buttonsToArray.indexOf(buttonName);

      const buttonHTML = 
      `<button class="${button.class}" id="${button.id}">
        ${this.filters.additionalData.buttonsNames[buttonIndex]}
      </button>`;

      selectHTML += buttonHTML;      
    }
    
    return selectHTML;
  }

  render(containerId) {
    document.querySelector(`#${containerId}`).innerHTML = this.getTemplate();
  }
}

const allFilters = new Filters(newFilters);



allFilters.render("filters-div");
allFilters._genresOptionFill();

