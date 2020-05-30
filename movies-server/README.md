
GET: http://localhost:4433/api/init - Создаст новый файл с фильмами

GET: http://localhost:4433/api/movies - Получает список всех фильмов
GET: http://localhost:4433/api/movies/1 - Получает фильм по указанному id (в нашем пример 1, число можно отправлять любое существуюущее id)

POST: http://localhost:4433/api/movies/ (data) - создает новый фильм  указанными данными в объекте data
PUT: http://localhost:4433/api/movies/  (id, data) - обновляет фильм по указанному id, указанными данными в объекте data
DELETE: http://localhost:4433/api/movies/ (id) - удаляет фильм по указанному id
