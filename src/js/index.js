import { setOptionsIntoSelects } from "./html-fill";
import { Movies } from "./components/movies";
import { getMovies } from "./components/data";

setOptionsIntoSelects();
const allMovies = new Movies(getMovies(3));

allMovies.render("movie-list");

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

function pickButton() {
  allMovies.render("movie-list");
}

document.querySelector("#delete-button").addEventListener("click", deleteMovieFromMovies);

document.querySelector("#pick-button").addEventListener("click", pickButton);

document.querySelector("#add-button").addEventListener("click", addMovieToMovies);