import { MoviesController } from "./controllers/movies-controller";
import { FiltersController } from "./controllers/filters-controller";

const movies = new MoviesController();
const filters = new FiltersController();

filters.init();
movies.init();

// function getButton() {
//   // eslint-disable-next-line no-alert
//   const getId = +prompt("Укажите ID объекта", "");

//   // eslint-disable-next-line no-console
//   console.log(movies.get(getId));
// }

// document.querySelector("#edit-button").addEventListener("click", getButton);
