import { Movies } from "./components/movies";
import { getMovies } from "./components/data";
import { Filters, FILTER } from "./components/filters";

const allFilters = new Filters(FILTER);
const allMovies = new Movies(getMovies(3));

allFilters.render("filters-div");
allFilters.selectsOptionFill();

allMovies.getAll();

function deleteMovieFromMovies() {
  // eslint-disable-next-line no-alert
  const deleteIndex = +prompt("Укажите ID удаляемого объекта", "");

  allMovies.delete(deleteIndex);
  allMovies.render("movie-list");
}

function addMovieToMovies() {
  // eslint-disable-next-line no-alert
  const deleteIndex = +prompt("Укажите сколько объектов добавить", "0");

  if (deleteIndex > 0) {
    allMovies.addRandomMovies(deleteIndex);
    allMovies.render("movie-list");
  }
}

function submitButton() {
  allMovies.render("movie-list");
}

function getButton() {
  // eslint-disable-next-line no-alert
  const getId = +prompt("Укажите ID объектf", "");

  allMovies.get(getId);
}

document.querySelector("#delete-button").addEventListener("click", deleteMovieFromMovies);
document.querySelector("#submit-button").addEventListener("click", submitButton);
document.querySelector("#add-button").addEventListener("click", addMovieToMovies);
document.querySelector("#edit-button").addEventListener("click", getButton);
