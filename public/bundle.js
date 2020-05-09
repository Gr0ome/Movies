/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/get-movies.js":
/*!******************************!*\
  !*** ./src/js/get-movies.js ***!
  \******************************/
/*! exports provided: movieGenres, movieLaguages, moviePrice, movies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"movieGenres\", function() { return movieGenres; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"movieLaguages\", function() { return movieLaguages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moviePrice\", function() { return moviePrice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"movies\", function() { return movies; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\r\n\r\nconst movieTitles = [\r\n  \"За деревьями\",\r\n  \"Апгрейд\",\r\n  \"Южный ветер\",\r\n  \"Первому игроку приготовиться\",\r\n  \"Пассажиры\",\r\n  \"Человек будущего\",\r\n  \"Исходный код\",\r\n  \"Преступник\",\r\n  \"Посвященный\",\r\n  \"Пробуждающая совесть 2: Дар змеи\",\r\n  \"Побег из Шоушенка\",\r\n  \"Зеленая миля\",\r\n  \"Форрест Гамп\",\r\n  \"1 + 1\",\r\n  \"Начало\",\r\n  \"Король Лев\",\r\n  \"Бойцовский клуб\",\r\n  \"Крестный отец\",\r\n  \"Престиж\",\r\n  \"Игры разума\",\r\n  \"Интерстеллар\",\r\n  \"Властелин колец: Возвращение Короля\",\r\n  \"Гладиатор\",\r\n  \"Назад в будущее\",\r\n  \"Карты, деньги, два ствола\",\r\n];\r\n\r\nconst movieGenres = [\"Боевик\", \"Ужасы\", \"Фантсатсика\", \"Романтика\", \"Комедия\", \"Семейный\", \"Спорт\"];\r\n\r\nconst movieLaguages = [\"Английский\", \"Русский\", \"Украинский\", \"Французкий\"];\r\n\r\nconst movieQuality = [\"HD 1080p\", \"4K\", \"2k\", \"HD\"];\r\n\r\nconst movieComments = [\r\n  \"Жаль что так меняется озвучка с каждым сезоном,только к одной привыкнешь и тут опять. А так всё найс. 2 сезона за 2 недели хд\",\r\n  \"Отличный сериал! Великолепный сюжет, актеры. Все замечательно! Последняя серия 8 сезона - это Достойный финал достойного фильма!\",\r\n  \"Отличный сериал!\",\r\n  \"Супер сериал\",\r\n  \"Сериал для детей, муть\",\r\n  \"Мдааа.Конечно то что в жизни разошлись Самерхолдер и Добрев, положило жирный такой отпечаток на сценарий!Если бы не этот факт последних 2 сезона могли бы быть более достойными, и как последняя серия в которые впихнули всё что можно и нельзя!!! А так спасибо всем актёрам большое!\",\r\n  \"Елена Гилберт переживает трагедию – в автокатастрофе она потеряла родителей и брата. Брата она не теряла!!!!он принимает активное участие в жизни.Исправте, пожалуйста \",\r\n  \"Сереал суппер! актёры, сюжет! Очень интересный! Единственный минус это ДУБЛЯЖ после второго сезона не очень!! У него сходство с сереалом ДРЕВНИЕ!! Про Клауса! Вобщем оценка 10/10\",\r\n];\r\n\r\nconst moviePrice = [\"Подписка\", \"$\", \"Бесплатно\"];\r\n\r\nconst actors = [\r\n  {\r\n    name: \"Tom Hardy\",\r\n    photoUrl: \"photo.url\",\r\n  },\r\n  {\r\n    name: \"Leonardo DiCaprio\",\r\n    photoUrl: \"photo.url\",\r\n  },\r\n  {\r\n    name: \"Matthew McConaughey\",\r\n    photoUrl: \"photo.url\",\r\n  },\r\n  {\r\n    name: \"Ryan Reynolds\",\r\n    photoUrl: \"photo.url\",\r\n  },\r\n  {\r\n    name: \"Christian Bale\",\r\n    photoUrl: \"photo.url\",\r\n  },\r\n  {\r\n    name: \"Hugh Jackman\",\r\n    photoUrl: \"photo.url\",\r\n  },\r\n  {\r\n    name: \"Mark Wahlberg\",\r\n    photoUrl: \"photo.url\",\r\n  },\r\n  {\r\n    name: \"James McAvoy\",\r\n    photoUrl: \"photo.url\",\r\n  },\r\n  {\r\n    name: \"Scarlett Johansson\",\r\n    photoUrl: \"photo.url\",\r\n  },\r\n  {\r\n    name: \"Natalie Portman\",\r\n    photoUrl: \"photo.url\",\r\n  },\r\n];\r\n\r\nconst MAX_MOVIE_LENGTH = 25;\r\nconst MAX_MOVIE_PRICE = 1000;\r\nconst MIN_MOVIE_DURATION = 20;\r\nconst MAX_MOVIE_DURATION = 180;\r\nconst MAX_MOVIE_ACTORS_QUANTITY = 10;\r\n\r\nfunction setNumberArray(length) {\r\n  const arr = [];\r\n\r\n  while (arr.length < length) {\r\n    const randNumber = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getRandomNumber\"])(0, length);\r\n\r\n    if (!arr.includes(randNumber)) {\r\n      arr.push(randNumber);\r\n    }\r\n  }\r\n\r\n  return arr;\r\n}\r\n\r\nfunction setArrayFromArray(length, array) {\r\n  const arr = [];\r\n\r\n  while (arr.length < length) {\r\n    const randArrayValue = array[Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getRandomNumber\"])(0, array.length - 1)];\r\n\r\n    if (!arr.includes(randArrayValue)) {\r\n      arr.push(randArrayValue);\r\n    }\r\n  }\r\n\r\n  return arr;\r\n}\r\n\r\nfunction Movie(movie) {\r\n  this.id = movie.id;\r\n  this.name = movie.name;\r\n  this.price = movie.price;\r\n  this.rating = movie.rating;\r\n  this.duration = movie.duration;\r\n  this.genre = movie.genre;\r\n  this.description = movie.description;\r\n  this.languages = movie.languages;\r\n  this.actors = movie.actors;\r\n  this.videoQuality = movie.videoQuality;\r\n  this.recommended = movie.recommended;\r\n  this.reviews = movie.reviews;\r\n  this.videoSrc = movie.videoSrc;\r\n}\r\n\r\nfunction getRandomMovie(i) {\r\n  const randomMovie = {\r\n    id: i,\r\n    name: movieTitles[Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getRandomNumber\"])(0, MAX_MOVIE_LENGTH - 1)],\r\n    price: moviePrice[Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getRandomNumber\"])(0, moviePrice.length - 1)],\r\n    rating: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getRandomNumber\"])(1, 10),\r\n    duration: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getRandomNumber\"])(MIN_MOVIE_DURATION, MAX_MOVIE_DURATION),\r\n    genre: setArrayFromArray(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getRandomNumber\"])(1, 4), movieGenres),\r\n    description: \"Описание\",\r\n    languages: setArrayFromArray(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getRandomNumber\"])(1, 3), movieLaguages),\r\n    actors: setArrayFromArray(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getRandomNumber\"])(0, MAX_MOVIE_ACTORS_QUANTITY - 1), actors),\r\n    videoQuality: movieQuality[Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getRandomNumber\"])(0, movieQuality.length - 1)],\r\n    recommended: setNumberArray(5),\r\n    reviews: setArrayFromArray(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getRandomNumber\"])(1, 4), movieComments),\r\n    videoSrc: \"video.url\",\r\n  };\r\n\r\n  if (randomMovie.price === \"$\") {\r\n    randomMovie.price = `${Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getRandomNumber\"])(1, MAX_MOVIE_PRICE)}$`;\r\n  }\r\n\r\n  return randomMovie;\r\n}\r\n\r\nfunction getMovies(moviesQuantity) {\r\n  const movieArray = [];\r\n\r\n  // eslint-disable-next-line no-plusplus\r\n  for (let i = 0; i < moviesQuantity; i++) {\r\n    const movie = new Movie(getRandomMovie(i));\r\n    movieArray.push(movie);\r\n  }\r\n\r\n  return movieArray;\r\n}\r\n\r\nconst movies = getMovies(25);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/get-movies.js?");

/***/ }),

