genresOptionFill("genreSel", movieGenres);
genresOptionFill("languagesSel", movieLaguages);
genresOptionFill("priceSel", moviePrice);
document.querySelector("#priceSel").options[2].text = "Платно";

function genresOptionFill(selId, array) {
  let querySelectorId = `#${selId}`;
  let selectElement = document.querySelector(querySelectorId);

  for (let genre in array) {
    selectElement.options[selectElement.options.length] = new Option(
      array[genre],
      genre
    );
  }
}

function isPropSelect(movie, property) {
  let selectValue = document.querySelector(`#${property}Sel`).value;

  if (selectValue === "selectTitle") return true;

  switch (property) {
    case "genre":
      return movies[movie].genre.includes(movieGenres[selectValue]);
    case "price":
      return movies[movie].price.includes(moviePrice[selectValue]);
    case "languages":
      return movies[movie].languages.includes(movieLaguages[selectValue]);
  }
}

function showMovieTitles() {
  let moviesList = document.querySelector("#movieList");
  let movieDiv = "";

  for (let movie in movies) {
    if (
      isPropSelect(movie, "genre") &&
      isPropSelect(movie, "price") &&
      isPropSelect(movie, "languages")
    ) {
      movieDiv += `<div class="movie-from-list">
      Название: ${movies[movie].name}<br>
      Цена: ${movies[movie].price}<br>
      Рейтинг: ${movies[movie].rating}<br>
      Продолжительность: ${movies[movie].duration} мин.<br>
      Жанры: ${movies[movie].genre}
      </div>`;
    }
  }

  moviesList.innerHTML = movieDiv;
  movieDiv = "";
}
