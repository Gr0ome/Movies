function onIndexLoad() {
  genresOptionFill("genre", movieGenres);
  genresOptionFill("languages", movieLaguages);
  genresOptionFill("price", moviePrice);
  document.querySelector("#priceSel").options[2].text = "Платно";

  function genresOptionFill(property, propertyArray) {
    let querySelectorId = `#${property}Sel`;
    let selectElement = document.querySelector(querySelectorId);

    for (let property in array) {
      selectElement.options[selectElement.options.length] = new Option(
        propertyArray[property],
        property
      );
    }
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
      let selectedMovie = movies[movie];

      movieDiv += `<div class="movie-from-list">
      <span>
        Название:<a
                  class="title-link"
                  href="movie.html?id=${selectedMovie.id}" 
                  title="Перейти к фильму">
                  ${selectedMovie.name}                
                 </a>
      </span><br>
      <span>
        Цена: ${selectedMovie.price}
      </span><br>
      <span>
        Рейтинг: ${selectedMovie.rating}
      </span><br>
      <span>
        Продолжительность: ${selectedMovie.duration} мин.
      </span><br>
      <span>
        Жанры: ${selectedMovie.genre}
      </span>
      </div>`;
    }
  }

  moviesList.innerHTML = movieDiv;
  movieDiv = "";
}
