class FiltersModel {
  constructor(movieGenres, movieLaguages, moviePrice) {
    this.filters = {
      types: {
        buttons: {
          pick: {
            name: "pick",
            class: "filter-button",
            id: "pick-button",
          },
          add: {
            name: "add",
            class: "filter-button",
            id: "add-button",
          },
          delete: {
            name: "delete",
            class: "filter-button",
            id: "delete-button",
          },
          restart: {
            name: "restart",
            class: "filter-button",
            id: "restart-button",
          }
        },
        selects: {
          genre: {
            dataArray: movieGenres,
            name: "genre-select",
            class: "filter-select",
            id: "genre-sel",
          },
          languages: {
            dataArray: movieLaguages,
            name: "languages-select",
            class: "filter-select",
            id: "languages-sel",
          },
          price: {
            dataArray: moviePrice,
            name: "price-select",
            class: "filter-select",
            id: "price-sel",
          },
        },
      },
      additionalData: {
        selectsNames: ["Жанр", "Язык", "Цена"],
        buttonsNames: ["Выбрать", "Добавить", "Удалить", "Рестарт"],
      },
    };
  }
}

export { FiltersModel };