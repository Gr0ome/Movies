import { MoviesController } from "./controllers/movies-controller";
import { FiltersController } from "./controllers/filters-controller";

const movies = new MoviesController();
const filters = new FiltersController();

filters.init();
movies.init();

// function deleteMovieFromMovies() {
//   // eslint-disable-next-line no-alert
//   const deleteIndex = +prompt("Укажите ID удаляемого объекта", "");

//   movies.delete(deleteIndex);
//   movies.render("movie-list");
// }

// function addMovieToMovies() {
//   // eslint-disable-next-line no-alert
//   const deleteIndex = +prompt("Укажите сколько объектов добавить", "0");

//   if (deleteIndex > 0) {
//     movies.addRandomMovies(deleteIndex);
//     movies.render("movie-list");
//   }
// }

// function submitButton() {
//   movies.render("movie-list");
// }

// function getButton() {
//   // eslint-disable-next-line no-alert
//   const getId = +prompt("Укажите ID объектf", "");

//   // eslint-disable-next-line no-console
//   console.log(movies.get(getId));
// }

// // document.querySelector("#delete-button").addEventListener("click", deleteMovieFromMovies);
// document.querySelector("#submit-button").addEventListener("click", submitButton);
// document.querySelector("#add-button").addEventListener("click", addMovieToMovies);
// document.querySelector("#edit-button").addEventListener("click", getButton);
