import { getRandomNumber } from "./utils";

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

const movieGenres = ["Боевик", "Ужасы", "Фантсатсика", "Романтика", "Комедия", "Семейный", "Спорт"];

const movieLaguages = ["Английский", "Русский", "Украинский", "Французкий"];

const movieQuality = ["HD 1080p", "4K", "2k", "HD"];

const movieComments = [
  "Жаль что так меняется озвучка с каждым сезоном,только к одной привыкнешь и тут опять. А так всё найс. 2 сезона за 2 недели хд",
  "Отличный сериал! Великолепный сюжет, актеры. Все замечательно! Последняя серия 8 сезона - это Достойный финал достойного фильма!",
  "Отличный сериал!",
  "Супер сериал",
  "Сериал для детей, муть",
  "Мдааа.Конечно то что в жизни разошлись Самерхолдер и Добрев, положило жирный такой отпечаток на сценарий!Если бы не этот факт последних 2 сезона могли бы быть более достойными, и как последняя серия в которые впихнули всё что можно и нельзя!!! А так спасибо всем актёрам большое!",
  "Елена Гилберт переживает трагедию – в автокатастрофе она потеряла родителей и брата. Брата она не теряла!!!!он принимает активное участие в жизни.Исправте, пожалуйста ",
  "Сереал суппер! актёры, сюжет! Очень интересный! Единственный минус это ДУБЛЯЖ после второго сезона не очень!! У него сходство с сереалом ДРЕВНИЕ!! Про Клауса! Вобщем оценка 10/10",
];

const moviePrice = ["Подписка", "$", "Бесплатно"];

const actors = [
  {
    name: "Tom Hardy",
    photoUrl: "src/img/actors/Hardy.jpg",
  },
  {
    name: "Leonardo DiCaprio",
    photoUrl: "src/img/actors/DiCaprio.jpg",
  },
  {
    name: "Matthew McConaughey",
    photoUrl: "src/img/actors/McConaughey.jpg",
  },
  {
    name: "Ryan Reynolds",
    photoUrl: "src/img/actors/Reynolds.jpg",
  },
  {
    name: "Christian Bale",
    photoUrl: "src/img/actors/Bale.jpg",
  },
  {
    name: "Hugh Jackman",
    photoUrl: "src/img/actors/Jackman.jpg",
  },
  {
    name: "Mark Wahlberg",
    photoUrl: "src/img/actors/Wahlberg.jpg",
  },
  {
    name: "James McAvoy",
    photoUrl: "src/img/actors/McAvoy.jpg",
  },
  {
    name: "Scarlett Johansson",
    photoUrl: "src/img/actors/Johansson.jpg",
  },
  {
    name: "Natalie Portman",
    photoUrl: "src/img/actors/Portman.jpg",
  },
];

const RULES = {
  MOVIE: {
    IMG: "src/img/movie.jpg",
    MAX: {
      QUANTITY: 25,
      PRICE: 1000,
      DURATION: 180,
      ACTORS_QUANTITY: 10,
    },
    MIN: {
      DURATION: 20,
    },
  },
};

function setNumberArray(length) {
  const arr = [];

  while (arr.length < length) {
    const randNumber = getRandomNumber(0, length);

    if (!arr.includes(randNumber)) {
      arr.push(randNumber);
    }
  }

  return arr;
}

function setArrayFromArray(length, array) {
  const arr = [];

  while (arr.length < length) {
    const randArrayValue = array[getRandomNumber(0, array.length - 1)];

    if (!arr.includes(randArrayValue)) {
      arr.push(randArrayValue);
    }
  }

  return arr;
}

function Movie(movie) {
  this.id = movie.id;
  this.name = movie.name;
  this.price = movie.price;
  this.rating = movie.rating;
  this.duration = movie.duration;
  this.genre = movie.genre;
  this.description = movie.description;
  this.languages = movie.languages;
  this.actors = movie.actors;
  this.videoQuality = movie.videoQuality;
  this.recommended = movie.recommended;
  this.reviews = movie.reviews;
  this.videoSrc = movie.videoSrc;
  this.posterSrc = movie.posterSrc;
}

function getRandomMovie(i) {
  const randomMovie = {
    id: i,
    name: movieTitles[getRandomNumber(0, RULES.MOVIE.MAX.QUANTITY - 1)],
    price: moviePrice[getRandomNumber(0, moviePrice.length - 1)],
    rating: getRandomNumber(1, 10),
    duration: getRandomNumber(RULES.MOVIE.MIN.DURATION, RULES.MOVIE.MAX.DURATION),
    genre: setArrayFromArray(getRandomNumber(1, 4), movieGenres),
    description: "Описание",
    languages: setArrayFromArray(getRandomNumber(1, 3), movieLaguages),
    actors: setArrayFromArray(getRandomNumber(1, RULES.MOVIE.MAX.ACTORS_QUANTITY - 1), actors),
    videoQuality: movieQuality[getRandomNumber(0, movieQuality.length - 1)],
    recommended: setNumberArray(5),
    reviews: setArrayFromArray(getRandomNumber(1, 4), movieComments),
    videoSrc: "video.url",
    posterSrc: RULES.MOVIE.IMG,
  };

  if (randomMovie.price === "$") {
    randomMovie.price = `${getRandomNumber(1, RULES.MOVIE.MAX.PRICE)}$`;
  }

  return randomMovie;
}

function getMovies(moviesQuantity) {
  const movieArray = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < moviesQuantity; i++) {
    const movie = new Movie(getRandomMovie(i));
    movieArray.push(movie);
  }

  return movieArray;
}

const FILTER = {
  types: {
    buttons: {
      submit: {
        name: "submit",
        class: "filter-button",
        id: "submit-button",
      },
      add: {
        name: "add",
        class: "filter-button",
        id: "add-button",
      },
      delete: {
        name: "delete",
        class: "filter-button",
        id: "delete-button",
      },
      edit: {
        name: "edit",
        class: "filter-button",
        id: "edit-button",
      },
    },
    selects: {
      genre: {
        dataArray: movieGenres,
        name: "genre-select",
        class: "filter-select",
        id: "genre-sel",
      },
      languages: {
        dataArray: movieLaguages,
        name: "languages-select",
        class: "filter-select",
        id: "languages-sel",
      },
      price: {
        dataArray: moviePrice,
        name: "price-select",
        class: "filter-select",
        id: "price-sel",
      },
    },
  },
  additionalData: {
    selectsNames: ["Жанр", "Язык", "Цена"],
    buttonsNames: ["Выбрать", "Добавить", "Удалить", "Корректировать"],
  },
};

export {
  movieGenres,
  movieLaguages,
  moviePrice,
  getMovies,
  FILTER,
};
