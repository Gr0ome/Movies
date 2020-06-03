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

  _getEditBlock(movie) {
    const datalist = `<datalist id="datalist-price">
                        <option value="Подписка">
                        <option value="Платно">
                        <option value="Бесплатно">
                      </datalist>`;

    let priceText = movie.price;
    let editPriceClass = 'class="hidden"';

    if (!isNaN(movie.price.slice(0, movie.price.indexOf("$")))) {
      priceText = "Платно";
      editPriceClass = "";
    }

    return `<div class="popup">Click    
              ${datalist}        
                <div class="popuptext" id="myPopup">
                  <input type="hidden" id="edit-movie-id" value="${movie.id}"/>
                  <p><label for="edit-movie-name">Название:</label>
                  <input type="text" name="edit-name" id="edit-movie-name" value="${movie.name}" size="30"/>
                  </p>
                  <p id="p-price">
                  <label>Цена</label>
                  <input type="text" id="edit-movie-price-text" list="datalist-price" value="${priceText}"/>
                  <input type="text" name="edit-price+" id="edit-movie-price" maxlength="4" size="1" ${editPriceClass} value="${movie.price}" placeholder="$"/>
                  </p>
                  <p><label for="edit-movie-duration">Продолжительность, минут(ы):</label>
                  <input type="text" name="edit-duration" id="edit-movie-duration" value="${movie.duration}" maxlength="3" size="1"/>
                  </p>
                  <p><label for="edit-movie-genre">Жанры:</label>
                  <input type="text" name="edit-genre" id="edit-movie-genre" value="${movie.genre}" size="30"/>
                  </p>
                  <p><label for="edit-movie-description">Описание:</label>                
                  <textarea name="edit-description" id="edit-movie-description" class="description-textarea">${movie.description}</textarea>
                  </p>
                  <p><label for="edit-movie-languages">Языки:</label>
                  <input type="text" name="edit-languages" id="edit-movie-languages" value="${movie.languages}" size="30"/>
                  </p>
                  <p><label for="edit-movie-videoQuality">Качество видео:</label>
                  <input type="text" name="edit-videoQuality" id="edit-movie-videoQuality" value="${movie.videoQuality}" size="10"/>
                  </p>
                  <input type="button" value="Сохранить" style="margin: 20px" id="edit-save"/>
                </div>
            </div>`;
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

    row += this._getEditBlock(this.movie);
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