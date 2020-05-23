class MovieModel {
  constructor(movie) {
    this.movie = movie;
  }

  edit(id, data) {
    this.movie = Object.assign(this.movie, data);
  }
}

export { MovieModel };