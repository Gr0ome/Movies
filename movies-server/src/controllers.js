
const _ = require('lodash');
const fs = require('fs');
const path = require('path');

module.exports = function (db) {

  function getById(id) {
    const movies = db.getData("/movies");
    const movie = movies.find(el => el.id === id);
    return movie;
  }

  function removeMovieFromList(id) {
    return db.getData("/movies").filter(movie => movie.id !== +id);
  }

  function getAll(req, res) {
    const data = db.getData("/movies");
    res.json(data);
  }

  function get(req, res) {
    const id = +req.params.id;
    const movie = getById(id);

    if (movie) {
      res.json(movie);
    } else {
      res.status(400).send({
        message: `Could not find movie with id: ${id}`
     });
    }
  }

  function init(req, res) {
    const data = fs.readFileSync(path.resolve(__dirname, '../config/source.json'), 'utf-8');
    db.push('/movies', JSON.parse(data));
    res.send('all films were restored to default')
  }

  function update(req, res) {
    const { id, data } = req.body;
    const movie = getById(+id);

    if (!movie) {
      res.status(400).send({
        message: `Could not find movie with id: ${id}`
      });
     return;
    }

    const movies = removeMovieFromList(id);
    const updatedMovie = _.merge(movie, data);

    const result = [...movies, updatedMovie];

    db.push('/movies', result);

    res.json(result);
  }

  function remove(req, res) {
    const { id } = req.body;
    const movie = getById(+id);

    if (!movie) {
      res.status(400).send({
        message: `Could not find movie with id: ${id}`
      });
     return;
    }

    const movies = removeMovieFromList(id);
    db.push('/movies', movies);
    res.json(movies);
  }

  function create(req, res) {
    const movie = req.body.data;
    if (!movie) {
      res.status(400).send({
        message: `You did not provide data field`
      });
      return;
    }
    const data = db.getData("/movies");

    res.json([...data, movie]);
  }

  return {
    getAll,
    get,
    init,
    update,
    remove,
    create
  }
}

