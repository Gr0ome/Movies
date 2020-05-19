import { Component } from "../components/utils";

class MovieView extends Component {
  constructor(movie) {
    super();
    this.movie = movie;
  }

  getTemplate() {
    if (this.movie === null) {
      return "<p>Фильма с таким ID нет!</p>";
    }
    let row = "";

    row = `<div class="movie-from-list">
             <p>Название:
               <a
                 class="title-link"
                 href="movie.html?id=${this.movie.id}" 
                 title="Перейти к фильму">
                 ${this.movie.name}                
               </a>
             </p>
             <p>Цена: ${this.movie.price}</p>
             <p>Рейтинг: ${this.movie.rating}</p>
             <p>Продолжительность: ${this.movie.duration} мин.</p>
             <p>Жанры: ${this.movie.genre}</p>
           </div>`;

    return row;
  }
}

export { MovieView };