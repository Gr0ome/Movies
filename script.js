const movieTitles = [
  "За деревьями",
  "Апгрейд",
  "Южный ветер",
  "Первому игроку приготовиться",
  "Пассажиры",
  "Человек будущего",
  "Исходный код",
  "Преступник",
  "Посвященный",
  "Пробуждающая совесть 2: Дар змеи",
  "Побег из Шоушенка",
  "Зеленая миля",
  "Форрест Гамп",
  "1 + 1",
  "Начало",
  "Король Лев",
  "Бойцовский клуб",
  "Крестный отец",
  "Престиж",
  "Игры разума",
  "Интерстеллар",
  "Властелин колец: Возвращение Короля",
  "Гладиатор",
  "Назад в будущее",
  "Карты, деньги, два ствола",
];

const movieGenres = [
  "Боевик",
  "Ужасы",
  "Фантсатсика",
  "Романтика",
  "Комедия",
  "Семейный",
  "Спорт",
];

const movieLaguages = ["Английский", "Русский", "Украинский", "Французкий"];

const movieQuality = ["HD 1080p", "4K", "2k", "HD"];

const movieComments = [
  "Жаль что так меняется озвучка с каждым сезоном,только к одной привыкнешь и тут опять. А так всё найс. 2 сезона за 2 недели хд",
  "Отличный сериал! Великолепный сюжет, актеры. Все замечательно! Последняя серия 8 сезона - это Достойный финал достойного фильма!",
  "Отличный сериал!",
  "Супер сериал",
  "Сериал для детей, муть",
  "Мдааа.Конечно то что в жизни разошлись Самерхолдер и Добрев, положило жирный такой отпечаток на сценарий!Если бы не этот факт последних 2 сезона могли бы быть более достойными, и как последняя серия в которые впихнули всё что можно и нельзя!!! А так спасибо всем актёрам большое!",
  'Елена Гилберт переживает трагедию – в автокатастрофе она потеряла родителей и брата." Брата она не теряла!!!! он принимает активное участие в жизни. Исправте, пожалуйста',
  "Сереал суппер! актёры, сюжет! Очень интересный! Единственный минус это ДУБЛЯЖ после второго сезона не очень!! У него сходство с сереалом ДРЕВНИЕ!! Про Клауса! Вобщем оценка 10/10",
];

let moviePrice = ["подписка", `${randomNumber(0, 1000)}$`, "бесплатно"];

const actors = [
  {
    name: "Tom Hardy",
    photoUrl: "photo.url",
  },
  {
    name: "Leonardo DiCaprio",
    photoUrl: "photo.url",
  },
  {
    name: "Matthew McConaughey",
    photoUrl: "photo.url",
  },
  {
    name: "Ryan Reynolds",
    photoUrl: "photo.url",
  },
  {
    name: "Christian Bale",
    photoUrl: "photo.url",
  },
  {
    name: "Hugh Jackman",
    photoUrl: "photo.url",
  },
  {
    name: "Mark Wahlberg",
    photoUrl: "photo.url",
  },
  {
    name: "James McAvoy",
    photoUrl: "photo.url",
  },
  {
    name: "Scarlett Johansson",
    photoUrl: "photo.url",
  },
  {
    name: "Natalie Portman",
    photoUrl: "photo.url",
  },
];

function randomNumber(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

let moviesId = 1;

function getMovieId() {
  return moviesId++;
}

function arrayFill(arraylength, arrayData) {
  let arr = [];

  if (arrayData === "numbers") {
    while (arr.length !== arraylength) {
      let randNumber = randomNumber(0, 24);
      if (!arr.includes(randNumber)) arr.push(randNumber);
    }
  } else {
    while (arr.length !== arraylength) {
      let randValue = arrayData[randomNumber(0, arrayData.length - 1)];
      if (!arr.includes(randValue)) arr.push(randValue);
    }
  }

  return arr;
}

function Movie() {
  this.id = getMovieId();
  this.name = movieTitles[randomNumber(0, 24)];
  this.price = moviePrice[randomNumber(0, 2)];
  this.rating = randomNumber(0, 10);
  this.duration = randomNumber(0, 180);
  this.genre = arrayFill(randomNumber(1, 4), movieGenres);
  this.description = "Описание";
  this.языки = arrayFill(randomNumber(1, 3), movieLaguages);
  this.актеры = arrayFill(randomNumber(1, 10), actors);
  this.videoQuality = movieQuality[randomNumber(0, 3)];
  this.recommended = arrayFill(randomNumber(1, 5), "numbers");
  this.reviews = arrayFill(randomNumber(1, 4), movieComments);
  this.videoSrc = "video.url";
}

function getMovies(moviesQuantity) {
  let movieArray = [];

  while (movieArray.length < moviesQuantity) {
    let movie = new Movie();
    movieArray.push(movie);
  }

  return movieArray;
}

const movies = getMovies(25);

console.log(movies);
