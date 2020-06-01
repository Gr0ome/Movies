import { AbstractComponent } from "../common/abstract-component";

class MovieView extends AbstractComponent {
  constructor(movie) {
    super();
    this.movie = movie.movie;
  }

  _getRecommendedMovies(recommendedTitles) {
    this.recommended = recommendedTitles;
  }

  _getActorsTable(actorsList) {
    let actorsTable = "<table border=1><tr>";

    for (const actorIndex in actorsList) {
      const actor = actorsList[actorIndex];

      actorsTable += `<td><img width="50" heigth="100" src="${actor.photoUrl}" title="${actor.name}"></td>`;
    }

    actorsTable += "</tr></table>";

    return actorsTable;
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
    <p><b>Название:</b> ${this.movie.name}</p>
    <video src="${this.movie.videoSrc}" controls width="720">
      Sorry, your browser doesn't support embedded videos!
    </video>
    <p><b>Цена:</b> ${this.movie.price}</p>
    <p><b>Рейтинг:</b> ${this.movie.rating}</p>
    <p><b>Продолжительность:</b> ${this.movie.duration} мин.</p>
    <p><b>Жанры:</b> ${this.movie.genre}</p>
    <p><b>Описание:</b> ${this.movie.description}</p>
    <p><b>Языки:</b> ${this.movie.languages}</p>    
    <p><b>Качество видео:</b> ${this.movie.videoQuality}</p>    
    <p><b>Рекомендации:</b> ${this.recommended}</p>`;

    row += `<p><b>Актёры:</b> <br> ${this._getActorsTable(this.movie.actors)}`;

    // <p>Отзывы: ${this.movie.reviews}</p>
    row += "</div>";

    row += '<input type="button" value="Назад" style="margin: 20px" id="movie-to-list"></input>';

    return row;
  }
}

export { MovieView };