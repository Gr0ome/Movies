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
    let actorsTable = "<table><tr>";

    for (const actorIndex in actorsList) {
      const actor = actorsList[actorIndex];

      actorsTable += `<td><img width="50" heigth="100" src="${actor.photoUrl}" title="${actor.name}"></td>`;
    }

    actorsTable += "</tr></table>";

    return actorsTable;
  }

  _getReviewsTable(reviews) {
    let reviewsTable = '<table>';

    for (const reviewIndex in reviews) {
      const review = reviews[reviewIndex];

      reviewsTable += `<tr><td>${review}</td></tr>`;
    }

    reviewsTable += "</table>";

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

    row += `<p>Комментарии: ${this._getReviewsTable(this.movie.reviews)}</p>`;
    row += "</div>";

    row += '<input type="button" value="К списку фильмов" style="margin: 20px" id="movie-to-list"/>';

    row += `<div class="popup">Click
              <div class="popuptext" id="myPopup">
                <input type="hidden" id="edit-movie-id" value="${this.movie.id}"/>
                <span>Название:</span>
                <input type="text" name="name" id="edit-movie-name" value="${this.movie.name}"/>
                <span>Цена:</span>
                <input type="text" name="name" id="edit-movie-price" value="${this.movie.price}"/>
                <span>Продолжительность:</span>
                <input type="text" name="name" id="edit-movie-duration" value="${this.movie.duration}"/>
                <span>Жинры:</span>
                <input type="text" name="name" id="edit-movie-genre" value="${this.movie.genre}"/>
                <span>Описание:</span>
                <input type="text" name="name" id="edit-movie-description" value="${this.movie.description}"/>
                <span>Языки:</span>
                <input type="text" name="name" id="edit-movie-languages" value="${this.movie.languages}"/>
                <span>Качество видео:</span>
                <input type="text" name="name" id="edit-movie-videoQuality" value="${this.movie.videoQuality}"/>
                <button ></button>
              </div>
            </div>`;
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
}

export { MovieView };