/***/ "./src/js/html-fill.js":
/*!*****************************!*\
  !*** ./src/js/html-fill.js ***!
  \*****************************/
/*! exports provided: showMovieTitles, setOptionsIntoSelects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showMovieTitles\", function() { return showMovieTitles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setOptionsIntoSelects\", function() { return setOptionsIntoSelects; });\n/* harmony import */ var _get_movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-movies */ \"./src/js/get-movies.js\");\n/* eslint-disable no-restricted-syntax */\r\n/* eslint-disable guard-for-in */\r\n\r\n\r\n\r\n// Наполенине select'ов опциями\r\nfunction setOptionsIntoSelects() {\r\n  function genresOptionFill(property, propertyArray) {\r\n    const querySelectorId = `#${property}Sel`;\r\n    const selectElement = document.querySelector(querySelectorId);\r\n\r\n    for (const prop in propertyArray) {\r\n      selectElement.options[selectElement.options.length] = new Option(\r\n        propertyArray[prop],\r\n        prop,\r\n      );\r\n    }\r\n  }\r\n  genresOptionFill(\"genre\", _get_movies__WEBPACK_IMPORTED_MODULE_0__[\"movieGenres\"]);\r\n  genresOptionFill(\"languages\", _get_movies__WEBPACK_IMPORTED_MODULE_0__[\"movieLaguages\"]);\r\n  genresOptionFill(\"price\", _get_movies__WEBPACK_IMPORTED_MODULE_0__[\"moviePrice\"]);\r\n  document.querySelector(\"#priceSel\").options[2].text = \"Платно\";\r\n}\r\n\r\nfunction isPropSelect(movie, property) {\r\n  const selectValue = document.querySelector(`#${property}Sel`).value;\r\n\r\n  if (selectValue === \"selectTitle\") return true;\r\n\r\n  switch (property) {\r\n    case \"genre\":\r\n      return _get_movies__WEBPACK_IMPORTED_MODULE_0__[\"movies\"][movie].genre.includes(_get_movies__WEBPACK_IMPORTED_MODULE_0__[\"movieGenres\"][selectValue]);\r\n    case \"price\":\r\n      return _get_movies__WEBPACK_IMPORTED_MODULE_0__[\"movies\"][movie].price.includes(_get_movies__WEBPACK_IMPORTED_MODULE_0__[\"moviePrice\"][selectValue]);\r\n    case \"languages\":\r\n      return _get_movies__WEBPACK_IMPORTED_MODULE_0__[\"movies\"][movie].languages.includes(_get_movies__WEBPACK_IMPORTED_MODULE_0__[\"movieLaguages\"][selectValue]);\r\n    default:\r\n      return false;\r\n  }\r\n}\r\n\r\nfunction showMovieTitles() {\r\n  const moviesList = document.querySelector(\"#movieList\");\r\n  let movieDiv = \"\";\r\n\r\n  for (const movie in _get_movies__WEBPACK_IMPORTED_MODULE_0__[\"movies\"]) {\r\n    if (\r\n      isPropSelect(movie, \"genre\")\r\n      && isPropSelect(movie, \"price\")\r\n      && isPropSelect(movie, \"languages\")\r\n    ) {\r\n      const selectedMovie = _get_movies__WEBPACK_IMPORTED_MODULE_0__[\"movies\"][movie];\r\n\r\n      movieDiv += `<div class=\"movie-from-list\">\r\n      <span>\r\n        Название:<a\r\n                  class=\"title-link\"\r\n                  href=\"movie.html?id=${selectedMovie.id}\" \r\n                  title=\"Перейти к фильму\">\r\n                  ${selectedMovie.name}                \r\n                 </a>\r\n      </span><br>\r\n      <span>\r\n        Цена: ${selectedMovie.price}\r\n      </span><br>\r\n      <span>\r\n        Рейтинг: ${selectedMovie.rating}\r\n      </span><br>\r\n      <span>\r\n        Продолжительность: ${selectedMovie.duration} мин.\r\n      </span><br>\r\n      <span>\r\n        Жанры: ${selectedMovie.genre}\r\n      </span>\r\n      </div>`;\r\n    }\r\n  }\r\n\r\n  moviesList.innerHTML = movieDiv;\r\n  movieDiv = \"\";\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/html-fill.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-fill */ \"./src/js/html-fill.js\");\n\r\n\r\nObject(_html_fill__WEBPACK_IMPORTED_MODULE_0__[\"setOptionsIntoSelects\"])();\r\nObject(_html_fill__WEBPACK_IMPORTED_MODULE_0__[\"showMovieTitles\"])();\r\n\r\ndocument.querySelector(\".select-button\").addEventListener(\"click\", _html_fill__WEBPACK_IMPORTED_MODULE_0__[\"showMovieTitles\"]);\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: getRandomNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomNumber\", function() { return getRandomNumber; });\nfunction getRandomNumber(min, max) {\r\n  const random = min + Math.random() * (max + 1 - min);\r\n  return Math.floor(random);\r\n}\r\n\r\n// eslint-disable-next-line import/prefer-default-export\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });