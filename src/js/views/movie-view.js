import { AbstractComponent } from "../common/abstract-component";

class MovieView extends AbstractComponent {
  constructor(movie) {
    super();
    this.movie = movie.movie;
  }

  _getRecommendedMovies(recommendedMovies) {
    this.recommended = recommendedMovies;
  }

  _getActorsTable(actorsList) {
    let actorsTable = '<div><ul id=actors-ul>';

    for (const actorIndex in actorsList) {
      const actor = actorsList[actorIndex];

      actorsTable += `<li><img width="50" heigth="100" src="${actor.photoUrl}" title="${actor.name}"></li>`;
    }

    actorsTable += "</ul></div>";

    return actorsTable;
  }

  _getReviewsTable(reviews) {
    let reviewsTable = '<div><ul id="reviews-ul">';

    for (const reviewIndex in reviews) {
      const review = reviews[reviewIndex];

      reviewsTable += `<li>${review}</li>`;
    }

    reviewsTable += "</ul></div>";

    return reviewsTable;
  }

  _getRecommendedBlock() {
    let recommendedBlock = "";

    for (const movieIndex in this.recommended) {
      const movie = this.recommended[movieIndex];

      recommendedBlock += `<input type="button" 
                                  class="title-link" 
                                  data-movie-id="${movie.id}"
                                  value="${movie.name}" />`;
    }
    return recommendedBlock;
  }

  getEditForm(cb) {
    this.editForm = cb;
  }

  getTemplate() {
    if (this.movie === null) {
      return "<p>Фильма с таким ID нет!</p>";
    }

    if (!isNaN(this.movie.price)) {
      this.movie.price = `${this.movie.price}$`;
    }
    let row = "";

    row = '<div class="movie-from-list">';

    row += `    
    <p>Название: ${this.movie.name}</p>
    <video src="${this.movie.videoSrc}" controls width="720">
      Sorry, your browser doesn't support embedded videos!
    </video>
    <p>Цена: ${this.movie.price}</p>
    <p>Рейтинг: ${this.movie.rating}</p>
    <p>Продолжительность: ${this.movie.duration} мин.</p>
    <p>Жанры: ${this.movie.genre}</p>
    <p>Описание: ${this.movie.description}</p>
    <p>Языки: ${this.movie.languages}</p>    
    <p>Качество видео: ${this.movie.videoQuality}</p>    
    <p id="one-movie-recommended">Рекомендации: ${this._getRecommendedBlock()}</p>`;

    row += `<p>Актёры: <br> ${this._getActorsTable(this.movie.actors)}`;

    row += `<div id="comments-block">Комментарии: ${this._getReviewsTable(this.movie.reviews)}</div>`;

    row += "</div>";

    row += '<input type="button" value="К списку фильмов" style="margin: 20px" id="movie-to-list"/>';

    row += this.editForm(this.movie);
    return row;
  }

  setMovieLinkHandler(handler) {
    const button = document.querySelector("#one-movie-recommended");

    button.addEventListener("click", handler);
  }

  setEditHandler(handler) {
    const button = document.querySelector(".popup");

    button.addEventListener("click", handler);
  }

  setPriceDatalistHandler(handler) {
    const datalist = document.querySelector("#edit-movie-price-text");

    datalist.addEventListener("input", handler);
  }
}

export { MovieView };