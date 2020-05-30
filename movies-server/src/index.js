const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');


const db = new JsonDB(new Config("moviesDb", true, false, '/'));
const { getAll, get, init, update, remove, create } = require('./controllers')(db)

var cors = require('cors')


app.use(cors())
app.use(bodyParser.json())

app.get('/api/movies', getAll);

app.get('/api/movies/:id', get);

app.get('/api/init', init);


// id и поле data
app.put('/api/movies', update);

app.delete('/api/movies', remove);

app.post('/api/movies', create)



app.listen(4433, function () {
  console.log('Example app listening on port 4433!');
});
